export function createCraftedHeroSection(el) {
    return {
        el,
        onEnter(direction) {
            console.log("Enter Crafted")
        },

        onLeave(direction) {
            console.log("Leave Crafted")
        }
    };
}
