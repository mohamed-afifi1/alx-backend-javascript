const chai = require('chai');
const expect = chai.expect;
const calculateNumber = require('./2-calcul_chai');


describe('calculateNumber', function () {
    it('test1', function () {
        expect(calculateNumber('SUM', 1.4, 4.5)).to.equal(6);
    });

    it('test2', function () {
        expect(calculateNumber('SUBTRACT', 1.4, 4.5)).to.equal(-4);
    });

    it('test3', function () {
        expect(calculateNumber('DIVIDE', 1.4, 4.5)).to.equal(0.2);
    });

    it('test4', function () {
        expect(calculateNumber('DIVIDE', 1.4, 0)).to.equal('Error');
    });
});
