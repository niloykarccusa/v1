export function createCraftedHeroSection(el) {
    const heading = el.querySelector(".heading-hero");
    let tl;

    function buildTimeline() {
        tl = gsap.timeline({
            paused: true,
            defaults: { duration: 0.8, ease: "power3.out" }
        });

        tl.fromTo(
            heading,
            {
                y: 0,
                autoAlpha: 0
            },
            {
                y: -300,
                autoAlpha: 1
            }
        );
    }

    return {
        el,

        onEnter(direction) {
            if (!tl) buildTimeline();
            tl.play();
        },

        onLeave(direction) {
            if (tl) tl.reverse();
        },

        transitionDuration: 3,
    };
}
