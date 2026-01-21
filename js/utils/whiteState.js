export function isRightVisible(section) {
    const right = section.el.querySelector(".right-1");
    if (!right) return false;

    return getComputedStyle(right).display !== "none";
}