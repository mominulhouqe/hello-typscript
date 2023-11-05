// learning function

// 2 doroner function ache
/* 
1.Noraml function
2.arrow function
*/

// Normal function define
function add(num1: number, num2: number) {
    return num1 + num2
}
add(2, 5);

// arrow function define
const addNumber = (num1:number,num2:number):number => num1 + num2;


// object -->function --> method

const myBalance = {
    name: 'Mominul',
    balance: 0,
    addBalance(balance: number): string {
        return `My balance is = ${this.balance + balance}`;
    }
}