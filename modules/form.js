/* ============================================================
   200 Mates — modules/form.js
   ============================================================ */

// Prep toggle ───────────────────────────────────────────────
document.querySelectorAll(".prep-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".prep-btn").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    document.getElementById("preparation").value = btn.dataset.val;
  });
});

// File preview ──────────────────────────────────────────────
document.getElementById("photo").addEventListener("change", e => {
  const file = e.target.files[0]; if (!file) return;
  const preview = document.getElementById("photoPreview");
  const inner   = document.getElementById("fileDropInner");
  const r = new FileReader();
  r.onload = ev => {
    preview.src           = ev.target.result;
    preview.style.display = "block";
    inner.style.display   = "none";
  };
  r.readAsDataURL(file);
});

const fileDrop = document.getElementById("fileDrop");
fileDrop.addEventListener("dragover",  e => { e.preventDefault(); fileDrop.classList.add("drag-over"); });
fileDrop.addEventListener("dragleave", () => fileDrop.classList.remove("drag-over"));
fileDrop.addEventListener("drop",      e => { e.preventDefault(); fileDrop.classList.remove("drag-over"); });

// Form submit ───────────────────────────────────────────────
document.getElementById("mateForm").addEventListener("submit", async e => {
  e.preventDefault();
  const name        = document.getElementById("name").value.trim();
  const country     = document.getElementById("country").value.trim();
  const brand       = document.getElementById("brand").value.trim();
  const preparation = document.getElementById("preparation").value;
  const mate_type   = document.getElementById("mate_type").value.trim();
  const photo       = document.getElementById("photo").files[0];
  let lat           = parseFloat(document.getElementById("lat").value);
  let lng           = parseFloat(document.getElementById("lng").value);
  let countryCode   = document.getElementById("countryCode").value;

  if (!name || !country || !brand || !photo) { alert(t("alertRequired")); return; }

  // Si el usuario eligió país clickeando el mapa, usar siempre la capital de ese país
  if (selectedIso3) {
    const iso3 = selectedIso3;
    countryCode = iso3;
    const cap = capitalCoords[iso3];
    if (cap) { lat = cap.lat; lng = cap.lng; }
  } else if (isNaN(lat) || isNaN(lng)) {
    // Fallback: si no hay coords válidas, intentar por nombre de país
    const iso3 = countryCode || nameToIso3[country.toLowerCase().trim()];
    if (iso3) {
      countryCode = iso3;
      const cap = capitalCoords[iso3];
      if (cap) { lat = cap.lat; lng = cap.lng; }
    }
  }

  if (!countryCode) {
    const iso3 = nameToIso3[country.toLowerCase().trim()];
    if (iso3) countryCode = iso3;
  }

  const btn     = document.getElementById("submitBtn");
  const btnText = document.getElementById("submitBtnText");
  const btnLoad = document.getElementById("submitBtnLoader");
  btn.disabled = true; btnText.style.display = "none"; btnLoad.style.display = "flex";

  try {
    const ext      = photo.name.split(".").pop();
    const fileName = `${Date.now()}_${Math.random().toString(36).slice(2)}.${ext}`;
    const { error: ue } = await sb.storage.from("mate-photos").upload(fileName, photo, { contentType: photo.type });
    if (ue) throw ue;
    const { error: ie } = await sb.from("mates").insert([{
      name, country, country_code: countryCode || null,
      brand, preparation,
      mate_type:  mate_type || null,
      photo_path: fileName,
      lat: isNaN(lat) ? null : lat,
      lng: isNaN(lng) ? null : lng,
      approved: null
    }]);
    if (ie) throw ie;

    selectedIso3 = null; // reset selección manual
    setTimeout(() => { globe.controls().autoRotate = true; }, 2000);

    showSuccessModal();

    e.target.reset();
    document.getElementById("photoPreview").style.display = "none";
    document.getElementById("fileDropInner").style.display = "flex";
    document.getElementById("gpsStatus").textContent = t("gpsRequesting");
    initGPS();
  } catch (err) {
    console.error(err);
    alert(`${t("alertError")}${err.message}`);
  } finally {
    btn.disabled = false; btnText.style.display = ""; btnLoad.style.display = "none";
  }
});