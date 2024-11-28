const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', function () {
    it('test1', function () {
        assert.strictEqual(calculateNumber(1, 3), 4);
        assert.strictEqual(calculateNumber(-1.5, -3.5), -4);
    });
    it('test2', function () {
      assert.strictEqual(calculateNumber(1, 3.7), 5);
      assert.strictEqual(calculateNumber(-1, -3.7), -5);
    });
    it('test3', function () {
      assert.strictEqual(calculateNumber(1.2, 3.7), 5);
      assert.strictEqual(calculateNumber(-1.2, -3.7), -5);
    });
    it('test4', function () {
      assert.strictEqual(calculateNumber(1.5, 3.7), 6);
      assert.strictEqual(calculateNumber(-1.5, -3.7), -5);
    });
    it('test5', function () {
      assert.strictEqual(calculateNumber(1.5, 3), 5);
      assert.strictEqual(calculateNumber(-1.5, -3), -4);
    });
});
