export function createExperienceSection(el) {
    return {
        el,

        onEnter(direction) {
            console.log("Enter Experience")
        },

        onLeave(direction) {
            console.log("Leave Experience")
        }
    };
}