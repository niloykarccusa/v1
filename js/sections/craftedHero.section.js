export function createCraftedHeroSection(el) {
  const heading = el.querySelector(".heading-hero");
  let tl;

  function buildTimeline() {
    tl = gsap.timeline({
      paused: true
    });

    tl.fromTo(
      heading,
      {
        y:-300,
        autoAlpha: 0,
        scaleX: 0.2,          
        letterSpacing: "-0.15em",
        transformOrigin: "center center"
      },
      {
        autoAlpha: 1,
        scaleX: 1,
        letterSpacing: "0em",
        duration: 2.5
      },
      2
    );
  }

  return {
    el,

    onEnter() {
      if (!tl) buildTimeline();
      tl.play();
    },

    onLeave() {
      if (tl) tl.reverse();
    },

    transitionDuration: 2
  };
}
