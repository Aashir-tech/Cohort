// const x: number = 1;

// console.log(x);

// Adding types to function
// function greet(firstName : String) {
//     console.log("Hello" , firstName )
// }

// greet("Aashir");

// type inference - hover over the function signature
// function sum(a : number , b:number) {
//     return a + b;
// }

// function sum(a : number , b:number):number {
//     return a + b;
// }

// Ts only checks type checking

// const ans = sum(1 , 2);
// console.log(ans);

// function isLegal(age:number):boolean {
//     if(age >= 18) {
//         return true
//     } else {
//         return false
//     }
// }

// const legal = isLegal(20);
// console.log(legal);

// How to give type to callback function
// When you pass a function to another function this is how you give type to the function
// This function takes nothing as a input and returns void as output
// function runAfterOneSec(fn : () => void) {
//     setTimeout(fn , 1000)
// }

// runAfterOneSec(function() {
//     console.log("Hello World")
// })

// One way to assign types to object
// function isLegal(user : {
//     firstName : string,
//     lastName : string,
//     age : number
// }) {
//     if(user.age > 18) {
//         return true;
//     } else {
//         return false;
//     }
// }

// Interfaces helps you in combining multiple fields at a single place
// interface User {
//     firstName : string,
//     lastName : string,
//     age : number
// }

// function isLegal(user : User) {
//     if(user.age > 18) {
//         return true;
//     } else {
//         return false;
//     }
// }

// isLegal({
//     firstName : "Aashir",
//     lastName : "Haris",
//     age : 21
// })

// We can implement interfaces as class

// Types let you aggretate data together and lets you do few other things like defining multiple types
// type greetArg = number | string ;

// // function greet( id : (string | number)) {

// // }

// function greet( id : greetArg) {

// }

// greet("hello");
// greet(1)

// It also lets you aggregate multiple properties of types and  interfaces
// If you want to create class that implements then you have to use interfaces

// How to add types to an arrays

// type numberArr = number[]
// // Or
// function maxValue(arr : number[]) {
//   let max = 0;

//   for (let i = 0; i < arr.length; i++) {
//     if(arr[i] > max) {
//         max = arr[i];
//     }
//   }

//   return max;

// }

// maxValue([1,2,3])

// type stringOrNumber = number | string

// function printId(id : stringOrNumber) {
//     console.log("ID" , id)
// }

// OR
// function printId(id : (string | number)) {
//         console.log("ID" , id)
// }

// printId("aashir");
// printId(1);

// type Employee = {
//     name: string;
//     startDate: Date;
//   };
  
//   type Manager = {
//     name: string;
//     department: string;
//   };
  
//   type techLead = Employee & Manager

//   const teamLead : techLead = {
//     name : "Aashir",
//     startDate : new Date(),
//     department : "Random"
//   }

// Arrays in Typescript

// function maxValue(arr: number[]) {
//     let max = 0;
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] > max) {
//             max = arr[i]
//         }
//     }
//     return max;
// }

// console.log(maxValue([1, 2, 3]));

// Enums 
// enum Direction {
//     Up,
//     Down,
//     Left,
//     Right
// }

// function doSomething(keyPressed : Direction) {
//     // Do Something
// }

// doSomething(Direction.Up);
// console.log(Direction.Down)

// function identity<T>(arg : T) : T {
//     return arg
// }

// let output1 = identity<string>("Aashir")
// let output2 = identity<number>(1);
// output1.toLowerCase()