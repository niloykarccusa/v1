import { createDoorstepSection } from "../sections/doorstep.section.js";
import { createDiamondSection } from "../sections/diamond.section.js";
import { createFounderSection } from "../sections/founder.section.js";
import { createCraftedHeroSection } from "../sections/craftedHero.section.js";
import { createHeroSection } from "../sections/hero.section.js";
import { createExperienceSection } from "../sections/experience.section.js";
import { createBuildSection } from "../sections/build.section.js";
import { createCtaSection } from "../sections/cta.section.js";

export const SECTION_CONFIG = [
    {
        selector: ".hero-section",
        factory: createHeroSection
    },
    {
        selector: ".people-section",
        factory: createDoorstepSection
    },
    {
        selector: ".triangle-part",
        factory: createDiamondSection
    },
    {
        selector: ".experience-section",
        factory: createExperienceSection
    },
    {
        selector: ".founder-section",
        factory: createFounderSection
    },
    {
        selector: ".crafted-hero",
        factory: createCraftedHeroSection
    },
    {
        selector: ".build-section",
        factory: createBuildSection
    },
    {
        selector: ".final-cta",
        factory: createCtaSection
    }
];
