const add = function(a, b) {
	return a+b;
};

const subtract = function(a, b) {
	return a-b;
};

const sum = function(nums) {
  let toReturn = 0;
	nums.forEach(element => {
      toReturn += element;
  });
  return toReturn;
};

const multiply = function(nums) {
  let toReturn = 1;
	nums.forEach(element => {
      toReturn *= element;
  });
  return toReturn;
};

const power = function(base, power) {
  return base**power;
};

const factorial = function(num) {
	
  // 0
  if (num===0) {
    console.log("inside the num===0 if block");
    return 1;
  }
  // >=1
  let toReturn=1;
  for (let i = num; i > 0; i--){
    console.log("inside the for block");
    toReturn*=i;
    console.log("toReturn", toReturn);
  }
  return toReturn;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
