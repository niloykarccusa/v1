export function createFounderSection(el) {
    return {
        el,
        onEnter(direction) {
            console.log("Enter Founder")
        },

        onLeave(direction) {
            console.log("Leave Founder")
        }
    };
}