
{

// Nullable Types Example /unknwon types

// We define a function called 'searchName' that takes a parameter 'value' with a type of 'string | null'.
// This means that 'value' can be a string or null.

const searchName = (value: string | null) => {
    if (value) {
        // Inside the function, we check if 'value' is truthy (not null or undefined).
        // If 'value' is truthy, we log "Searching" to the console.
        console.log("Searching");
    } else {
        // If 'value' is null or undefined, we log "There is no data" to the console.
        console.log("There is no data");
    }
}

// We call the 'searchName' function with 'null' as an argument.
// Since we're passing 'null', the function will log "There is no data" to the console.

searchName(null);


// unknown types
// bobisot ea type ta kemn hobe seta nirdaron korte parbo unkonwn type er maddome


let userInput: unknown;
let userName: string;

userInput = 5;
userInput = "John";

// We must check and narrow down the type before assigning it to userName.
if (typeof userInput === "string") {
    userName = userInput; // This is valid now.
}

// never type
function throwError(message: string): never {
    throw new Error(message);
}

throwError("An error occurred"); // This function never returns, it throws an error.



}