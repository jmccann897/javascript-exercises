const sumAll = function( num1, num2) {

    // neg check
    if( num1 < 0 || num2 < 0 ){
        return "ERROR";
    }

    // non num check
    if( typeof(num1) != "number" || typeof(num2) != "number"){
        return "ERROR";
    }

    // int check
    if( parseInt(num1) != num1 || parseInt(num2) != num2){
        return "ERROR";
    }

    let min = Math.min(num1, num2);
    let max = Math.max(num1, num2);
    let sum=0;

    for (let i = min; i <= max; i++){
        sum += i;
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
