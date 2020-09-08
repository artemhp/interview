const Promise = require('./promise.js');
describe('Promise', () => {
    test('then single resolved', async () => {
        const testPromise = new Promise ((resolve) => { resolve('Harry'); });
        const result = await testPromise.then(el => el + ' Potter');
        expect(result).toEqual('Harry Potter');
    });
    test('then multiple chain resolved', async () => {
        const testPromise = new Promise ((resolve) => { resolve('Harry'); });
        const result = await testPromise.then(el => el + ' James').then(el => el + ' Potter');
        expect(result).toEqual('Harry James Potter');
    });
    test('then chain rejected', async () => {
        const testPromise = new Promise ((_, reject) => { reject('Voldemort'); });
        const result = await testPromise.then(el => el + ' Potter').catch(el => 'lord ' + el);
        expect(result).toEqual('lord Voldemort');
    });
    test('error catch', async () => {
        const testPromise = new Promise (() => {throw 'Error';});
        const result = await testPromise.catch(e => e);
        expect(result).toEqual('Error');
    });
});