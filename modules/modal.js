/* ============================================================
   200 Mates — modules/modal.js
   ============================================================ */

function showSuccessModal() {
  const modal = document.getElementById("successModal");
  if (!modal) return;

  const titleEl = modal.querySelector(".smodal-title");
  const body1El = modal.querySelector(".smodal-body1");
  const body2El = modal.querySelector(".smodal-body2");
  const btnEl   = modal.querySelector(".smodal-btn");
  if (titleEl) titleEl.textContent = t("successTitle");
  if (body1El) body1El.textContent = t("successBody1");
  if (body2El) body2El.textContent = t("successBody2");
  if (btnEl)   btnEl.textContent   = t("successBtn");

  modal.classList.add("open");

  const steam = modal.querySelector(".smodal-steam");
  if (steam) {
    steam.innerHTML = "";
    for (let i = 0; i < 6; i++) {
      const p = document.createElement("span");
      p.className = "steam-particle";
      p.style.cssText = `left:${30 + i * 8}%;animation-delay:${i * 0.3}s;animation-duration:${1.8 + i * 0.2}s`;
      steam.appendChild(p);
    }
  }
}

function hideSuccessModal() {
  const modal = document.getElementById("successModal");
  if (modal) modal.classList.remove("open");
}

document.getElementById("successModalBg")?.addEventListener("click", hideSuccessModal);
document.querySelector(".smodal-btn")?.addEventListener("click", hideSuccessModal);