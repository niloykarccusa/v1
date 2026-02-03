export function createChangeSection(el) {
  return {
    el,

    onEnter() {
        console.log("Enter Change")
    },

    onLeave() {
        console.log("Leave  Change")
    }
  };
}
