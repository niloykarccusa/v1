export function createTrendSection(el) {
  return {
    el,

    onEnter() {
        console.log("Enter Trend")
    },

    onLeave() {
        console.log("Leave  Trend")
    }
  };
}