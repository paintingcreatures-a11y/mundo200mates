/* ============================================================
   200 Mates — modules/utils.js
   ============================================================ */

function t(key) {
  return window.i18n?.[currentLang]?.[key] ?? window.i18n?.es?.[key] ?? key;
}

function applyI18n() {
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const v = t(el.dataset.i18n);
    if (v && v !== el.dataset.i18n) el.innerHTML = v;
  });
  document.querySelectorAll("[data-i18n-placeholder]").forEach(el => {
    const v = t(el.dataset.i18nPlaceholder);
    if (v) el.placeholder = v;
  });
  renderGallery();
}

function esc(s) {
  const d = document.createElement("div"); d.textContent = s || ""; return d.innerHTML;
}

function displayId(m) {
  return m.public_id || String(m.id);
}

function resolveCoords(m) {
  if (m.lat != null && m.lng != null) return { lat: m.lat, lng: m.lng };
  const iso3 = (m.country_code?.trim().toUpperCase()) ||
               (m.country && nameToIso3[m.country.toLowerCase().trim()]);
  return iso3 && capitalCoords[iso3] ? capitalCoords[iso3] : null;
}

function getPhotoUrl(path) {
  if (!path) return null;
  const { data } = sb.storage.from("mate-photos").getPublicUrl(path);
  return data?.publicUrl || null;
}