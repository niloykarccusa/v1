export function createCraftedSection(el) {
  return {
    el,

    onEnter() {
        console.log("Enter Crafted")
    },

    onLeave() {
        console.log("Leave  Crafted")
    }
  };
}
