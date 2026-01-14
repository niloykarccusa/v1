gsap.registerPlugin(ScrollTrigger, Observer);

import { initDoorstepSection } from "./animations/doorstep.js";
import { initDiamondScrollTrigger } from "./animations/diamondScrollTrigger.js";
import { initDiamondObserver, disableDiamondObserver } from "./animations/diamondObserver.js";
import { initCraftedHero } from "./animations/craftedHero.js";

document.querySelectorAll(".people-doorstep").forEach(section => {
    initDoorstepSection(section);
});

initDiamondObserver();
disableDiamondObserver();

document.querySelectorAll(".triangle-part").forEach((section, index) => {
    initDiamondScrollTrigger(section, index);
});

function initPage() {
    document.querySelectorAll(".right-1").forEach(el => {
        el.style.display = "none";
    });
}

document.querySelectorAll(".crafted-hero").forEach(section => {
    initCraftedHero(section);
});

document.addEventListener("DOMContentLoaded", initPage);
