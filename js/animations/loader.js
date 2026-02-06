export function playLoader(onComplete) {
  const loader = document.getElementById("loader1");
  const mask = loader.querySelector(".mask");
  const logo = loader.querySelector(".logo");

  const core1 = loader.querySelector(".layer-1");
  const core2 = loader.querySelector(".layer-2");
  const core3 = loader.querySelector(".layer-3");

  document.body.style.overflow = "hidden";

  gsap.set([core1, core2, core3], {
    scale: 1,
    transformOrigin: "center center",
  });

  const tl = gsap.timeline({ delay: 0.3 });

  tl.to(
    logo,
    {
      y:900,
      scale: 10,
      duration: 6,
      ease: "expo.inOut",
    },
    0
  );

  tl.to(
    core1,
    {
      scale: 20,
      duration: 3,
      ease: "expo.inOut",
    },
    2.5
  );

  tl.to(
    mask,
    {
      opacity: 0,
      duration: 0.4,
      ease: "power2.out",
      onComplete: () => {
        mask.remove();
        document.body.style.overflow = "auto";
        onComplete?.();
      },
    },
    "-=0.3"
  );
}
