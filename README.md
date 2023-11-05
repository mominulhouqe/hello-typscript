
# My TypeScript Learning Journey

Welcome to my TypeScript learning journey! In this repository, I'm documenting my progress as I explore the world of TypeScript. This README serves as an introduction to the key steps I've taken and concepts I've learned so far.

## First Day
1. **NVM Installation**
   - I installed NVM (Node Version Manager) to manage my Node.js versions easily.

2. **Global Package Installation**
   - I used the following command to install the 'install' package globally:
     ```
     npm install -g install
     ```

3. **My First TypeScript Code**
   - I opened a folder in VS Code and created an `index.ts` file.
   - In that file, I wrote my very first TypeScript code:
     ```typescript
     let helloTs = "I am from TypeScript";
     ```

4. **Running TypeScript Code**
   - I ran my TypeScript code in the terminal using the command:
     ```
     node index.ts
     ```

5. **Initializing tsconfig.json**
   - To configure my TypeScript project, I ran the following command to create a `tsconfig.json` file:
     ```
     tsc --init
     ```

## Basic Data Types
- I learned about TypeScript's basic data types, which can be categorized into primitive types and non-primitive types.

   Primitive Types:
   1. number
   2. string
   3. boolean
   4. undefined
   5. symbol

   Non-Primitive Types:
   1. Array
   2. Tuple
   3. Object

## Question 1
- I explored the concept of TypeScript's types and whether we can access them at runtime. TypeScript types are not available at runtime, as TypeScript code is transpiled to JavaScript. TypeScript's type checking occurs during development to help us write reliable code.

## Understanding Defined Objects
- I learned how to declare objects in TypeScript, specifying their properties and their types.

   Example:
   ```typescript
   const user: {
       firstname: string;
       middleName?: string | undefined;
       lastName: string;
       company: 'phero'; // This is a literal type (if the value is fixed)
   } = {
       firstname: "momin",
       middleName: 'ul',
       lastName: 'houqe',
       company: 'phero'
   };
   ```

## Understanding Functions
- I explored two types of functions: arrow functions and normal functions.

   Example of a normal function:
   ```typescript
   const add = (num1: number, num2: number): number => num1 + num2;
   ```

   Example of an arrow function:
   ```typescript
   const add = (num1: number, num2: number): number => num1 + num2;
   ```

- I also learned about object declaration methods.

# TypeScript Operators and Control Flow Examples
- In this repository, you will find examples of TypeScript code that demonstrate the use of conditional statements, ternary operators, and the nullish coalescing operator.

   1. **Conditional Statements:** We check a person's age and use conditional statements to determine if they are an adult.

   2. **Ternary Operator:** We use a ternary operator to decide if a person is an adult based on their age.

   3. **Nullish Coalescing Operator:** We introduce the nullish coalescing operator to provide default values based on the presence of null or undefined values.

   4. **Comparison:** We compare the behavior of the ternary operator and the nullish coalescing operator.
   # typscript nullable value
   - In this code, we have a function searchName that takes a parameter value which can be either a string or null. Inside the function, we check if value is truthy (not null) and log "Searching" to the console. If value is null, we log "There is no data" to the console. When we call the function with searchName(null), it logs "There is no data" because we passed null as the argument.



### It's Bangla
## First-day
- 1. NVM Installing
- 2. `npm install -g install` 
- 3. open a folder. Write index.ts file ,in vs code editor. write your first typescript code --- ` let helloTs = "I am from typscript" `
- 4. Run terminal `node index.ts`  
- 5. run terminal ` tsc --init` to config your root-diroctory file.
## Basic data types
* Primitive typs and Non primitive typs
- 1. number           1. ->Array
- 2. string         2.-> typle
- 3. boolean        3. ->  object
- 4. undifiend
- 5. symbol 
# Question 1.
- **typescript er type gulu ki amra run time ea pabo?**
 **Ans:** --No. amra typscript run korbo na. karon hocce amra typscript ke compile kore javacript ea rupantor korbo and eta ke amra nodejs environment diye run korbo.thole amra javascript er type pabo kintu ts er type pabo na...
**Tahole typscript kibabe amader help kortece ?**
**Ans:** ->typscript ea jokon code korbo tokon code gula compile hobe tokon sekan teke type ta ke niye help korbe.as a developer hisebe jeno amra vul na kori.

## Undestand of defined objects 
-  Object declare 
// Refferance type .--> object

const user: {
    firstname: string;
    middleName?: string | undefined;
    lastName: string;
    company: 'phero'; //it will be type -->litterel type->if value will fixed
} = {

    firstname: "momin",
    middleName: 'ul',
    lastName: 'houqe',
    company:'phero'
}

## undustand of function

- 1. 2 type of function-->arrow function and normal function
- 2. Normal function declare ` const add(num1:number,num2:number):number{ return num1 + num2} add(2,3)`
- 3. Arrow function declare `const add(num1:number,num2:number):number=>num1+num2 `
- 4. Object declaration method-->
