"use strict";
// tipe data pada balikan function
function getName() {
    return "Hello, my name is Nicktra";
}
console.log(getName());
function getAge() {
    return 123;
}
function printName() {
    console.log("print name");
}
printName();
//////
function multiply(val1, val2) {
    return val1 * val2;
}
var result = multiply(2, 5);
console.log(result);
var Add = function (val1, val2) {
    return val1 + val2;
};
// default parameter
var fullName = function (first, last) {
    if (last === void 0) { last = "Handi"; }
    return first + " " + last;
};
console.log(fullName("Mark"));
// optional parameter
var getUmur = function (val1, val2) {
    return val1 + val2;
};
console.log(getUmur("Mark"));
