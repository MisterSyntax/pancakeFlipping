import getFlipsForHappyStack from './getFlipsForHappyStack';


describe('getFlipsForHappyStack', () => {
    it('handles a single Stack', () => {
        expect(getFlipsForHappyStack(['-'])).toEqual(1);
        expect(getFlipsForHappyStack(['+'])).toEqual(0);
    });
    it('handles a double Stack', () => {
        expect(getFlipsForHappyStack(['-', '-'])).toEqual(1);
        expect(getFlipsForHappyStack(['+', '-'])).toEqual(2);
        expect(getFlipsForHappyStack(['-', '+'])).toEqual(1);
        expect(getFlipsForHappyStack(['+', '+'])).toEqual(0);
    });
    it('handles a larger Stack', () => {
        expect(getFlipsForHappyStack(['-', '-', '+', '-'])).toEqual(3);
        expect(getFlipsForHappyStack(['+', '+', '+', '+', '+', '+'])).toEqual(0);
        expect(getFlipsForHappyStack(['-', '-', '-', '+', '+', '+'])).toEqual(1);
        expect(getFlipsForHappyStack(['-', '+', '-', '+', '+', '+'])).toEqual(3);
    });
});
