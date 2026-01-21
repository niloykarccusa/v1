export function createBuildSection(el) {
    const blogGrid = el.querySelector(".blog-grid");
    let tl;

    function buildTimeline() {
        tl = gsap.timeline({
            paused: true,
            defaults: { duration: 1, ease: "power3.out" }
        });

        tl.fromTo(
            blogGrid,
            {
                autoAlpha: 0,
                xPercent: -100
            },
            {
                autoAlpha: 1,
                xPercent: 0
            },
            1.5
        );
    }

    return {
        el,

        onEnter(direction) {
            if (!tl) buildTimeline();
            tl.play();
        },

        onLeave(direction) {
            
        }
    };
}
