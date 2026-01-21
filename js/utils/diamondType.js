export function getDiamondType(el) {
    const types = ['white', 'beige', 'blue', 'pink'];

    const match = types.find(type => el.classList.contains(type));
    return match ?? 'unknown';
}