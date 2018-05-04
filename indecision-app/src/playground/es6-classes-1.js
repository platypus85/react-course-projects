class Person {
    constructor(name = 'Anonymous', age = 0){
        this.name = name;
        this.age = age;
    }
    getGreeting(){
        return `Hi, my name is ${this.name}!`
    }
    getDescription(){
        return `${this.name} is ${this.age} years old.`;
    }
}

class Student extends Person{
    constructor(name, age, major){
        super(name, age); //Calling parent class constructor
        this.major = major;
    }
    hasMajor(){
        return !!this.major;
    }
    getDescription(){
        let description = super.getDescription();
        if(this.hasMajor()){
            description += ` His major is: ${this.major}`;
        }
        return description;
    }
}

class Traveler extends Person{
    constructor(name, age, homeLocation){
        super(name, age); //Calling parent class constructor
        this.homeLocation = homeLocation;
    }
    getGreeting(){
        let greeting = super.getGreeting();
        if(this.homeLocation){
            greeting += ` I am visiting from ${this.homeLocation}`; 
        }
        return greeting;
    }
}

const john = new Traveler('John Doe', 45, 'Sydney');
console.log(john);
//console.log(john.hasMajor());
console.log(john.getGreeting());

const other = new Traveler();
console.log(other);
//console.log(other.hasMajor());
console.log(other.getGreeting());