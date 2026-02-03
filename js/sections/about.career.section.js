export function createCareerSection(el) {
  return {
    el,

    onEnter() {
        console.log("Enter Career")
    },

    onLeave() {
        console.log("Leave  Career")
    }
  };
}
