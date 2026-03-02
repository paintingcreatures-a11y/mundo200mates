/* ============================================================
   200 Mates — modules/gallery.js
   ============================================================ */

//  Stats counter ─────────────────────────────────────────────
function animateCount(el, target) {
  if (!el) return;
  const start    = parseInt(el.textContent) || 0;
  const duration = 600;
  const startTs  = performance.now();
  const step = ts => {
    const p    = Math.min((ts - startTs) / duration, 1);
    const ease = 1 - Math.pow(1 - p, 3);
    el.textContent = Math.round(start + (target - start) * ease);
    if (p < 1) requestAnimationFrame(step);
  };
  requestAnimationFrame(step);
}

function updateStats() {
  animateCount(document.getElementById("statMates"),     allMates.length);
  animateCount(document.getElementById("statCountries"), countriesColored.length);
}

//  Gallery ───────────────────────────────────────────────────
function renderGallery() {
  const el = document.getElementById("gallery"); if (!el) return;
  const recent = allMates.slice(0, 3);
  if (!recent.length) {
    el.innerHTML = `<p class="no-mates">${t("noMates")}</p>`;
    return;
  }
  el.innerHTML = recent.map((m, i) => {
    const url = getPhotoUrl(m.photo_path);
    return `<div class="gallery-card" style="animation-delay:${i * .08}s">
      <img src="${esc(url || "placeholder.png")}" onerror="this.src='placeholder.png'" alt="mate">
      <div class="gallery-info">
        <span class="gallery-name">${esc(m.name || t("anonymous"))}</span>
        <span class="gallery-country">${esc(m.country || "")}</span>
      </div>
    </div>`;
  }).join("");
  el.querySelectorAll(".gallery-card").forEach((c, i) =>
    c.addEventListener("click", () => openLightbox(recent[i]))
  );
}

// Lightbox ──────────────────────────────────────────────────
const lightbox = document.getElementById("lightbox");
const lbImg    = document.getElementById("lightboxImg");
const lbInfo   = document.getElementById("lightboxInfo");

function openLightbox(d) {
  const pid = displayId(d);
  lbImg.src = getPhotoUrl(d.photo_path) || "placeholder.png";
  lbInfo.innerHTML = `
    <span class="lb-name">${esc(d.name || t("anonymous"))}</span>
    ${d.country ? `<span class="lb-country">🌍 ${esc(d.country)}</span>`     : ""}
    ${d.brand   ? `<span class="lb-detail">🌿 ${esc(d.brand)}</span>`        : ""}
    <div class="lb-id">
      <span>${esc(t("mateId"))}<strong>${esc(pid)}</strong></span>
      <button class="lb-id-copy" data-pid="${esc(pid)}">${t("copyId")}</button>
    </div>
    <div class="delete-note">${esc(t("deleteNote"))}</div>
  `;
  const copyBtn = lbInfo.querySelector(".lb-id-copy");
  copyBtn?.addEventListener("click", () => {
    navigator.clipboard.writeText(pid).then(() => {
      copyBtn.textContent = t("copied");
      copyBtn.classList.add("copied");
      setTimeout(() => { copyBtn.textContent = t("copyId"); copyBtn.classList.remove("copied"); }, 2000);
    }).catch(() => { copyBtn.textContent = pid; });
  });
  lightbox.style.display = "flex";
}

document.getElementById("lightboxClose").addEventListener("click", () => lightbox.style.display = "none");
document.getElementById("lightboxBg").addEventListener("click",    () => lightbox.style.display = "none");