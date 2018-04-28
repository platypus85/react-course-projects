var nameVar = 'AL';
var nameVar = 'AL';
console.log('nameVar', nameVar);

let nameLet = 'Jeff';
nameLet = 'John';
console.log('nameLet', nameLet);

const nameConst = 'Frank';
console.log('nameConst', nameConst);

// Block scoping
const fullName = 'Jane Doe';
let firstName;
if (fullName) {
    firstName = fullName.split(' ')[0];
    console.log(firstName);
}

console.log(firstName);