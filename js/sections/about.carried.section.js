export function createCarriedSection(el) {
  return {
    el,

    onEnter() {
        console.log("Enter Carried")
    },

    onLeave() {
        console.log("Leave  Carried")
    }
  };
}
