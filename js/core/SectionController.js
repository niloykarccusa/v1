import { SectionRegistry } from "./SectionRegistry.js";
import { lockScroll, unlockScroll } from "../utils/lockScroll.js";

gsap.registerPlugin(Observer, ScrollTrigger);

let animating = false;
let observer;

const PROGRESS_STEP = 0.08;
const TRANSITION_START=1;

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
    onEnterBack() {
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
    { autoAlpha: 0 }
  );
  gsap.set(sections[0].el, { autoAlpha: 1 });
  const first = SectionRegistry.getCurrent();
  if (first.timeline) {
    first.timeline.progress(0);
  }

  observer = Observer.create({
    type: "wheel,touch",
    tolerance: 10,
    preventDefault: true,
    onDown: () => updateProgress(1),
    onUp: () => updateProgress(-1),
  });

  lockScroll();
  setupFooterScrollTrigger();
}

function updateProgress(direction) {
  if (animating) return;

  const section = SectionRegistry.getCurrent();
  const tl = section.timeline;
  if (!tl) return;

  let current = tl.progress();
  if (section.skipInternalAnimation) {
  current = TRANSITION_START;
  tl.progress(current);
}
  // console.log(current);
  let nextProgress = gsap.utils.clamp(
    -0.08,
    1.08,
    current + PROGRESS_STEP * direction
  );

  tl.progress(nextProgress);

  const lastIndex = SectionRegistry.sections.length - 1;

  if (nextProgress > 1 && direction === 1) {
    if (SectionRegistry.currentIndex === lastIndex) {
      disableObserverForFooter();
      return;
    }
    goto(SectionRegistry.currentIndex + 1, 1);
  }

  if (nextProgress < 0 && direction === -1) {
    goto(SectionRegistry.currentIndex - 1, -1);
  }
}

function goto(targetIndex, direction) {
  if (animating) return;
  if (!SectionRegistry.canGoTo(targetIndex)) return;

  animating = true;

  const current = SectionRegistry.getCurrent();
  const next = SectionRegistry.getByIndex(targetIndex);

  if (next.el.classList.contains("people-section") && direction == 1) {
    document.querySelectorAll(".header-nav").forEach((el) => {
      el.style.display = "none";
    });
  }

  if (next.el.classList.contains("hero-section") && direction == -1) {
    document.querySelectorAll(".header-nav").forEach((el) => {
      el.style.display = "block";
    });
  }

  // place next section offscreen
  gsap.set(next.el, {
    yPercent: direction === 1 ? 100 : -100,
    autoAlpha: 1,
  });

  gsap.timeline({
    onComplete: () => {
      gsap.set(current.el, { autoAlpha: 0, yPercent: 0 });
      SectionRegistry.currentIndex = targetIndex;

      if (next.timeline) {
        next.timeline.progress(direction === 1 ? 0 : 1);
      }

      animating = false;
    },
  })
  .to(
    current.el,
    {
      yPercent: direction === 1 ? -100 : 100,
      duration: 2,
      ease: "power2.out",
    },
    0
  )
  .to(
    next.el,
    {
      yPercent: 0,
      duration: 2,
      ease: "power2.out",
    },
    0
  );
}


