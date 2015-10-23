var tape = require("tape"),
    lastIndexOf = require("..");


tape("lastIndexOf(array: Array, value: Any) should return index of item in array", function(assert) {
    assert.equal(lastIndexOf([0, 1, 2, 0, 1, 2], 1), 4);
    assert.equal(lastIndexOf([0, 1, 2, 0, 1, 2], 3), -1);
    assert.equal(lastIndexOf([0, 1, 2, 0, 1, 2], 0), 3);
    assert.equal(lastIndexOf(null, 3), -1);
    assert.end();
});
