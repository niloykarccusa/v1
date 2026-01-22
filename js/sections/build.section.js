export function createBuildSection(el) {
  const header = el.querySelector(".build-header");
  const blogGrid = el.querySelector(".blog-grid");
  let tl;

  function buildTimeline() {
    tl = gsap.timeline({
      paused: true,
      defaults: { ease: "power3.out" }
    });

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

  return {
    el,

    onEnter() {
      if (!tl) buildTimeline();
      tl.play();
    },

    onLeave() {
        tl.reverse();
    }
  };
}
