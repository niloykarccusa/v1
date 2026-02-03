export function createWorkedSection(el) {
  return {
    el,

    onEnter() {
        console.log("Enter Worked")
    },

    onLeave() {
        console.log("Leave  Worked")
    }
  };
}
