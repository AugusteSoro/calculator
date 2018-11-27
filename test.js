const operations = require('./operations.js');
const verifications = require('./verification.js');
const assert = require('assert');

it('correctly calculates the sum of 1 and 3', () => {
    assert.equal(operations.additioner(1, 3), 4);
});

it('correctly calculates the difference of 33 and 3', () => {
    assert.equal(operations.soustraire(33, 3), 30);
});

it('correctly calculates the product of 2 and 5', () => {
    assert.equal(operations.multiplier(2, 5), 10);
});

it('correctly calculates the difference of 10 and 2', () => {
    assert.equal(operations.diviser(0, 45), 0);
});

it('correctly verify if 2 and 3 are a number', () => {
    assert.equal(verifications.verifierSiNombre(2, 3), true);
});

it('correctly verify it 12 is not null', () => {
    assert.equal(verifications.verifierValeurNonNull(12), true);
});

