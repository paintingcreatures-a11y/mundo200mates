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
  countryIn.readOnly   = true;

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
      const name = d?.address?.country || "";
      const iso3 = iso2ToIso3[cc] || "";
      if (name && iso3) {
        countryIn.value    = name;
        countryIn.readOnly = true;
        ccIn.value         = iso3;
        countryIn.style.background = "rgba(74,103,65,.1)";
      } else throw new Error();
    })
    .catch(() => {
      countryIn.readOnly   = false;
      statusEl.textContent += t("gpsManual");
    });
  },
  () => {
    countryIn.readOnly   = false;
    statusEl.textContent = t("gpsNoPermission");
  },
  { enableHighAccuracy: true, timeout: 10000 });
}

function selectCountry(f) {
  const iso3 = f.iso3; if (!iso3) return;
  selectedIso3 = iso3;
  const entry  = Object.entries(nameToIso3).find(([, v]) => v === iso3);
  const pretty = (entry?.[0] || iso3).replace(/\b\w/g, c => c.toUpperCase());
  const ci     = document.getElementById("country");
  ci.value     = pretty; ci.readOnly = false;
  document.getElementById("countryCode").value = iso3;
  const cap = capitalCoords[iso3];
  if (cap) {
    // Siempre sobreescribe — el usuario eligió este país explícitamente
    document.getElementById("lat").value = cap.lat;
    document.getElementById("lng").value = cap.lng;
    globe.controls().autoRotate = false;
    globe.pointOfView({ lat: cap.lat, lng: cap.lng, altitude: 2 }, 800);
  }
  const s = document.getElementById("gpsStatus");
  s.textContent      = `${t("gpsSelected")}${pretty}`;
  s.style.color       = "#8aad5e";
  s.style.borderColor = "rgba(138,173,94,.4)";
  renderPolygons();
}