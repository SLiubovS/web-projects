describe("row", function () {

    let x = 5;
    let result;

    describe(`возводит 5 в степень 1`, function () {
        let result = x;
        it(`5 в степени 1 будет ${result}`, function () {
            assert.equal(pow(x, 1), result);
        });
    });
    describe(`возводит 5 в степень 2`, function () {
        let result = x * x;
        it(`5 в степени 2 будет ${result}`, function () {
            assert.equal(pow(x, 2), result);
        });
    });
    describe(`возводит 5 в степень 3`, function () {
        let result = x * x * x;
        it(`5 в степени 3 будет ${result}`, function () {
            assert.equal(pow(x, 3), result);
        });
    });
});