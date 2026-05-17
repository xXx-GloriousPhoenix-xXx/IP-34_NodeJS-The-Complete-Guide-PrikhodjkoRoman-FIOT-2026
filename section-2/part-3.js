const name = 'Roman';
let age = 20;
const hasHobbies = true;

age = 30;

const summarizeUser = (userName, userAge, userHasHobby) => {
    return (
        'Name is ' +
        userName +
        ', age is ' +
        userAge +
        ' and the user has hobbies: ' +
        userHasHobby
    );
};

const addRandom = () => 1 + 2;

console.log(addRandom());

console.log(summarizeUser(name, age, hasHobbies));
