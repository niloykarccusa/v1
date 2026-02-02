import { SectionRegistry } from "../core/SectionRegistry.js";
import { getSectionConfig  } from "./sectionConfig.js";

export function registerAllSections() {
    const page =document.body.dataset.page || "home";
    const config = getSectionConfig(page);
    config.forEach(({ selector, factory }) => {
        document.querySelectorAll(selector).forEach(el => {
            const section = factory(el);
            SectionRegistry.register(section);
        });
    });
}
