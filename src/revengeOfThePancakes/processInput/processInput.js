export default function processInput(inputString = '') {
    const splitInput = inputString.trim().split(/\n/);
    if (splitInput.length < 2) {
        return ["0", []];
    }

    const numberOfStrings = splitInput[0];
    const arrayOfArrays = splitInput
        .slice(1)
        .map(
            curr => curr.trim().split('')
        );

    return [numberOfStrings, arrayOfArrays];
}
