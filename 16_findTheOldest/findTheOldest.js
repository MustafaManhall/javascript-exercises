function getAge(death, birth) {
    if (!death) {
        death = new Date().getFullYear();
    }
    return death - birth;
}

const findTheOldest = function (people) {
    return people.reduce((pre, curr) => {
        let preAge = getAge(pre.yearOfDeath, pre.yearOfBirth);
        let currAge = getAge(
            curr.yearOfDeath,
            curr.yearOfBirth
        );

        return preAge < currAge ? curr : pre;
    });
};

// Do not edit below this line
module.exports = findTheOldest;
