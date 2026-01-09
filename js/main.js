gsap.registerPlugin(ScrollTrigger);

import { initDoorstepSection } from "./animations/doorstep.js";

document.querySelectorAll(".people-doorstep").forEach(section => {
    initDoorstepSection(section);
});
