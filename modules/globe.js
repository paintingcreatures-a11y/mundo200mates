/* ============================================================
   200 Mates — modules/globe.js
   ============================================================ */

const globeEl = document.getElementById("globe");

function getGlobeDimensions() {
  const s = globeEl.closest(".globe-section") || globeEl.parentElement;
  return { w: s?.clientWidth || 600, h: s?.clientHeight || 600 };
}

const { w: initW, h: initH } = getGlobeDimensions();
globeEl.style.width  = initW + "px";
globeEl.style.height = initH + "px";

const globe = Globe()(globeEl)
  .width(initW).height(initH)
  .globeImageUrl("//unpkg.com/three-globe/example/img/earth-dark.jpg")
  .backgroundColor("#000000")
  .pointOfView({ lat: 20, lng: -20, altitude: 2.5 });

globe.controls().autoRotate      = true;
globe.controls().autoRotateSpeed = 0.4;
globe.controls().minPolarAngle   = Math.PI * 0.2;
globe.controls().maxPolarAngle   = Math.PI * 0.8;
globe.controls().enablePan       = false;

let rotateTimer;
let isZoomed = false;

globe.controls().addEventListener("change", () => {
  const alt = globe.pointOfView().altitude;
  if (alt < ZOOM_THRESHOLD && !isZoomed) {
    isZoomed = true;
    globe.controls().autoRotate = false;
  } else if (alt >= ZOOM_THRESHOLD && isZoomed) {
    isZoomed = false;
    clearTimeout(rotateTimer);
    rotateTimer = setTimeout(() => { globe.controls().autoRotate = true; }, 800);
  }
});

globeEl.addEventListener("mousedown", () => {
  clearTimeout(rotateTimer);
  globe.controls().autoRotate = false;
});
globeEl.addEventListener("touchstart", () => {
  clearTimeout(rotateTimer);
  globe.controls().autoRotate = false;
});
["mouseup", "touchend"].forEach(ev => globeEl.addEventListener(ev, () => {
  if (!isZoomed) {
    clearTimeout(rotateTimer);
    rotateTimer = setTimeout(() => { globe.controls().autoRotate = true; }, 2000);
  }
}));

// Fix: cuando el mouse sale del globo sin haber hecho mouseup
// (ej: hover sobre un marker y salir), reactivar la rotación
globeEl.addEventListener("mouseleave", () => {
  if (!isZoomed) {
    clearTimeout(rotateTimer);
    rotateTimer = setTimeout(() => { globe.controls().autoRotate = true; }, 1200);
  }
});

window.addEventListener("resize", () => {
  const { w, h } = getGlobeDimensions();
  globeEl.style.width = w + "px"; globeEl.style.height = h + "px";
  globe.width(w).height(h);
});

// Polygons ──────────────────────────────────────────────────
function renderPolygons() {
  if (!countriesGeo.length) return;
  if (polyTimer) clearTimeout(polyTimer);
  polyTimer = setTimeout(() => {
    const colored = [...countriesColored], sel = selectedIso3;
    globe
      .polygonsData([])
      .polygonCapColor(d =>
        sel && d.iso3 === sel    ? "#c8a46e" :
        colored.includes(d.iso3) ? "#6A8F60" :
        "rgba(255,255,255,.04)"
      )
      .polygonSideColor(()  => "rgba(0,0,0,.2)")
      .polygonStrokeColor(() => "#2a2e24")
      .polygonAltitude(d =>
        sel && d.iso3 === sel    ? .02 :
        colored.includes(d.iso3) ? .012 :
        0
      )
      .onPolygonClick(p => { globe.controls().autoRotate = false; selectCountry(p); })
      .onPolygonHover(h => { globeEl.style.cursor = h ? "pointer" : "default"; })
      .polygonsData(countriesGeo.slice());
  }, 60);
}

// Markers ───────────────────────────────────────────────────
function applyJitter(mates) {
  const groups = {};
  mates.forEach((m, i) => {
    const k = `${m.lat.toFixed(1)},${m.lng.toFixed(1)}`;
    if (!groups[k]) groups[k] = [];
    groups[k].push({ ...m, _uid: `${m.id}_${i}` });
  });
  const out = [];
  Object.values(groups).forEach(g => {
    if (g.length === 1) { out.push(g[0]); return; }
    g.forEach((m, i) => {
      const a = (i / g.length) * 2 * Math.PI;
      out.push({ ...m, lat: m.lat + 1.2 * Math.cos(a), lng: m.lng + 1.2 * Math.sin(a) });
    });
  });
  return out;
}

