var isLength = require("@nathanfaucett/is_length"),
    isObject = require("@nathanfaucett/is_object");


module.exports = lastIndexOf;


function lastIndexOf(array, value, fromIndex) {
    return (isObject(array) && isLength(array.length)) ? arrayLastIndexOf(array, value, fromIndex || 0) : -1;
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
