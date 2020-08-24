const throttling = require('./throttling');
const sinon = require('sinon')

describe('Throttling', () => {
    let clock;
    let throttlingFunc;
    let spyFunc;

    beforeEach(() => {
        clock = sinon.useFakeTimers();
        spyFunc = jest.fn();
        throttlingFunc = throttling(spyFunc, 1000);
    });

    afterEach(() => {
        clock.restore();
    });

    test('callback should been invoked on first call', () => {
        throttlingFunc();
        expect(spyFunc).toHaveBeenCalledTimes(1);
    });

    test('callback should been invoked twice if duration of multiple invoke < 1000 milliseconds', () => {
      throttlingFunc();
      clock.tick(100);
      throttlingFunc();
      clock.tick(1000);
      expect(spyFunc).toHaveBeenCalledTimes(2);
    });

    test('callback should been invoked three times if duration of multiple invoke less then 2000 but more then 1000 milliseconds', () => {
      throttlingFunc();
      for(let i = 0; i < 20; i++) {
        clock.tick(500);
        throttlingFunc();
      }
      clock.tick(3000);
      expect(spyFunc).toHaveBeenCalledTimes(12);
    });

});
