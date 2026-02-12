export function createCtaSection(el) {
  const img = el.querySelector("img");

  const SLICE_COUNT = 12;
  const slicesWrap = document.createElement("div");
  slicesWrap.className = "cta-slices";

  const slices = [];
  const imgUrl = img.getAttribute("src");

  const rect = el.getBoundingClientRect();
  const totalHeight = rect.height;
  const sliceHeight = Math.ceil(totalHeight / SLICE_COUNT);

  for (let i = 0; i < SLICE_COUNT; i++) {
    const slice = document.createElement("div");
    slice.className = "cta-slice";

    const top = i * sliceHeight;

    slice.style.height = `${sliceHeight}px`;
    slice.style.top = `${top}px`;
    slice.style.backgroundImage = `url(${imgUrl})`;
    slice.style.backgroundSize = `100% ${totalHeight}px`;
    slice.style.backgroundPosition = `center -${top}px`;

    slicesWrap.appendChild(slice);
    slices.push(slice);
  }

  el.appendChild(slicesWrap);

  function reset() {
    gsap.set(slices, {
      xPercent: (i) => (i % 2 === 0 ? -100 : 100),
      autoAlpha: 1,
    });

    gsap.set(img, { autoAlpha: 0 });
  }

  reset();

  const tl = gsap.timeline({
    paused: true,
    defaults: {
      duration: 4,
      ease: "power3.inOut",
    },
    onReverseComplete: reset,
  });

  tl.to(slices, {
    xPercent: 0,
    stagger: 0.08,
  });

  tl.to(
    img,
    {
      autoAlpha: 1,
      duration: 0.2,
      ease: "power1.out",
    },
    ">-0.1"
  );

  if (tl.duration() === 0) {
    tl.to({}, { duration: 0.3 });
  }

  return {
    el,
    timeline: tl,
  };
}
