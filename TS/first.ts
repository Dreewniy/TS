// //tipi danix

// let username : string = "Sargis";
// let age : number = 18;
// let isStudent : boolean = true;

// console.log(username, age, isStudent);

// masivi

// let skills: number[] = [1,2,3,4];
// console.log(skills);

// obyect

// let users: {name: string; age: number; isStudent: boolean;} = {
//     name: "Sargis",
//     age: 18,
//     isStudent: true
// }

//new object 

// type Users = {
//     name: string,
//     age: number,
//     skills: string[]
// }

// let user: Users = {
//     name: "Sargis",
//     age: 18,
//     skills: ["Html", "css", "javascript"]
// }
// console.log(user);

//functions

// let username:string = "Sargis"
// function users(name: string): string{
//     return `Hello, ${name}`;
// }

// console.log(users(username));


// function showNumber(a:number, b:number){
//     return a+b;
// }
// console.log(showNumber(3,4));

// interface users{
//     name: string,
//     age: number
// }

// function Users(User:users){
//     console.log(`${User.name} Is ${User.age} years old`)
// }

// let Sargis: users = {name: "Sargis", age: 18}
// Users(Sargis);

// type users = {
//     name: string,
//     age: number,
//     skills: string[];
// }

// let Users:users[] = [
//     {name: "Sargis", age: 18, skills: ["HTML", "CSS", "JavaScript"]},
//     {name: "Join", age: 20, skills: ["HTML", "CSS"]},
//     {name: "Max", age: 22, skills: ["HTML"]},
// ]

// function nameAge(User: users){
//     console.log(`${User.name} is ${User.age} years old.`);
// }

// function nameSkills(User: users){
//     console.log(`${User.name}`);
//     for(let skill of User.skills){
//         console.log(skill);
//     }
// }

// for(let allOfThem of Users){
//     nameAge(allOfThem),
//     nameSkills(allOfThem),
//     console.log("------");
// }

// type users = {
//     name: string,
//     age: number,
//     skills: string[]
// }

// let Users:users[] = [
//     {name: "Sargis", age: 16, skills: ["Html", "Css", "Javascript"]},
//     {name: "Join", age: 20, skills: ["Html", "Css"]},
//     {name: "Max", age: 22, skills: ["Html"]}
// ]

// function nameAge(User:users){
//     if(User.age > 18){
//         console.log(`${User.name} is ${User.age} years old`);
//     }
// }

// for(let allNameAge of Users){
//     if(allNameAge.age > 18){
//         console.log(allNameAge);   
//     }
// }

// function ourSkill(skill:users){
//     console.log(`"Skills", ${skill.skills}`)
// }

// for(let allNameAgeSkill of Users){
//     nameAge(allNameAgeSkill),
//     ourSkill(allNameAgeSkill),
//     console.log("----");
// }

//Students

// type Students = {
//     name: string,
//     age: number,
//     averageGrade: number,
//     skills: string[],
// }

// let Student:Students[] = [
//     {name: "Sargis", age: 18, averageGrade: 9, skills:["Html", "Css", "Javascript"]},
//     {name: "Max", age: 20, averageGrade: 7, skills:["Html", "Css"]},
//     {name: "Levon", age: 22, averageGrade: 10, skills:["Html"]}
// ]

// function showStudentInfo(Users:Students){
//     if(Users.age > 18){
//     console.log(`${Users.name} is ${Users.age} years old`)
//     console.log(`Skills, ${Users.skills}`)
//     console.log(`averageGrade, ${Users.averageGrade}`)
//     }
// }
// for(let user of Student){
//     showStudentInfo(user)
//     console.log("-----")
// }

//Union Types
//1
// let data: string | number;
// data = 5;
// data = "Sargis";
// if(typeof data === "string"){
//     console.log("String")
// }else{
//     console.log("Number")
// }
//2
// type Users = {
//     name: string;
//     role: "admin" | "user";
// }
// function checkRole(user:Users){
//     if(user.role === "admin"){
//         console.log("Hi Admin")
//     }else{
//         console.log("Hi User")
//     }
// }

