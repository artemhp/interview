const map = require('./map');

test('In case of NodeJS - no prototype aFilter in Array', () => {
    expect(Array.prototype.aFilter).toEqual(undefined);
});

describe('Iterate items in array of 6 elements', () => {
    beforeEach(() => {
        Array.prototype.aMap = map;
        mapItems = [1, 2, 3, 4, 5];
    });
    test('do nothing', () => {
        expect(mapItems.aMap(item => item))
            .toEqual(mapItems)
    });
    test('+ 1000', () => {
        expect(mapItems.aMap(item => item + 1000))
            .toEqual([1001, 1002, 1003, 1004, 1005])
    });
    test('with no callback - the same as no condition', () => {
        expect(() => filteredItems.aMap())
            .toThrow()
    });
});