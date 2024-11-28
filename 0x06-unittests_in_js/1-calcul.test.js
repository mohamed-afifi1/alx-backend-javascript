const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('calculateNumber', function () {
    it('test1', function () {
        assert.strictEqual(calculateNumber('SUM', 1.4, 4.5), 6);
    });
    it('test2', function () {
      assert.strictEqual(calculateNumber('SUBTRACT', 1.4, 4.5), -4);
    });
    it('test3', function () {
      assert.strictEqual(calculateNumber('DIVIDE', 1.4, 4.5), 0.2);
    });
    it('test4', function () {
      assert.strictEqual(calculateNumber('DIVIDE', 1.4, 0), 'Error');
    });
    it('test5', function () {
      assert.strictEqual(calculateNumber('SUM', 1.2, 3.7), 5);
    });
});
