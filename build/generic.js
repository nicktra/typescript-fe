"use strict";
function getData(value) {
    return value;
}
console.log(getData("Nicktra").length);
console.log(getData(123).length);
// Generic
function myData(value) {
    return value;
}
console.log(myData("Nicktra").length);
console.log(myData(123));
var arrowFunc = function (value) {
};
