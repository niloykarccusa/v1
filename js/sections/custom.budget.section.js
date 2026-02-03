export function createBudgetSection(el) {
  return {
    el,

    onEnter() {
        console.log("Enter Budget")
    },

    onLeave() {
        console.log("Leave  Budget")
    }
  };
}