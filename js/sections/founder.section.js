export function createFounderSection(el) {
  const content = el.querySelector(".founder-content");
  const image = el.querySelector(".founder-image");
  const founder = el.querySelector(".founder-grid");

  const tl = gsap.timeline({ paused: true });

  if (content && image) {
    tl.fromTo(
      content,
      {
        autoAlpha: 0,
        xPercent: -100,
        yPercent: 100,
      },
      {
        autoAlpha: 1,
        xPercent: 0,
        yPercent: 0,
        duration: 2,
        ease: "power3.out",
      },
      0
    ).fromTo(
      image,
      {
        autoAlpha: 0,
        xPercent: 100,
        yPercent: 100,
      },
      {
        autoAlpha: 1,
        xPercent: 0,
        yPercent: 0,
        duration: 2,
        ease: "power3.out",
      },
      0
    );
  }
  if (founder) {
    tl.to(
      founder,
      {
        autoAlpha: 0,
        xPercent: -20,
        yPercent: -20,
        duration: 1,
        ease: "power3.in",
      },
      ">1"
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
