export function createCustomSecondSection(el) {
  return {
    el,

    onEnter() {
        console.log("Enter banner")
    },

    onLeave() {
        console.log("Leave  banner")
    }
  };
}