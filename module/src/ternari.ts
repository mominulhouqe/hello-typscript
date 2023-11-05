// import { log } from "console";



// {
//     // 


//     const age: number = 13;
//     if (age >= 18) {

//         console.log("adult");

//     }
//     else {
//         // console.log("not adult");

//     }

//     // ternari operator
//     const isAdult = age >= 18 ? "adult" : "not adult"
//     // console.log("he is really ",isAdult);



//     // nullish operator
//     // when i used it ,when value is null /or undifined/or descion making

//     const isAuthenticate = null;
//     const result1 = isAuthenticate ?? "guest";
//     console.log("result1", { result1 });


//     // amra nullish value tokon ei use korbo jokon false value takbe like, null,undifiend.only ei null,and undifined ei nullish value kaz kore 
//     const isAuthenticates = "";
//     const result2 = isAuthenticates ? isAuthenticates : "guest";
//     console.log("result2", { result2 });

//     // ternari operator sob jaygay kaz korbe,mane empty string,false,null,undifined er ketre



// }

{
// We have a variable 'age' set to 13
const age = 13;

// We check if 'age' is greater than or equal to 18
if (age >= 18) {
    console.log("The person is an adult.");
} else {
    console.log("The person is not an adult.");
}

// We use a ternary operator to decide if the person is an adult or not
const isAdult = age >= 18 ? "adult" : "not adult";
console.log("Using the ternary operator: The person is " + isAdult);

// Now, we introduce the nullish coalescing operator to provide a default value
// only when the value is null or undefined. In this case, 'isAuthenticate' is null.
const isAuthenticate = null;
const result1 = isAuthenticate ?? "guest";
console.log("Using the nullish coalescing operator: Result 1 is " + result1);

// In this case, the nullish coalescing operator returns "guest" because 'isAuthenticate' is null.

// We also use the nullish coalescing operator with a non-nullish value.
const isAuthenticates = "";
const result2 = isAuthenticates ?? "guest";
console.log("Using the nullish coalescing operator with a non-nullish value: Result 2 is " + result2);

// Here, the nullish coalescing operator returns an empty string because 'isAuthenticates' is not null or undefined.

// Lastly, we use the ternary operator with an empty string and it behaves differently.
const emptyString = "";
const result3 = emptyString ? emptyString : "guest";
console.log("Using the ternary operator: Result 3 is " + result3);

// The ternary operator returns an empty string because it treats an empty string as a 'truthy' value.
}