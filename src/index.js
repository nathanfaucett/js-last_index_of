var isLength = require("is_length"),
    isObjectLike = require("is_object_like");


function arrayLastIndexOf(array, value, fromIndex) {
    var i = array.length,
        il = fromIndex;

    while (i-- > il) {
        if (array[i] === value) {
            return i;
        }
    }

    return -1;
}

module.exports = function indexOf(array, value, fromIndex) {
    return (isObjectLike(array) && isLength(array.length)) ? arrayLastIndexOf(array, value, fromIndex || 0) : -1;
};
