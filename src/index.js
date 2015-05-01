var isLength = require("is_length"),
    isObjectLike = require("is_object_like");


module.exports = lastIndexOf;


function lastIndexOf(array, value, fromIndex) {
    return (isObjectLike(array) && isLength(array.length)) ? arrayLastIndexOf(array, value, fromIndex || 0) : -1;
}

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
