var assert = require("assert"),
    lastIndexOf = require("../src/index");


describe("lastIndexOf", function() {
    it("should return index of item in array", function() {
        assert.equal(lastIndexOf([0, 1, 2, 0, 1, 2], 1), 4);
        assert.equal(lastIndexOf([0, 1, 2, 0, 1, 2], 3), -1);
        assert.equal(lastIndexOf([0, 1, 2, 0, 1, 2], 0), 3);
        assert.equal(lastIndexOf(null, 3), -1);
    });
});
