export function enterDiamond(section, clockwise = true) {
  const diamond = section.querySelector(".diamond-image");
  if (!diamond) return;

  gsap.fromTo(
    diamond,
    {
      scale: 0.35,
      autoAlpha: 0.15,
      rotation: 0,
    },
    {
      scale: 1,
      autoAlpha: 1,
      rotation: clockwise ? 360 * 1 : -360 * 1,
      duration: 10,
      ease: "power3.out",
    }
  );
}

export function leaveDiamond(section, clockwise = true) {
  const diamond = section.querySelector(".diamond-image");
  if (!diamond) return;

  gsap.to(diamond, {
    scale: 0.35,
    autoAlpha: 0,
    rotation: clockwise ? -360 * 1 : 360 * 1,
    duration: 10,
    ease: "power2.in",
  });
}

export function controlWhiteSides(section, show = true) {
  const left = section.querySelector(".left-side");
  const right = section.querySelector(".right-1");

  if (!left || !right) return;

  if (!section._whiteTL) {
    section._whiteTL = gsap.timeline({
      paused: true,
      defaults: { duration: 5, ease: "power3.out" },
    });

    section._whiteTL.fromTo(left, { x: 100 }, { x: -1 }, 0).fromTo(
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

  if (show) {
    gsap.set(right, { display: "block" });
    tl.play();
  } else {
    tl.reverse();
  }
}