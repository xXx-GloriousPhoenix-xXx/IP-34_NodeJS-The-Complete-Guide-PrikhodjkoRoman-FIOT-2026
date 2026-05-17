const person = {
    name: 'Roman',
    age: 20,
    greet() {
        console.log('Hi, I am ' + this.name);
    }
};

const copiedPerson = { ...person };
console.log(copiedPerson);

const hobbies = ['Chess', 'Anime'];
const copiedArray = [...hobbies];
console.log(copiedArray);

const toArray = (...args) => {
    return args;
};

console.log(toArray(1, 2, 3, 4));
