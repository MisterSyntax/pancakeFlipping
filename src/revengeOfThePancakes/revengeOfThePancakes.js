import processInput from './processInput/processInput.js';
import formatOutput from './formatOutput/formatOutput.js';
import getFlipsForHappyStack from './getFlipsForHappyStack/getFlipsForHappyStack.js';

export default function revengeOfThePancakes(inputString, numStacks, stacks) {
    let results = [];
    const [numberOfStacks, stacksOfPancakes] = processInput(inputString);
    for (let i = 0; i < numberOfStacks; i++) {
        results.push(
            getFlipsForHappyStack(stacksOfPancakes[i])
        );
    }

    return formatOutput(results);
}
