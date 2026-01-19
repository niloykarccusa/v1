import { SectionRegistry } from "../core/SectionRegistry.js";
import { SECTION_CONFIG } from "./sectionConfig.js";

export function registerAllSections() {
    SECTION_CONFIG.forEach(({ selector, factory }) => {
        document.querySelectorAll(selector).forEach(el => {
            const section = factory(el);
            SectionRegistry.register(section);
        });
    });
}
