/* ============================================================
   200 Mates — app.js
   ============================================================ */

// Language switcher ─────────────────────────────────────────
document.querySelectorAll(".lang-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    currentLang = btn.dataset.lang;
    document.querySelectorAll(".lang-btn").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    document.documentElement.lang = currentLang;
    applyI18n();
  });
});

// Load mates ────────────────────────────────────────────────
async function loadMates() {
  try {
    const { data, error } = await sb
      .from("mates")
      .select("*")
      .not("approved", "eq", false)
      .order("created_at", { ascending: false });

    if (error) throw error;

    allMates = data || [];

    const matesWithCoords = allMates
      .map(m => { const c = resolveCoords(m); return c ? { ...m, ...c } : null; })
      .filter(Boolean);

    countriesColored = [...new Set(allMates.map(m => {
      if (m.country_code) return m.country_code.toUpperCase().trim();
      if (m.country)      return nameToIso3[m.country.toLowerCase().trim()] || null;
      return null;
    }).filter(Boolean))];

    renderPolygons();

    const ids = matesWithCoords.map(m => m.id).join(",");
    if (ids !== lastMarkerIds) {
      lastMarkerIds = ids;
      renderMarkers(matesWithCoords);
    }
    renderArcs(matesWithCoords);
    renderGallery();
    updateStats();

    // ── CAMBIO: eliminado el pointOfView automático que reposicionaba
    // el globo cada 30s al primer mate. El reposicionamiento ahora solo
    // ocurre cuando el usuario envía su propio mate (ver form.js).

  } catch (err) {
    console.error("loadMates error:", err);
    const gallery = document.getElementById("gallery");
    if (gallery) gallery.innerHTML = `<p class="error-msg">⚠️ ${t("errorLoading")}</p>`;
  }
}

// Geo ───────────────────────────────────────────────────────
fetch("https://unpkg.com/world-atlas@2/countries-110m.json")
  .then(r => r.ok ? r.json() : Promise.reject())
  .then(world => {
    const raw = topojson.feature(world, world.objects.countries).features;
    countriesGeo = raw.map(f => ({
      ...f, iso3: numericToIso3[String(parseInt(f.id, 10))] || null
    }));
    renderPolygons();
  });

// Boot ──────────────────────────────────────────────────────
applyI18n();
initGPS();
loadMates();
setInterval(loadMates, 30_000);