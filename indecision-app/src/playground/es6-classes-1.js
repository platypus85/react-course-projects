class Person {
    constructor(name = 'Anonymous', age = 0){
        this.name = name;
        this.age = age;
    }
    getGreeting(){
        //return 'Hi, I am ' + this.name + '!';
        return `Hi, my name is ${this.name}!`
    }
    getDescription(){
        return `${this.name} is ${this.age} years old.`
    }
}

const john = new Person('John Doe', 45);
//console.log(john.getGreeting());
console.log(john.getDescription());

const other = new Person();
console.log(other.getGreeting());
//console.log(other.getDescription());