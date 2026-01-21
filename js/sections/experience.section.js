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

      if (direction === 1) {
        tl.play(0);
      }
    },

    onLeave(direction) {},
    transitionDuration: 5
  };
}
