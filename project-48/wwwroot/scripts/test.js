
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



//
//
// Что не так с этим тестом?
//     важность: 5
// Что не так в нижеприведённом тесте функции pow?
//
//     it("Возводит x в степень n", function() {
//         let x = 5;
//
//         let result = x;
//         assert.equal(pow(x, 1), result);
//
//         result *= x;
//         assert.equal(pow(x, 2), result);
//
//         result *= x;
//         assert.equal(pow(x, 3), result);
//     });
// P.S. Тест не содержит синтаксических ошибок и успешно проходит.







