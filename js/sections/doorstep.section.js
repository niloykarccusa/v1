export function createDoorstepSection(el) {
    const heading = el.querySelector("h2");
    const text = el.querySelector("p");
    const grid = el.querySelector(".image-grid");

    const clip = {
        hiddenLeft: "polygon(0 0, 0 0, 0 100%, 0 100%)",
        visible: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
        hiddenRight: "polygon(100% 0, 100% 0, 100% 100%, 100% 100%)",
        invisible:"polygon(0 0,0 0,0 0,0 0)"
    };

    let tl;

    function kill() {
        if (tl) {
            tl.kill();
            tl = null;
        }
    }

    function reset() {
        gsap.set([heading, text], {
            y: -120,
            opacity: 0
        });

        gsap.set(grid, {
            clipPath: clip.hiddenLeft
        });
    }

    reset();

    function animateIn() {
        tl = gsap.timeline();

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
        // return tl;
    }

    function animateOut() {
        tl = gsap.timeline();

        tl.fromTo(
            grid,
            { clipPath: clip.visible },
            {
                clipPath: clip.hiddenRight,
                duration: 1.6,
                ease: "power3.out"
            },
        )
        .to(
            [heading, text],
            {
                y: -120,
                opacity: 0,
                duration: 1.4,
                ease: "power3.out"
            },
            "<"
        )
        .add(reset);
        // return tl;
    }

    return {
        el,

        onEnter(direction) {
            kill();
            animateIn();
        },

        onLeave(direction) {
            kill();
            animateOut();
        }
    };
}
