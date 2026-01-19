export function createBuildSection(el) {
    return {
        el,

        onEnter(direction) {
            console.log("Enter Build")
        },

        onLeave(direction) {
            console.log("Leave Build")
        }
    };
}
