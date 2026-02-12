export function createExperienceSection(el) {
  const image = el.querySelector("img");

  const tl = gsap.timeline({ paused: true });

  if (image) {
    tl.fromTo(
      image,
      { scale: 1 },
      { scale: 1.5, duration:2, ease: "power1.inOut" }
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
