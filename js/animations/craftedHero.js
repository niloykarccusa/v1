export function initCraftedHero(section) {
    if (!section) return;

    const heading = section.querySelector(".heading-hero");
    const houseImage = section.querySelector(".house-image");

    let activeTL = null;

    function playTimeline(tl) {
        if (activeTL) activeTL.kill();
        activeTL = tl;
        tl.play();
    }

    function resetState() {
        gsap.set(heading, {
            y: 120,
            opacity: 0
        });

        gsap.set(houseImage, {
            scale: 1
        });
    }

    function enter() {
        playTimeline(
            gsap.timeline()
                .to(heading, {
                    y: 0,
                    opacity: 1,
                    duration: 3,
                    ease: "power3.out"
                })
                .to(houseImage, {
                    scale: 1.4,
                    x:110,
                    y:-20,
                    duration: 3,
                    ease: "power2.out"
                }, "<")
        );
    }

    resetState();

    ScrollTrigger.create({
        trigger: section,
        start: "top 70%",
        end: "bottom 30%",
        onEnter: enter,
        onEnterBack: enter,
        onLeave: resetState,
        onLeaveBack: resetState
    });
}
