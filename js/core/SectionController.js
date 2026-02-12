import { SectionRegistry } from "./SectionRegistry.js";
import { lockScroll, unlockScroll } from "../utils/lockScroll.js";

gsap.registerPlugin(Observer,ScrollTrigger);

let animating = false;
let observer;

function disableObserverForFooter() {
  if (observer) observer.disable();
  unlockScroll();
}

function enableObserverFromFooter() {
  if (observer) observer.enable();
  lockScroll();
}

function setupFooterScrollTrigger() {
  const footer = document.querySelector("footer");
  if (!footer) return;
  ScrollTrigger.create({
  trigger: footer,
  start: "top bottom",
  end: "top+=10% bottom",
  onEnterBack(self) {
    enableObserverFromFooter();

    SectionRegistry.currentIndex =
      SectionRegistry.sections.length - 1;

    ScrollTrigger.refresh();
  },
});

}

export function initSectionController() {
  const sections = SectionRegistry.sections;

  gsap.set(
    sections.map((s) => s.el),
    { autoAlpha: 0 },
  );
  gsap.set(sections[0].el, { autoAlpha: 1 });

  observer = Observer.create({
    type: "wheel,touch",
    tolerance: 10,
    preventDefault: true,
    onDown: () => goto(SectionRegistry.currentIndex + 1, 1),
    onUp: () => goto(SectionRegistry.currentIndex - 1, -1),
  });

  const lastSection = SectionRegistry.sections.at(-1).el;

  lockScroll();
  setupFooterScrollTrigger();
}

function goto(targetIndex, direction) {
  if (animating) return;

  const lastIndex = SectionRegistry.sections.length - 1;
  const current = SectionRegistry.getCurrent();

  if (
    SectionRegistry.currentIndex === lastIndex &&
    direction === 1
  ) {
    disableObserverForFooter();
    return;
  }

  if (!SectionRegistry.canGoTo(targetIndex)) return;

  animating = true;

  const next = SectionRegistry.getByIndex(targetIndex);
  if (next.el.classList.contains("people-section") && direction == 1) {
    console.log("remove nav")
    document.querySelectorAll(".header-nav").forEach((el) => {
      el.style.display = "none";
    });
  }

  if (next.el.classList.contains("hero-section") && direction == -1) {
    console.log("show nav")
    document.querySelectorAll(".header-nav").forEach((el) => {
      el.style.display = "block";
    });
  }

  const duration = next.transitionDuration ?? 1.6;
  gsap
    .timeline({
      defaults: { duration: duration, ease: "power3.inOut" },
      onComplete: () => {
        animating = false;
        SectionRegistry.currentIndex = targetIndex;
      },
    })
    .add(() => current.onLeave(direction))
    .to(current.el, { autoAlpha: 0 }, 0)
    .add(() => next.onEnter(direction), 0)
    .fromTo(
      next.el,
      { autoAlpha: 0, yPercent: 100 * direction },
      { autoAlpha: 1, yPercent: 0 },
      0,
    );
}
