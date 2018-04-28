'use strict';

var add = function add(a, b) {
    console.log(arguments); //No more allowed in ES6
    return a + b;
};
console.log(add(55, 1));

var addArrow = function addArrow(a, b) {
    return a + b;
};

//this keyword = no longer bound in Arrow function.

var user = {
    name: 'John',
    cities: ['Sydney', 'Perth', 'Darwin'],
    printPlacesLived: function printPlacesLived() {
        var _this = this;

        return this.cities.map(function (city) {
            return _this.name + ' has lived in ' + city;
        });
    }
};
console.log(user.printPlacesLived());

var multiplier = {
    numbers: [10, 20, 30],
    multiplyBy: 3,
    multiply: function multiply() {
        var _this2 = this;

        return this.numbers.map(function (number) {
            return number * _this2.multiplyBy;
        });
    }
};
console.log(multiplier.multiply());
