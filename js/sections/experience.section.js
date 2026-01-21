export function createExperienceSection(el) {
  const image = el.querySelector("img");
  let tl;

  function buildTimeline() {
    tl = gsap.timeline({ paused: true });

    tl.fromTo(
      image,
      { scale: 1 },
      { scale: 1.5, duration: 5, ease: "power1.inOut" },
    );
  }

  return {
    el,

    onEnter(direction) {
      if (!tl) buildTimeline();
      tl.play(0);
    },

    onLeave(direction) {
        tl.reverse();
    },
    transitionDuration: 5
  };
}
