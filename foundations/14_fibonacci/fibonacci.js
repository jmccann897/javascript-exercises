const fibonacci = function(num) {
    if (num < 0) {
        return "OOPS"
    }

    // create array of length num
    // add 0 to position 0
    // add 1 to position 1
    const fibArr = [0, 1];

    // calculate remaining indices in loop based on previous two values
    // calculate fibonacci sequence upto num
    for (let i = 2 ; i <= num; i++){
        fibArr[i] = fibArr[i-1]+fibArr[i-2];
    }

    return fibArr[num];
};

// Do not edit below this line
module.exports = fibonacci;
