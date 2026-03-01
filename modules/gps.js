/* ============================================================
   200 Mates — modules/gps.js
   ============================================================ */

let selectedIso3 = null;

function initGPS() {
  const statusEl  = document.getElementById("gpsStatus");
  const latIn     = document.getElementById("lat");
  const lngIn     = document.getElementById("lng");
  const ccIn      = document.getElementById("countryCode");
  const countryIn = document.getElementById("country");

  if (!navigator.geolocation) { statusEl.textContent = t("gpsNoGps"); return; }
  statusEl.textContent = t("gpsDetecting");

  navigator.geolocation.getCurrentPosition(pos => {
    latIn.value = pos.coords.latitude.toFixed(2);
    lngIn.value = pos.coords.longitude.toFixed(2);
    statusEl.textContent = `📍 ${latIn.value}, ${lngIn.value}`;
    fetch(
      `https://nominatim.openstreetmap.org/reverse?lat=${pos.coords.latitude}&lon=${pos.coords.longitude}&format=json`,
      { headers: { "User-Agent": "200Mates/1.0" } }
    )
    .then(r => r.ok ? r.json() : Promise.reject())
    .then(d => {
      const cc   = d?.address?.country_code?.toUpperCase();
      const iso3 = iso2ToIso3[cc] || "";
      if (iso3) {
        // Seleccionar la opción correspondiente en el <select>
        const opt = countryIn.querySelector(`option[data-iso3="${iso3}"]`);
        if (opt) {
          countryIn.value = opt.value;
          ccIn.value      = iso3;
          selectedIso3    = iso3;
          countryIn.style.background = "rgba(74,103,65,.15)";
          countryIn.style.borderColor = "rgba(138,173,94,.5)";
          renderPolygons();
        }
      }
    })
    .catch(() => {
      // GPS ok pero no se pudo resolver el país — el usuario elige del select
    });
  },
  () => {
    statusEl.textContent = t("gpsNoPermission");
  },
  { enableHighAccuracy: true, timeout: 10000 });
}

// ── Listener del <select> de países ───────────────────────
document.addEventListener("DOMContentLoaded", () => {
  const countryIn = document.getElementById("country");
  const ccIn      = document.getElementById("countryCode");
  const statusEl  = document.getElementById("gpsStatus");

  if (!countryIn) return;

  countryIn.addEventListener("change", () => {
    const opt  = countryIn.options[countryIn.selectedIndex];
    const iso3 = opt?.dataset?.iso3;
    if (!iso3) return;

    selectedIso3   = iso3;
    ccIn.value     = iso3;

    // Color verde al select
    countryIn.style.background  = "rgba(74,103,65,.15)";
    countryIn.style.borderColor = "rgba(138,173,94,.5)";

    // Coordenadas de la capital
    const cap = capitalCoords[iso3];
    if (cap) {
      document.getElementById("lat").value = cap.lat;
      document.getElementById("lng").value = cap.lng;

      // Volar al país en el globo
      clearTimeout(rotateTimer);
      isZoomed = true;
      isProgrammaticMove = true;
      globe.controls().autoRotate = false;
      globe.pointOfView({ lat: cap.lat, lng: cap.lng, altitude: 0.8 }, 800);
      setTimeout(() => { isProgrammaticMove = false; }, 900);
    }

    // Status
    if (statusEl) {
      statusEl.textContent   = `${t("gpsSelected")}${opt.value}`;
      statusEl.style.color       = "#8aad5e";
      statusEl.style.borderColor = "rgba(138,173,94,.4)";
    }

    // Colorear polígono
    renderPolygons();
  });
});

function selectCountry(f) {
  const iso3 = f.iso3; if (!iso3) return;
  selectedIso3 = iso3;

  const countryIn = document.getElementById("country");
  const opt       = countryIn?.querySelector(`option[data-iso3="${iso3}"]`);
  if (opt && countryIn) {
    countryIn.value = opt.value;
    countryIn.style.background  = "rgba(74,103,65,.15)";
    countryIn.style.borderColor = "rgba(138,173,94,.5)";
  }

  document.getElementById("countryCode").value = iso3;

  const cap = capitalCoords[iso3];
  if (cap) {
    document.getElementById("lat").value = cap.lat;
    document.getElementById("lng").value = cap.lng;
    clearTimeout(rotateTimer);
    isZoomed = true;
    isProgrammaticMove = true;
    globe.controls().autoRotate = false;
    globe.pointOfView({ lat: cap.lat, lng: cap.lng, altitude: 0.8 }, 800);
    setTimeout(() => { isProgrammaticMove = false; }, 900);
  }

  const s = document.getElementById("gpsStatus");
  if (s) {
    s.textContent       = `${t("gpsSelected")}${opt?.value || iso3}`;
    s.style.color       = "#8aad5e";
    s.style.borderColor = "rgba(138,173,94,.4)";
  }

  renderPolygons();
}