function printReverse(array) {
    for (var i = array.length - 1; i >= 0; i--) {
        console.log(array[i]);
    }
}

function isUniform(array) {
    for (var i = 0; i < array.length; i++) {
        if (array[i] !== array[0]) {
            return false;
        }
    }
    return true;
}

function sumArray(array) {
    var result = 0;
    for (var i = 0; i < array.length; i++) {
        result += array[i];
    }
    return result;
}

function max(array) {
    var maxValue = array[0];
    for (var i = 1; i < array.length; i++) {
        if (array[i] > maxValue) {
            maxValue = array[i];
        }
    }
    return maxValue;
}
