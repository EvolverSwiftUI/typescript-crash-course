"use strict";
// Basic Types
let id = 5;
let salary = 12000.86;
let organization = "okSiva.com";
let isPublished = true;
let x = 24;
x = true;
x = "hello";
// Array
let ids = [1, 2, 3, 4, 5, 6];
// ids.push('hello') ===> throws error as type compatablity isPublished
let arr = [1, true, 'hello'];
// Tuple
let person = [1, "Siva", true];
// Array of Tuple
let employees;
employees = [
    [1, "jhon"],
    [2, "jill"],
    [3, "Brad"],
];
// Union
let productId;
productId = '22';
productId = 22;
// Enum
// enum with numbers
var Directions1;
(function (Directions1) {
    Directions1[Directions1["Up"] = 1] = "Up";
    Directions1[Directions1["Down"] = 2] = "Down";
    Directions1[Directions1["Right"] = 3] = "Right";
    Directions1[Directions1["Left"] = 4] = "Left";
})(Directions1 || (Directions1 = {}));
console.log(Directions1.Up);
// enum with strings
var Directions2;
(function (Directions2) {
    Directions2["Up"] = "UP";
    Directions2["Down"] = "DOWN";
    Directions2["Right"] = "RIGHT";
    Directions2["Left"] = "LEFT";
})(Directions2 || (Directions2 = {}));
console.log(Directions1.Up);
// Objects
// 1st way
let user = {
    id: 1,
    name: 'siva'
};
console.log(user);
let emp = {
    id: 1,
    name: 'Vignesh'
};
console.log(emp);
// Type Assertion
let cid = 1;
// let customerId = <number>cid
let customerId = cid;
// Functions
function addNum(x, y) {
    return x + y;
}
console.log(addNum(1, 5));
// Void returned Function
function logMsg(message) {
    console.log(message);
}
logMsg('hello');
logMsg(87);
const user2 = {
    id: 1,
    name: 'Sivaram',
    // age: 28,
};
const p = 4;
const add = (x, y) => x + y;
const sub = (x, y) => x - y;
console.log(add(1, 5));
console.log(sub(1, 5));
// Classes
class Person {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    register() {
        return `${this.name} is now registered.`;
    }
}
const siva = new Person(1, 'Siva');
const vignesh = new Person(2, 'Vignesh');
console.log(siva, vignesh);
console.log(siva.register());
// Subclasses
class Employee extends Person {
    constructor(id, name, position) {
        super(id, name);
        this.position = position;
    }
}
const emp1 = new Employee(3, 'Ram', 'Developer');
console.log(emp1.name);
console.log(emp1.register());
// Generics
function getArray(items) {
    return new Array().concat(items);
}
let numArray = getArray([1, 2, 3, 4, 5]);
let strArray = getArray(['hello', 'good', 'all']);
numArray.push(7);
strArray.push('goal');
