export function createRiskSection(el) {
  return {
    el,

    onEnter() {
        console.log("Enter Risk")
    },

    onLeave() {
        console.log("Leave  Risk")
    }
  };
}
