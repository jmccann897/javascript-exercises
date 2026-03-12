const getAge = function(birth, death){
    if(!death){
        death = new Date().getFullYear(); 
    }
    return death - birth;
};

const findTheOldest = function(people) {

    const ages = [];
    people.forEach(person => {
        if (!person.yearOfBirth)
        {
            console.log("in if check- birth:", person.yearOfBirth);
            ages.push(0);

        }
        else 
        {
            ages.push(getAge(person.yearOfBirth, person.yearOfDeath));
        }
    });

    const oldestInd = ages.indexOf(Math.max(...ages));
    const oldestPerson = people[oldestInd];
    return oldestPerson;
};

// Do not edit below this line
module.exports = findTheOldest;
