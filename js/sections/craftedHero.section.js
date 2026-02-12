export function createCraftedHeroSection(el) {
  const heading = el.querySelector(".heading-hero");

  const tl = gsap.timeline({ paused: true });

  if (heading) {
    tl.set(heading, { y: -300}, 0);
    tl.fromTo(
      heading,
      {
        autoAlpha: 0,
        scaleX: 0.2,
        letterSpacing: "-0.15em",
        transformOrigin: "center center",
      },
      {
        autoAlpha: 1,
        scaleX: 1,
        letterSpacing: "0em",
        duration: 2.5,
        ease: "power3.out",
      },
      0
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
