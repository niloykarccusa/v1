export function playLoader(onComplete) {
  const loader = document.getElementById("loader1");
  const mask = loader.querySelector(".mask");
  const logo = loader.querySelector(".logo");
  const core = loader.querySelector(".layer-1");
  const core2 = loader.querySelector(".layer-2");
  const core3 = loader.querySelector(".layer-3");

  document.body.style.overflow = "hidden";

  gsap.set(core, {
    scale: 1,
    transformOrigin: "center center",
  });

  const tl = gsap.timeline({ delay: 0.3 });
  // tl.to(
  //   mask,
  //   {
  //     scale:5,
  //     y:250,
  //     duration: 4,
  //     ease: "expo.inOut",
  //   },
  //   0,
  // );

  tl.to(
    core,
    {
      scale:30,
      duration: 4.8,
      ease: "expo.inOut",
    },
    0,
  );
  tl.to(
    core2,
    {
      scale: 30,
      duration: 4.8,
      ease: "expo.inOut",
    },
    0,
  );
  tl.to(
    core3,
    {
      scale: 30,
      duration: 4.8,
      ease: "expo.inOut",
    },
    0,
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
    "-=0.3",
  );
}