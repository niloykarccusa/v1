import { SectionRegistry } from "./SectionRegistry.js";
import { lockScroll, unlockScroll } from "../utils/lockScroll.js";

gsap.registerPlugin(Observer);

let animating = false;
let observer;

export function initSectionController() {
    const sections = SectionRegistry.sections;
    gsap.set(sections.map(s => s.el), { autoAlpha: 0 });
    gsap.set(sections[0].el, { autoAlpha: 1 });

    observer = Observer.create({
        type: "wheel,touch",
        tolerance: 10,
        preventDefault: true,
        onDown: () => goto(SectionRegistry.currentIndex + 1, 1),
        onUp: () => goto(SectionRegistry.currentIndex - 1, -1)
    });
    lockScroll();
}

function goto(targetIndex, direction) {
    if (
        animating ||
        !SectionRegistry.canGoTo(targetIndex)
    ) return;
    animating = true;

    const current = SectionRegistry.getCurrent();
    const next = SectionRegistry.getByIndex(targetIndex);
    gsap.timeline({
        defaults: { duration: 1.6, ease: "power3.inOut" },
        onComplete: () => {
            animating = false;
            SectionRegistry.currentIndex = targetIndex;
        }
    })
    .add(() => current.onLeave(direction))
    .to(current.el, { autoAlpha: 0 }, 0)
    .add(() => next.onEnter(direction), 0)
    .fromTo( next.el, 
            { autoAlpha: 0, yPercent: 100 * direction },
            { autoAlpha: 1, yPercent: 0 }, 
        0 );
    // const master = gsap.timeline({
    //     onComplete: () => {
    //         animating = false;
    //         SectionRegistry.currentIndex = targetIndex;
    //     }
    // });

    // master.add(current.onLeave(direction));
    // master.to(current.el, { autoAlpha: 0 }, "<");
    // master.set(next.el, { autoAlpha: 1 });
    // master.add(next.onEnter(direction));
}