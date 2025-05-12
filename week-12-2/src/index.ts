// interface User {
//     name : string,
//     age : number,
//     email : string,
//     password : string
// }

// type updateProps = Pick<User , 'name' | 'age' | 'email' >

// type updatePropsOptional = Partial<updateProps>

// function updateUser(user : updatePropsOptional) {
//     console.log(`User name : ${user.name} , User Age : ${user.age} , User Email : ${user.email}`)
// }

// updateUser({name : "Aashir"})


// function sumOfAge(user1: User , user2 :User) {
//     return user1.age + user2.age;
// }

// const age = sumOfAge({name : "Aashir" , age : 22} , {name : "Zia" , age : 24});
// console.log(age);

// interface User {
//     readonly name : string;
//     age : number
// }

// const user : User = {
//     name : "Aashir",
//     age : 20
// }

// user.name = "Hero"

// console.log(user);


// ReadOnly

// type User = {
//     name : string,
//     readonly age : number
// }

// const user : User = {
//     name : "Aashir",
//     age : 20
// }

// user.name = "Zia"

// Record - lets you create cleaner objects

// type UsersAge = Record<string , {age : number , name : string}>

// const users : UsersAge = {
//     "1" : {
//         age : 22,
//         name : "Aashir"
//     },
//     "2" : {
//         age : 23,
//         name  : "Azeem"
//     }
//  }

type User = {
    name : string,
    age? : number
}

const user = new Map<string , User>();

user.set("abc" , {name : "Aashir" , age : 20} )
user.set("def" , {name : "Zia" } )

console.log(user.get("abc"));
