export function createHeroSection(el) {
    return {
        el,
        onEnter(direction) {
            console.log("Enter Hero")
        },

        onLeave(direction) {
            console.log("Leave Hero")
        }
    };
}