function renderMarkers(mates) {
  const dispersed = applyJitter(mates);
  globe
    .htmlElementsData(dispersed)
    .htmlLat(d => d.lat).htmlLng(d => d.lng)
    .htmlAltitude(0.012).htmlTransitionDuration(0)
    .htmlElement(d => {
      const photoUrl = getPhotoUrl(d.photo_path);
      const wrapper  = document.createElement("div");
      wrapper.style.cssText = "position:relative;display:flex;flex-direction:column;align-items:center;pointer-events:auto;";

      const card = document.createElement("div");
      card.style.cssText = `position:absolute;bottom:36px;left:50%;transform:translateX(-50%) scale(.85);opacity:0;pointer-events:none;transition:opacity .18s,transform .18s;background:rgba(10,12,8,.96);border:1px solid rgba(138,173,94,.35);border-radius:12px;overflow:hidden;width:160px;box-shadow:0 8px 32px rgba(0,0,0,.8);z-index:9999;`;

      if (photoUrl) {
        const img = document.createElement("img");
        img.src = photoUrl;
        img.style.cssText = "width:160px;height:110px;object-fit:cover;display:block;";
        img.onerror = () => img.style.display = "none";
        card.appendChild(img);
      }

      const info = document.createElement("div");
      info.style.cssText = "padding:8px 10px;";
      info.innerHTML = `
        <div style="font-family:'DM Sans',sans-serif;font-size:12px;font-weight:600;color:#e8e4da;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${esc(d.name || t("anonymous"))}</div>
        ${d.country ? `<div style="font-size:10px;color:#9a9888;margin-top:2px">🌍 ${esc(d.country)}</div>` : ""}
        ${d.brand   ? `<div style="font-size:10px;color:#8aad5e;margin-top:2px">🌿 ${esc(d.brand)}</div>`   : ""}
        <div style="font-size:9px;color:#5a5a4e;margin-top:3px"># ${esc(displayId(d))}</div>
      `;
      card.appendChild(info);

      const emoji = document.createElement("div");
      emoji.textContent = "🧉";
      emoji.style.cssText = "font-size:22px;cursor:pointer;transition:transform .15s;user-select:none;filter:drop-shadow(0 2px 4px rgba(0,0,0,.6))";

      wrapper.appendChild(card);
      wrapper.appendChild(emoji);

      wrapper.addEventListener("mouseenter", () => {
        clearTimeout(rotateTimer); // evitar que el timer reactive la rotación mientras se hace hover
        card.style.opacity    = "1";
        card.style.transform  = "translateX(-50%) scale(1)";
        emoji.style.transform = "scale(1.35)";
        globe.controls().autoRotate = false;
      });
      wrapper.addEventListener("mouseleave", () => {
        card.style.opacity    = "0";
        card.style.transform  = "translateX(-50%) scale(.85)";
        emoji.style.transform = "scale(1)";
        // Al salir del marker, reactivar rotación si no está zoomeado
        if (!isZoomed) {
          clearTimeout(rotateTimer);
          rotateTimer = setTimeout(() => { globe.controls().autoRotate = true; }, 1200);
        }
      });
      wrapper.addEventListener("click", () => openLightbox(d));

      return wrapper;
    });
}

// Arcs ──────────────────────────────────────────────────────
function renderArcs(mates) {
  if (arcInterval) { clearInterval(arcInterval); arcInterval = null; }
  if (mates.length < 2) { globe.arcsData([]); return; }
  let i = 0;
  function next() {
    const idx = i % (mates.length - 1);
    globe
      .arcsData([{ startLat: mates[idx].lat, startLng: mates[idx].lng, endLat: mates[idx+1].lat, endLng: mates[idx+1].lng }])
      .arcColor(()    => ["rgba(106,143,96,.6)", "rgba(200,164,110,.6)"])
      .arcAltitudeAutoScale(0.4).arcStroke(0.5)
      .arcDashLength(0.4).arcDashGap(0.2).arcDashAnimateTime(2500);
    i++;
  }
  next();
  arcInterval = setInterval(next, 2500);
}