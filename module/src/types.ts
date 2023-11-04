// Basic data type

//string

let firstName: string = "Mominul" //expresive data type
// number
let roll: number = 123
// boolen
let isAdmin = true
// undifined
let x: undefined = undefined
// null
let y: null = null

// anytype
let d: any;
d = 343;
d = 'mominul'
d = true;

//Array

let friends: string[] = ['Mominul', "Rajibur"]
let eligibleRoll: number[] = [243, 456, 546, 64]

// je type deleclare kore dibo only se type er data array te rakte parbo onno gula parbo na

eligibleRoll.push(5)
// console.log(eligibleRoll);

// Tuple -> array --> order-->type of value definend
let coordinate:[number,number] = [1,5]

let ageName: [number,string,boolean] =[50,'mominul',true];

ageName[0]=54
// how to use tuple