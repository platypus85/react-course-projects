const add = function (a, b) {
    console.log(arguments); //No more allowed in ES6
    return a + b;
};
console.log(add(55, 1));

const addArrow = (a, b) => {
    return a + b;
};

//this keyword = no longer bound in Arrow function.

const user = {
    name: 'John',
    cities: [
        'Sydney', 'Perth', 'Darwin'
    ],
    printPlacesLived() {

        return this
            .cities
            .map((city) => this.name + ' has lived in ' + city);
    }
};
console.log(user.printPlacesLived());

const multiplier = {
    numbers: [
        10, 20, 30
    ],
    multiplyBy: 3,
    multiply() {

        return this
            .numbers
            .map((number) => number * this.multiplyBy);
    }
}
console.log(multiplier.multiply());
