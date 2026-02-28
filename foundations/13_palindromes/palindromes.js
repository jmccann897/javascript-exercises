const palindromes = function (s) {
    let noPunct = s.replace(/[^\w\s\']|_/g, "");
    let lower = noPunct.toLowerCase();
    let trimmedString = lower.trim();

    let noSpaces = trimmedString.replace(/\s/g, "");
    
    console.log("no spaces", noSpaces);

    let reversedString = noSpaces.split("").reverse().join("");

    console.log("reversed", reversedString);

    let isPalindrome = false; // default to false

    if(noSpaces == reversedString){
        isPalindrome = true;
    }

    return isPalindrome;
};

// Do not edit below this line
module.exports = palindromes;
