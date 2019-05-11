import flipPancakeStack from './flipPancakeStack/flipPancakeStack.js';

export default function getFlipsForHappyStack(stackOfPancakes) {
    let numberOfFlips = 0;
    let flippedStack = stackOfPancakes;

    for (let i = stackOfPancakes.length -1; i >= 0; i -= 1) {
        if(flippedStack[i] === '-' && flippedStack[0] === '+') {
            flippedStack = flipPancakeStack(flippedStack, 0);
            flippedStack = flipPancakeStack(flippedStack, i);
            numberOfFlips += 2;
        } else if (flippedStack[i] === '-') {
            flippedStack = flipPancakeStack(flippedStack, i);
            numberOfFlips += 1;
        }
    }

    return numberOfFlips;
}
