const convertToCelsius = function(fahrenheit) {
  let toReturn = (fahrenheit-32)*(5/9);

  return Math.round(toReturn * 10) / 10;
};

const convertToFahrenheit = function(celsius) {
  let toReturn = (celsius*(9/5))+32;
  return Math.round(toReturn * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
