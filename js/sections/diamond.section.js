export function createDiamondSection(el) {
    return {
        el,
        onEnter(direction) {
            console.log("Enter Diamond")
        },

        onLeave(direction) {
            console.log("Leave Diamond")
        }
    };
}
