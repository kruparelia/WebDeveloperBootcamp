function isEven(num) {
    if (num % 2 === 0) {
        return true;
    }
    else {
        return false;
    }
}
//refactored
//mod statements return true or false, so all we need is this
function isEven2(num) {
    return num % 2 === 0;
}
//recursive way -- shortest way, little more confusing thoooo
function factorial(num) {
    if (num === 0) {
        return 1;
    }
    else {
        return num * factorial(num - 1);
    }
}
//other way:
function factorial2(num) {
    //define result variable
    var result = 1;
    //calculate factorial and store value in result
    for (var i = 2; i <= num; i++) {
        result *= i;
    }
    //return result variable
    return result;
}
//another way
function factorialSubtract(num) {
    if(num === 0){
        return 1;
    }
    else{
        var result = num;
        for (var i = num - 1; i > 0; i--) {
            result *= i;
        }
        return result;
    }
}

function kebabToSnake(str) {
    newStr = str.replace("-", "_");
    return newStr;
}
