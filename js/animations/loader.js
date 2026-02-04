export function playLoader(onComplete) {
  const loader = document.getElementById("loader1");
  const mask = loader.querySelector(".mask");
  const logo = loader.querySelector(".logo");
  const core = loader.querySelector(".layer-1");

  gsap.set(mask, {
    scale: 1,
    y: 0,
    transformOrigin: "center center",
  });

  gsap.set(core, {
    scale: 1,
    transformOrigin: "center center",
  });

  const tl = gsap.timeline({ delay: 0.3 });
  tl.to(mask, {
    scale: 1.15,
    y: 120,
    duration: 10,
    ease: "power2.out",
  });
  tl.to(
    core,
    {
      scale: 60,
      duration: 2.2,
      ease: "expo.inOut",
    },
    0,
  );

  tl.to(
    loader,
    {
      opacity: 0,
      duration: 0.4,
      ease: "power2.out",
      onComplete: () => {
        loader.remove();
        document.body.style.overflow = "auto";
        onComplete?.();
      },
    },
    "-=0.3",
  );
}
