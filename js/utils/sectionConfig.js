import { createDoorstepSection } from "../sections/doorstep.section.js";
import { createDiamondSection } from "../sections/diamond.section.js";
import { createFounderSection } from "../sections/founder.section.js";
import { createCraftedHeroSection } from "../sections/craftedHero.section.js";
import { createHeroSection } from "../sections/hero.section.js";
import { createExperienceSection } from "../sections/experience.section.js";
import { createBuildSection } from "../sections/build.section.js";
import { createCtaSection } from "../sections/cta.section.js";
import { createBannerSection } from "../sections/about.banner.section.js";
import { createRiskSection } from "../sections/about.risk.section.js";
import { createCareerSection } from "../sections/about.career.section.js";
import { createCarriedSection } from "../sections/about.carried.section.js";
import { createCraftedSection } from "../sections/about.crafted.section.js";
import { createWorkedSection } from "../sections/about.worked.section.js";
import { createChangeSection } from "../sections/about.change.section.js";
import { createCustomBannerSection } from "../sections/custom.banner.section.js";
import { createCustomSecondSection } from "../sections/custom.second.section.js";
import { createTrendSection } from "../sections/custom.trend.section.js";
import { createPhraseSection } from "../sections/custom.phrase.section.js";
import { createBudgetSection } from "../sections/custom.budget.section.js";
import { createCustomCtaSection } from "../sections/custom.cta.section.js";

const PAGE_SECTIONS = {
  home:[
    {
      selector: ".hero-section",
      factory: createHeroSection,
    },
    {
      selector: ".people-section",
      factory: createDoorstepSection,
    },
    {
      selector: ".triangle-part",
      factory: createDiamondSection,
    },
    {
      selector: ".experience-section",
      factory: createExperienceSection,
    },
    {
      selector: ".founder-section",
      factory: createFounderSection,
    },
    {
      selector: ".crafted-hero",
      factory: createCraftedHeroSection,
    },
    {
      selector: ".build-section",
      factory: createBuildSection,
    },
    {
      selector: ".final-cta",
      factory: createCtaSection,
    },
  ],
  about:[
    {
      selector: ".banner-section",
      factory: createBannerSection,
    },
    {
      selector: ".career-section",
      factory: createCareerSection,
    },
    {
      selector: ".worked-section",
      factory: createWorkedSection,
    },
    {
      selector: ".carried-section",
      factory: createCarriedSection,
    },
    {
      selector: ".risk-section",
      factory: createRiskSection
    },
    {
      selector: ".changed-section",
      factory: createChangeSection
    },
    {
      selector: ".about-crafted",
      factory: createCraftedSection,
    },
  ],
  custom: [
    {
      selector: ".banner-section",
      factory: createBannerSection,
    },
    {
      selector: ".second-section",
      factory: createCustomSecondSection,
    },
    {
      selector: ".doorstep-section",
      factory: createDoorstepSection,
    },
    {
      selector: ".trend-section",
      factory: createTrendSection,
    },
    {
      selector: ".phrase-section",
      factory: createPhraseSection,
    },
    {
      selector: ".budget-section",
      factory: createBudgetSection,
    },
    {
      selector: ".final-cta",
      factory: createCustomCtaSection,
    },
  ]
};

export function getSectionConfig(page) {
  return PAGE_SECTIONS[page] || [];
}