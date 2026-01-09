export function initDoorstepSection(section) {
    if (!section) return;

    const heading = section.querySelector("h2");
    const text = section.querySelector("p");
    const swiper = section.querySelector(".doorstepSwiper");
    const images = section.querySelectorAll(".swiper-slide img");

    const clip = {
        hiddenLeft: "polygon(0 0, 0 0, 0 100%, 0 100%)",
        visible: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
        hiddenRight: "polygon(100% 0, 100% 0, 100% 100%, 100% 100%)"
    };

    let activeTL = null;

    function playTimeline(tl) {
        if (activeTL) activeTL.kill();
        activeTL = tl;
        tl.play();
    }

    function enterFromTop() {
        playTimeline(
            gsap.timeline()
                .fromTo([heading, text],
                    { y: -160, opacity: 0 },
                    { y: 10, opacity: 1, duration: 2, ease: "power3.out" }
                )
                .fromTo(swiper,
                    { y: 360 },
                    { y: 20, duration: 2, ease: "power3.out" },
                    "<"
                )
                .fromTo(images,
                    { clipPath: clip.hiddenLeft, opacity: 0 },
                    {
                        clipPath: clip.visible,
                        opacity: 1,
                        duration: 2.5,
                        stagger: 1,
                        ease: "power4.out"
                    },
                    "<0.1"
                )
        );
    }

    function enterFromBottom() {
        playTimeline(
            gsap.timeline()
                .fromTo(images,
                    { clipPath: clip.hiddenLeft },
                    {
                        clipPath: clip.visible,
                        opacity: 1,
                        stagger: 1,
                        duration: 2.5,
                        ease: "power4.out"
                    }
                )
                .fromTo([heading, text],
                    { y: -160, opacity: 0 },
                    { y: 200, opacity: 1, duration: 2, ease: "power3.out" },
                    "<"
                )
        );
    }

    function exitToBottom() {
        playTimeline(
            gsap.timeline()
                .to(images, {
                    clipPath: clip.hiddenRight,
                    opacity: 0,
                    stagger: { each: 0.12, from: "end" },
                    duration: 2.5,
                    ease: "power3.in"
                })
                .to(section, { y: -120, ease: "power3.in" }, "<")
        );
    }

    ScrollTrigger.create({
        trigger: section,
        start: "top 65%",
        end: "bottom 35%",
        onEnter: enterFromTop,
        onEnterBack: enterFromBottom
    });

    ScrollTrigger.create({
        trigger: section,
        start: "bottom center",
        onEnter: exitToBottom
    });
}
