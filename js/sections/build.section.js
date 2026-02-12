export function createBuildSection(el) {
  const header = el.querySelector(".build-header");
  const blogGrid = el.querySelector(".blog-grid");

  const tl = gsap.timeline({
    paused: true,
    defaults: { ease: "power3.out" }
  });

  if (blogGrid) {
    tl.fromTo(
      blogGrid,
      {
        autoAlpha: 0,
        xPercent: -100
      },
      {
        autoAlpha: 1,
        xPercent: 0,
        duration: 2.5
      },
      0
    );
  }

  if (header) {
    tl.fromTo(
      header,
      {
        y: -120,
        autoAlpha: 0
      },
      {
        y: 0,
        autoAlpha: 1,
        duration: 0.8
      },
      1
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
