import { getDiamondType } from "../utils/diamondType.js";
import {
    enterDiamond,
    leaveDiamond,
    controlWhiteSides
} from "../animations/diamondAnimations.js";

export function createDiamondSection(el) {
    const type = getDiamondType(el);
    const isWhite = type === "white";
    return {
        el,

        onEnter(direction) {
            if (type === "white") controlWhiteSides(el, true);
            if (type === "beige") enterDiamond(el, true);
            if (type === "blue") enterDiamond(el, false);
            if (type === "pink") enterDiamond(el, true);
        },

        onLeave(direction) {
            if (type === "white") controlWhiteSides(el, false);
            if (type === "beige") leaveDiamond(el, true);
            if (type === "blue") leaveDiamond(el, false);
            if (type === "pink") leaveDiamond(el, true);
        },
    };
}
