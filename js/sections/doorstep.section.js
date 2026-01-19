export function createDoorstepSection(el) {
    const heading = el.querySelector("h2");
    const text = el.querySelector("p");
    const grid = el.querySelector(".image-grid");

    const clip = {
        hiddenLeft: "polygon(0 0, 0 0, 0 100%, 0 100%)",
        visible: "polygon(0 0, 100% 0, 100% 100%, 0 100%)"
    };

    let tl;

    function buildTimeline() {
        tl = gsap.timeline({ paused: true });

        tl.fromTo(
            [heading, text],
            { y: -120, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 0.8,
                ease: "power3.in"
            }
        )
        .fromTo(
            grid,
            { clipPath: clip.hiddenLeft },
            {
                clipPath: clip.visible,
                duration: 2,
                ease: "power3.in"
            },
            "<0.1"
        );
    }

    return {
        el,

        onEnter() {
            if (!tl) buildTimeline();
            tl.play();
        },

        onLeave() {
            if (tl) tl.reverse();
        }
    };
}
