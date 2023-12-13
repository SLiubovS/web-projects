it("Возводит x в степень n", function() {
    let x = 5;

    let result = x;
    assert.equal(pow(x, 1), result);

    result *= x;
    assert.equal(pow(x, 2), result);

    result *= x;
    assert.equal(pow(x, 3), result);
});