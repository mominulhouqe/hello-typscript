// learning function
// 2 doroner function ache
/*
1.Noraml function
2.arrow function
*/
// Normal function define
function add(num1, num2) {
    return num1 + num2;
}
add(2, 5);
// arrow function define
var addNumber = function (num1, num2) { return num1 + num2; };
// object -->function --> method
var myBalance = {
    name: 'Mominul',
    balance: 0,
    addBalance: function (balance) {
        return "My balance is = ".concat(this.balance + balance);
    }
};
// maping in ts
var arr = [34, 45, 32];
var newArray = arr.map(function (elem) { return elem * elem; });
console.log(newArray);
