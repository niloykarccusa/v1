export function createHeroSection(el) {
  const tl = gsap.timeline({ paused: true });
  tl.to({}, { duration: 0.1 });

  return {
    el,
    timeline: tl,
  };
}
