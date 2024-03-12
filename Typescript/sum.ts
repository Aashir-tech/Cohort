// function sum(a:number , b :number) {
//     return a + b;
// }

//The output js file which typescript compiler can create, the output file changes based on
// this configuration parameter of tsconfig.json file

// let x = sum(1,2)
// console.log(x)

// interface Person {
//     name: string;
//     age : number
// }

// function greet(person: Person) : string {
//     return "Hello Mr " + person.name + " glad that you are " + person.age + " years old "
// }


// // function agePrint(person : Person) : string {
// //     return "You are " + person.age + " years old "
// // }

// console.log(greet({
//     name:  "Aashir",
//     age : 21
// }))

// interface PersonInterface {
//     name : string,
//     age : number
//     greet() :string;
// }

// class Person implements PersonInterface {
//     name: string;
//     age : number;

//     constructor(name : string , age: number) {
//         this.name = name,
//         this.age = age
//     }

//     greet() {
//         return "hi mr " + this.name 
//     }
// }

// const personObject = new Person("Aashir",21)
// console.log(personObject.greet());

//One interface can use another interface too
// interface PersonGenderProperties {
//     gender : string;
//     orientation : string;
//     pronouns : string;
// }


// interface PersonInterface {
//     name : string;
//     age : number;
//     genderProps : PersonGenderProperties
// }

// function greet(person : PersonInterface) {

// }

// console.log(greet({
//     name : "Aashir" ,
//     age: 21,
//     genderProps : {
//         gender : "Male",
//         orientation : "Straight" ,
//         pronouns : "he/him"
//     }
// }))

// INterfaces can extend interfaces

// interface PersonGenderProperties {
//     gender : string;
//     orientation : string;
//     pronouns : string;
// }


// interface PersonInterface extends PersonGenderProperties{
//     name : string;
//     age : number;
// }

// interface AnimalInterface extends PersonGenderProperties{
//     name : string;
//     furType : string
// }

// Interfaces :- One way to combined data like this and do bunch of things

// Type lets you do same thing but not support some extra features which interface provides 
// But it can have subproperties or children
// type PersonInterface = {
//     name : string;
//     age : number;
// }

// function greet(person : PersonInterface) {
//     return "Hi mr " + person.name + " your age is " + person.age
// }

// console.log(greet({
//     name: "Aashir",
//     age : 21
// }))


interface Circle {
    radius : number;
}

interface Square {
    side : number;
}

interface Rectangle {
    width : number;
    height: number;
}

//types let you do unions and ors
type Shape = Rectangle | Square | Circle;

function renderShape(shape : Shape) {
    console.log("Rendered");
    
}

function calculateArea(shape : Shape) {
    console.log("Calculated area")
}