// let Sargis:Users = {name: "Sargis", role: "admin"};
// let Max:Users = {name: "Max", role: "user"};
// checkRole(Sargis)
// checkRole(Max)
//3
//     type ResponseData = {
//         success: boolean;
//         data?: string;
//         error?: string;
//     }

//     let ResponseDatas:ResponseData[] = [
//     { success: true, data: "Loaded successfully" },
//     { success: false, error: "Something went wrong" }
//     ]
// function handleResponse(Users:ResponseData){
//     if(Users.success === true){
//         console.log(Users.data)
//     }else {
//         console.log(Users.error)
//     }
// }

// for(let allUser of ResponseDatas){
//     handleResponse(allUser);
// }

// type Users = {
//      name: string,
//     age: number,
//     Skills: string[]
// }

// let AllUser:Users[] = [
//     {name: "Sargis", age: 18, Skills:["Html", "Css", "Javascript"]},
//     {name: "Max", age: 16, Skills:["Html", "Css"]},
//     {name: "Vzgo", age: 20, Skills:["Html"]}
// ]

// function AllOfThem(showUser:Users){
//     if(showUser.age > 17){
//         console.log(`${showUser.name} is ${showUser.age} years old`);
//         console.log(`Skills ${showUser.Skills}`);
//     }
// }

// for(let ChekUsers of AllUser){
//     AllOfThem(ChekUsers);
//     console.log("----")
// }

//GENERIC TYPES

// function showValue<T>(value:T){
//     console.log(value)
// }

// showValue(5);
// showValue("Sargis");

// function showArray<T>(array:T[]){
//     return array[0];
// }

// console.log(showArray([1,2,3,4]));
// console.log(showArray([{name: "Sargis", age: 17}, {name: "Max", age: 18}]));

//ALL HOMEWORKS

// function sum(a:number, b:number) {
//   return a + b;
// }

// console.log(sum(1,2));

// type User = {
//     UserStatus: 'active' | 'inactive' | 'banned';
// }

// interface User {
//     name: string
//     age: number
//     isAdmin?: boolean
// }

// let Users:User = {
//     name: "Sargis",
//     age: 17,
//     isAdmin: true
// }
// console.log(Users);

//Genirc types

// function wrapValue<T>(value:T){
//     return value;
// }

// console.log(wrapValue(42));
// console.log(wrapValue("Sargis"));

// function arrays<T>(arr:T){
//     return arr[0];
// }

// console.log(arrays([1,2,3,4]));
// console.log(arrays(["a","b","c"]));

// interface ApiResponse<T>{
//   data: T,
//   success: boolean,
//   error?: string
// }

// interface User{
//     name:string,
//     age:number,
// }

// interface Product{
//   id: number;
//   title: string;
//   price: number;
// }

// const userResponse:ApiResponse<User> = {
//     data:{name:"Sargis", age:18},
//     success: true,
// }

// const productResponse:ApiResponse<Product> = {
//     data:{id:1, title: "Ipad", price: 2000},
//     success: true,
// }
// console.log(productResponse.data);
// console.log(userResponse.data);


//PROMISE TS
// const promise:Promise<string> = new Promise((resolve,reject) =>{
//     setTimeout(() =>{
//         resolve("Hello World")
//     },1000)
// })

// promise
// .then((data) =>{
//     console.log(data)
// })

// .catch((err) =>{
//     console.log(err)
// })

// interface User {
//   name: string;
//   age: number;
// }

// const users: User[] = [
//   { name: "Sargis", age: 18 },
//   { name: "Max", age: 20 },
//   { name: "Anna", age: 16 }
// ];

// function getUserByName(name:string):Promise<User>{
//     return new Promise((resolve,reject) =>{
//         let result = users.find(num => num.name === name)
//         if(result){
//             setTimeout(() =>{
//                 resolve(result);
//             },1000)
//         }else{
//             setTimeout(() =>{
//                 reject("User not found")
//             },1000)
//         }
//     })
// }

// getUserByName("Sargis")
// .then((data) =>{
//     console.log(data)
// })
// .catch((err) =>{
//     console.log(err)
// })