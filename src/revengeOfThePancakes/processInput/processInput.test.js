import processInput from './processInput';

describe('parses a giant input string and returns an array with the number of stacks and an array of stacks', () => {
    it('handles 1 test case', () => {
        expect(processInput(
            `1
            -
            `)
        ).toEqual(["1", [['-']]]);
    });
    it('handles multiple test cases', () => {
        expect(processInput(
            `2
            -
            ++
            `)
        ).toEqual(["2", [['-'], ['+', '+']]]);
    });
    it('handles bad input', () => {
        expect(processInput()).toEqual(["0", []]);
        expect(processInput('1++++++++')).toEqual(["0", []]);
    });
    it('handles malformed input', () => {
        expect(processInput(
            `2
            -~~~~
            +a+
            `)
        ).toEqual(["2", [['-'], ['+', '+']]]);
    });
});
