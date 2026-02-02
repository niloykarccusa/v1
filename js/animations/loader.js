export function playLoader(onComplete) {
  const loader = document.getElementById("loader");
  const logo = loader.querySelector(".loader-logo");
  gsap.set(logo, { scale: 0.4, y: 0, opacity: 1 });

  const tl = gsap.timeline({ delay: 0.3 });

  tl.to(logo, {
    scale: 400,
    y: 800,
    duration: 2.5,
    ease: "expo.inOut",
  });
  tl.to(
    logo,
    {
      opacity: 0,
      duration: 0.25,
    },
    "-=0.3"
  );
  tl.to(
    loader,
    {
      opacity: 0,
      duration: 0.35,
      ease: "power2.out",
      onComplete: () => {
        loader.remove();
        document.body.style.overflow = "auto";
        onComplete?.();
      },
    },
    "-=0.1"
  );
}
