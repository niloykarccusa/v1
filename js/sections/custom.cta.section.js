export function createCustomCtaSection(el) {
  return {
    el,

    onEnter() {
        console.log("Enter Phrase")
    },

    onLeave() {
        console.log("Leave  Phrase")
    }
  };
}