import { enableDiamondObserver, disableDiamondObserver,goToSecondSection ,goToThirdSection} from "./diamondObserver.js";

export function initDiamondScrollTrigger(section, index) {
    if (index !== 0) return;

    const left = section.querySelector(".left-side");
    const right = section.querySelector(".right-side");

    ScrollTrigger.create({
        trigger: section,
        start: "top 10%",
        end: "top 40%",
        onEnter: onEnterFromTop,
        onLeave: onLeaveDown,
        onEnterBack: onEnterBackUp
    });

    ScrollTrigger.create({
        trigger: '.pink',
        start: "bottom bottom",
        onEnterBack: () => {
            enableDiamondObserver();
            goToThirdSection();
        }
    });

    function onEnterFromTop() {
        document.querySelectorAll(".right-1").forEach(el => {
            el.style.display = "block";
        });

        gsap.timeline()
            .to(left, {
                x: -160,
                duration: 4.5,
                ease: "power3.out"
            })
            .fromTo(
                right,
                { x: 400, opacity: 0 },
                { x: 0, opacity: 1, duration: 4.5, ease: "power3.out" },
                "<"
            );
    }

    function onEnterBackUp() {
        gsap.timeline()
            .to(right, {
                x: 400,
                opacity: 0,
                duration: 1.5,
                ease: "power3.inOut"
            })
            .to(left, {
                x: 0,
                duration: 1.5,
                ease: "power3.inOut"
            }, "<");

        document.querySelectorAll(".right-1").forEach(el => {
            el.style.display = "none";
        });
    }

    function onLeaveDown() {
        enableDiamondObserver();
        goToSecondSection();
    }
}
