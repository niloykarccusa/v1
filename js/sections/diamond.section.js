import { getDiamondType } from "../utils/diamondType.js";

export function createDiamondSection(el) {
  const type = getDiamondType(el);

  const diamond = el.querySelector(".diamond-image");
  const left = el.querySelector(".left-side");
  const right = el.querySelector(".right-1");

  const tl = gsap.timeline({ paused: true });

  if (type === "white" && left && right) {
    tl.fromTo(
      left,
      { x: 100 },
      { x: -1, duration: 1.2, ease: "power3.out" },
      0
    ).fromTo(
      right,
      {
        x: window.innerWidth,
        autoAlpha: 0,
      },
      {
        x: 0,
        autoAlpha: 1,
        duration: 1.2,
        ease: "power3.out",
      },
      0
    );
  }

  if (diamond && type !== "white") {
    const clockwise = type !== "blue";

    tl.fromTo(
      diamond,
      {
        scale: 0.35,
        autoAlpha: 0.15,
        rotation: 0,
      },
      {
        scale: 1,
        autoAlpha: 1,
        rotation: clockwise ? 360 : -360,
        duration: 2.5,
        ease: "power3.out",
      }
    );
  }

  if (tl.duration() === 0) {
    tl.to({}, { duration: 0.3 });
  }

  return {
    el,
    timeline: tl,
  };
}
