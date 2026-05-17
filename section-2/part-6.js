const person = {
    name: 'Roman',
    age: 20,
    greet() {
        console.log('Hi, I am ' + this.name);
    }
};

const hobbies = ['Chess', 'Anime'];
hobbies.push('Programming');
console.log(hobbies);
