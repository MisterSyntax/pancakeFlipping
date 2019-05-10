export default function flipPancakeStack(pancakeStack, flipPosition) {
    let flippedStack = flipPancakeOrder(pancakeStack, flipPosition);

    for(let i = 0; i <= flipPosition; i++) {
        flippedStack[i] = flipPancake(flippedStack[i]);
    }

    return flippedStack;
}


// --- Helpers --- //

export function flipPancakeOrder(pancakeStack, position) {
    return [...pancakeStack.slice(0, position + 1).reverse(), ...pancakeStack.slice(position + 1)];
}

export function flipPancake(pancake) {
    if (pancake === '-') {
        return '+';
    }

    return '-';
}
