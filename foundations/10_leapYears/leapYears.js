const leapYears = function(year) {
    let leap = false; // default to false

    // div by 4&&not by 100 OR div by 100&&400 == leap

    // div by 100 != leap 


    if (year%4 == 0 && year%100 != 0 || year%100 ==0 && year%400 == 0){
        leap = true;
    }

    return leap;
};

// Do not edit below this line
module.exports = leapYears;
