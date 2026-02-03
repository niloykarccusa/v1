export function createCustomBannerSection(el) {
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