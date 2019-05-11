import formatOutput from './formatOutput.js';

describe('formatOutput', () => {
    it('handles formatting the output', () => {
        expect(formatOutput([1])).toEqual(
            `Case #1: 1`
        );
        expect(formatOutput([1, 2, 3, 4])).toEqual(
            `Case #1: 1
Case #2: 2
Case #3: 3
Case #4: 4`
        );
    });
});
