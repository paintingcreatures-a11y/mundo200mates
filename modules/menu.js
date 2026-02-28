/* ============================================================
   200 Mates — modules/menu.js
   ============================================================ */

const hamburgerBtn = document.getElementById("hamburgerBtn");
const dropMenu     = document.getElementById("dropMenu");
const dropBackdrop = document.getElementById("dropBackdrop");

function activateTab(tabId) {
  document.querySelectorAll(".drop-tab, .drop-foot-btn").forEach(el => {
    el.classList.toggle("active", el.dataset.tab === tabId);
  });
  document.querySelectorAll(".drop-pane").forEach(p => {
    p.classList.toggle("active", p.id === "tab-" + tabId);
  });
}

function positionPanel() {
  const rect  = hamburgerBtn.getBoundingClientRect();
  const panel = dropMenu.querySelector(".drop-panel");
  const topPos = rect.bottom + 8;
  panel.style.top     = topPos + "px";
  panel.style.left    = rect.left + "px";
  panel.style.right   = "auto";
  panel.style.maxHeight = (window.innerHeight - topPos - 12) + "px";
}

function openMenu(tabId) {
  positionPanel();
  dropMenu.classList.add("open");
  hamburgerBtn.classList.add("is-open");
  hamburgerBtn.setAttribute("aria-expanded", "true");
  if (tabId) activateTab(tabId);
}

function closeMenu() {
  dropMenu.classList.remove("open");
  hamburgerBtn.classList.remove("is-open");
  hamburgerBtn.setAttribute("aria-expanded", "false");
}

hamburgerBtn.addEventListener("click", () => {
  dropMenu.classList.contains("open") ? closeMenu() : openMenu();
});
dropBackdrop.addEventListener("click", closeMenu);

document.querySelectorAll(".drop-tab").forEach(tab => {
  tab.addEventListener("click", () => activateTab(tab.dataset.tab));
});
document.querySelectorAll(".drop-foot-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    if (!dropMenu.classList.contains("open")) openMenu(btn.dataset.tab);
    else activateTab(btn.dataset.tab);
  });
});

document.addEventListener("keydown", e => {
  if (e.key === "Escape") { closeMenu(); lightbox.style.display = "none"; }
});