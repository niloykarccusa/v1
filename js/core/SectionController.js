import { SectionRegistry } from "./SectionRegistry.js";
import { lockScroll, unlockScroll } from "../utils/lockScroll.js";
import { isRightVisible } from "../utils/whiteState.js";
import { controlWhiteSides } from "../animations/diamondAnimations.js";

gsap.registerPlugin(Observer);

let animating = false;
let observer;

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

  lockScroll();
}

function goto(targetIndex, direction) {
  if (animating || !SectionRegistry.canGoTo(targetIndex)) return;

  const current = SectionRegistry.getCurrent();

  if (current.el.classList.contains("white")) {
    const rightVisible = isRightVisible(current);
    if (!rightVisible && direction === 1) {
      console.log("Invisible Down");
      animating = true;
      controlWhiteSides(current, 1, () => {
        animating = false;
      });
      return;
    }

    if (rightVisible && direction === -1) {
      console.log("Visible Up");
      animating = true;
      controlWhiteSides(current, -1, () => {
        animating = false;
        document.querySelectorAll(".right-1").forEach((el) => {
          el.style.display = "none";
        });
      });
      return;
    }
  }

  animating = true;

  const next = SectionRegistry.getByIndex(targetIndex);

  if (next.el.classList.contains(".people-section") && direction == 1) {
    document.querySelectorAll(".header-nav").forEach((el) => {
      el.style.display = "none";
    });
  }

  if (next.el.classList.contains("..hero-section") && direction == -1) {
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
