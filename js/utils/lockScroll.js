let locked = false;

export function lockScroll() {
    if (locked) return;
    locked = true;
    document.body.style.overflow = "hidden";
}

export function unlockScroll() {
    locked = false;
    document.body.style.overflow = "";
}