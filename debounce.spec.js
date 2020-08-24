const debounce = require('./debounce');
const sinon = require('sinon')



describe('Debounce', () => {
    let clock;
    let debouncedFunc;
    let spyFunc;

    beforeEach(() => {
        clock = sinon.useFakeTimers();
        spyFunc = jest.fn();
        debouncedFunc = debounce(spyFunc, 1000);
    });

    afterEach(() => {
        clock.restore();
    });

    test('callback should not been invoked on first call', () => {
        debouncedFunc();
        expect(spyFunc).toHaveBeenCalledTimes(0);
    });

    test('callback should not been invoked in case of < 1000 interval call', () => {
        for(let i = 0; i < 10; i++) {
            clock.tick(500);
            debouncedFunc();
        }
        expect(spyFunc).toHaveBeenCalledTimes(0);
    });

    test('callback should not been invoked in case of < 1000 interval call', () => {
        debouncedFunc();
        clock.tick(1000);
        expect(spyFunc).toHaveBeenCalledTimes(1);
    });
});
