const filter = require('./filter');

test('In case of NodeJS - no prototype aFilter in Array', () => {
    expect(Array.prototype.aFilter).toEqual(undefined);
});

describe('Filter items in array of 6 elements', () => {
    let filteredItems = [];
    beforeEach(() => {
        Array.prototype.aFilter = filter;
        filteredItems = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
    });
    test('with no condition', () => {
        expect(filteredItems.aFilter(word => word))
            .toEqual(filteredItems)
    });
    test('with condition that checks length', () => {
        expect(filteredItems.aFilter(word => word.length > 6))
            .toEqual(['exuberant', 'destruction', 'present'])
    });
    test('with no callback - the same as no condition', () => {
        expect(() => filteredItems.aFilter()).toThrow()
    });
});