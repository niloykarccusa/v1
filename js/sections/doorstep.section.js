export function createDoorstepSection(el) {
    return {
        el,
        onEnter(direction) {
            console.log("Enter Doorstep")
        },

        onLeave(direction) {
            console.log("Leave Doorstep")
        }
    };
}