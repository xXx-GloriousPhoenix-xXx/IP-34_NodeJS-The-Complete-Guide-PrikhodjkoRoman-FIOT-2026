const person = {
    name: 'Roman',
    age: 20,
    greet() {
        console.log('Hi, I am ' + this.name);
    }
};

const hobbies = ['Chess', 'Anime'];
console.log(hobbies.map(hobby => 'Hobby: ' + hobby));
console.log(hobbies);
