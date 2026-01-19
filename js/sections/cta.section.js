export function createCtaSection(el) {
    return {
        el,

        onEnter(direction) {
            console.log("Enter Cta")
        },

        onLeave(direction) {
            console.log("Leave Cta")
        }
    };
}
