import revengeOfThePancakes from './revengeOfThePancakes.js';

describe('revengeOfThePancakes', () => {
    it('takes in a string and gives ya some output based on how many pancakes you flip', () => {
        const inputString = `5
            -
            -+
            +-
            +++
            --+-
        `.trim();
        expect(revengeOfThePancakes(inputString)).toEqual(`
Case #1: 1
Case #2: 1
Case #3: 2
Case #4: 0
Case #5: 3
            `.trim());
    });
});
