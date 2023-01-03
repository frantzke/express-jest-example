const { sum, diff, product } = require('../src/calculator');

describe("Calculator: ", () => {

    test("1 plus 1 should return 2", () => {
        const actual = sum(1,1);
        expect(actual).toBe(2);
    });

    test("10 minus 2 should return 8", () => {
        const actual = diff(10,2);
        expect(actual).toBe(8);
    });

    test("4 times 10 should return 40", () => {
        const actual = product(4, 10);
        expect(actual).toBe(40);
    })

});