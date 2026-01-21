export function enterDiamond(section, clockwise = true) {
  const diamond = section.querySelector(".diamond-image");
  if (!diamond) return;

  gsap.fromTo(
    diamond,
    { scale: 0.4 },
    {
      scale: 1,

      rotation: clockwise ? 360 * 3 : -360 * 3,
      duration: 5,
      ease: "power3.out",
    },
  );
}

export function leaveDiamond(section, clockwise = true) {
  const diamond = section.querySelector(".diamond-image");
  if (!diamond) return;

  gsap.to(diamond, {
    scale: 0.4,

    rotation: clockwise ? -360 * 3 : 360 * 3,
    duration: 5,
    ease: "power2.in",
  });
}

export function controlWhiteSides(section, direction, onComplete) {
  const left = section.el.querySelector(".left-side");
  const right = section.el.querySelector(".right-1");

  if (!left || !right) {
    onComplete?.();
    return;
  }
  if (!section._whiteTL) {
    section._whiteTL = gsap.timeline({
      paused: true,
      defaults: { duration: 1.6, ease: "power3.out" },
    });

    section._whiteTL.fromTo(left, { x: 0 }, { x: -1 }, 0).fromTo(
      right,
      {
        x: window.innerWidth,
        autoAlpha: 0,
        display: "block",
      },
      {
        x: 0,
        autoAlpha: 1,
      },
      0,
    );
  }

  const tl = section._whiteTL;

  tl.eventCallback("onComplete", onComplete);
  tl.eventCallback("onReverseComplete", onComplete);

  if (direction === 1) {
    gsap.set(right, { display: "block" });
    tl.play();
  } else {
    tl.reverse();
  }
}
