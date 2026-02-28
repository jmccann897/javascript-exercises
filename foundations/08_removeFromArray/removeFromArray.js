const removeFromArray = function(array1, ...args) {

    return array1.filter(x => !args.includes(x));
};

// Do not edit below this line
module.exports = removeFromArray;
