export const SectionRegistry = {
    sections: [],
    currentIndex: 0,

    register(section) {
        this.sections.push(section);
    },

    getCurrent() {
        return this.sections[this.currentIndex];
    },

    getByIndex(index) {
        return this.sections[index];
    },

    canGoTo(index) {
        return index >= 0 && index < this.sections.length;
    }
};