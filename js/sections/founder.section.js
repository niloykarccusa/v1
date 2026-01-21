export function createFounderSection(el) {
    const content = el.querySelector(".founder-content");
    const image   = el.querySelector(".founder-image");
    const founder=  el.querySelector(".founder-grid")

    let tl;

    function reset() {
        console.log("reset")
        gsap.to(founder, {
                    autoAlpha: 1,
                    xPercent: 0,
                    yPercent: 0,
                    duration: 1.2,
                    ease: "power3.in"
                })
    }

    function buildTimeline() {
        tl = gsap.timeline({
            paused: true,
            defaults: { duration: 3, ease: "power3.out" }
        });

        tl.fromTo(
            content,
            {
                autoAlpha: 0,
                xPercent: -100,
                yPercent: 100
            },
            {
                autoAlpha: 1,
                xPercent: 0,
                yPercent: 0
            },
            3
        )
        .fromTo(
            image,
            {
                autoAlpha: 0,
                xPercent: 100,
                yPercent: 100
            },
            {
                autoAlpha: 1,
                xPercent: 0,
                yPercent: 0
            },
            3
        );
    }

    return {
        el,
        onEnter(direction) {
            if (!tl) buildTimeline();
            tl.play();
        },

        onLeave(direction) {
            if (direction === -1 && tl) {
                tl.reverse();
                return;
            }
            if (direction === 1) {
                gsap.to(founder, {
                    autoAlpha: 0,
                    xPercent: -20,
                    yPercent: -20,
                    duration: 1.2,
                    ease: "power3.in",
                    onComplete: reset
                })
            }
        },
        transitionDuration: 5,
    };
}
