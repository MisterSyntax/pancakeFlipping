import flipPancakeStack, {
    flipPancake,
    flipPancakeOrder,
} from './flipPancakeStack';

describe('flipPancakeStack', () => {
    it('flips a single top pancake', () => {
        expect(flipPancakeStack(['-'], 0))
            .toEqual(['+']);
        expect(flipPancakeStack(['+', '+', '-'], 0))
            .toEqual(['-', '+', '-']);
    });
    it('flips two pancakes', () => {
        expect(flipPancakeStack(['+', '-'], 1))
            .toEqual(['+', '-']);
        expect(flipPancakeStack(['+', '-', '+', '+'], 1))
            .toEqual(['+', '-', '+', '+']);
    });
    it('flips multiple pancakes', () => {
        expect(flipPancakeStack(['+', '-', '-'], 2))
            .toEqual(['+', '+', '-']);
        expect(flipPancakeStack(['+', '-', '-', '+', '+'], 2))
            .toEqual(['+', '+', '-', '+', '+']);
    });
});


describe('flipPancake', () => {
    it('flips from blank to happy', () => {
        expect(flipPancake('-')).toEqual('+');
    });
    it('flips from happy to blank', () => {
        expect(flipPancake('+')).toEqual('-');
    });
});

describe('flipPancakeOrder', () => {
    it('flips the order of elements up, and including that position', () => {
        expect(flipPancakeOrder([1, 2, 3, 4], 0)).toEqual([1, 2, 3, 4]);
        expect(flipPancakeOrder([1, 2, 3, 4], 1)).toEqual([2, 1, 3, 4]);
        expect(flipPancakeOrder([1, 2, 3, 4], 2)).toEqual([3, 2, 1, 4]);
        expect(flipPancakeOrder([1, 2, 3, 4], 3)).toEqual([4, 3, 2, 1]);
        expect(flipPancakeOrder([1], 0)).toEqual([1]);
    });

});
