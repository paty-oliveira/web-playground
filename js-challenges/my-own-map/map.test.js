const map = require('./map')

test('The function should return a new array which each element is doubled', () => {
    const array = [1, 2, 3, 4];
    const callback = (x) => x * 2;
    const actualResult = map(array, callback);
    const expectedResult = [2, 4, 6, 8];

    expect(actualResult).toEqual(expectedResult)
});

test('The function should return a new array which each element sum to 1', () => {
   const array = [1, 2, 3, 4];
   const callback = (x) => x + 1;
   const actualResult = map(array, callback);
   const expectedResult = [2, 3, 4, 5];

   expect(actualResult).toEqual(expectedResult);
});
