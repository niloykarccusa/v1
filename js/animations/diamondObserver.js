gsap.registerPlugin(Observer);

const sections = gsap.utils.toArray(".triangle-part");
const LAST_INDEX = sections.length - 1;
let current = 0;
let animating = false;
let observer;

export function initDiamondObserver() {
    gsap.set(sections, { autoAlpha: 0 });
    gsap.set(sections[0], { autoAlpha: 1 });

    observer = Observer.create({
        target: ".triangle-wrapper",
        type: "wheel,touch",
        tolerance: 10,
        preventDefault: true,
        enabled: false,
        onDown: () => {
            if (current === LAST_INDEX) {
                disableDiamondObserver();
                return;
            }
            gotoSection(current + 1, 1);
        },
        onUp: () => {
            if (current === 0) {
                disableDiamondObserver();
                return;
            }
            gotoSection(current - 1, -1);
        }
    });
}

export function enableDiamondObserver() {
    observer && observer.enable();
}

export function disableDiamondObserver() {
    observer && observer.disable();
}

export function goToSecondSection() {
    if (current === 0) {
        gotoSection(1, 1);
    }
}

export function goToThirdSection() {
    if (current === 3) {
        gotoSection(2, -1);
    }
}

function gotoSection(index, direction) {
    if (
        animating ||
        index < 0 ||
        index >= sections.length
    ) return;

    animating = true;

    const currentSection = sections[current];
    const nextSection = sections[index];

    const currentDiamond = currentSection.querySelector(".diamond-image");
    const nextDiamond = nextSection.querySelector(".diamond-image");

    const clockwise =
        (direction === 1 && index % 2 === 0) ||
        (direction === -1 && index % 2 === 1);

    const ROTATE_IN = clockwise ? 360 : -360;
    const ROTATE_OUT = -ROTATE_IN;

    const SCALE_IN  = direction === 1 ? 0.8 : 1.2;
    const SCALE_OUT = direction === -1 ? 1.2 : 0.8;

    gsap.timeline({
        defaults: {
            duration: 5,
            ease: "power3.out"
        },
        onComplete: () => {
            animating = false;
            current = index;
        }
    })
    .to(currentDiamond, {
        rotation: ROTATE_OUT,
        scale: SCALE_OUT,
        autoAlpha: 0,
        duration: 5,
        ease: "power2.in"
    }, 0)
    .to(currentSection, {
        autoAlpha: 0
    }, 0)
    .fromTo(
        nextSection,
        { autoAlpha: 0, yPercent: 100 * direction },
        { autoAlpha: 1, yPercent: 0 },
        0
    )
    .fromTo(
        nextDiamond,
        {
            rotation: ROTATE_IN,
            scale: SCALE_IN,
            autoAlpha: 0
        },
        {
            rotation: 0,
            scale: 1,
            autoAlpha: 1,
            duration: 5,
            ease: "power3.out"
        },
        0.15
    );
}


