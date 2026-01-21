import { initSectionController } from "./core/SectionController.js";
import { registerAllSections } from "./utils/registerSections.js";

function onPageLoad() {
    document.querySelectorAll(".right-1").forEach(el => {
        el.style.display = "none";
    });
}

document.addEventListener('DOMContentLoaded', () => {
    registerAllSections();
    initSectionController();
    onPageLoad();
});