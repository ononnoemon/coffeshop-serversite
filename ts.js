// let msg='Hello World!'
// console.log(msg)

// function add(num1:number,num2:number):number{
//     return num1+num2
// }

// //console.log('summation is ',add(3,4))

// const sum=(x:number,y:number):number=>x+y;
// //console.log('summation is ',sum(3,4))

// const user={
//     name:'Emon',
//     balance:10,
//     addBalance(amount:number):string{
//         return`your balance is ${this.balance+amount}`
//     }
// }
// //console.log(user.addBalance(4))

// const arry1:number[]=[2,4,6]
// //console.log(arry1.map((element:number):number=>element*element))


// //spreed and rest operator

// //spreed
// const mentors1:string[]=['x','y','z']
// const mentors2:string[]=['p','q','r']
// const newMentors:string[]=[...mentors1,...mentors2]
// console.log(newMentors)

// //rest
// const addUsers=(...user:string[])=>{
//     user.forEach((element:string) => {
//        console.log(`user list is ${element}`) 
//     })
// }
// //console.log(addUsers('abul','babul','cabul','dabul','ebul'))


// // Type alias concept

// //object type alias 
// type StudentData={
//     name:string,
//     age:number,
//     class:number,
//     phone?:number
// }

// const student01:StudentData={
//     name:'abul',
//     age:20,
//     class:5,
//     phone:17772344
// }
// const student02:StudentData={
//     name:'abul',
//     age:20,
//     class:5,
//     phone:1777
// }
// const student03:StudentData={
//     name:'abul',
//     age:20,
//     class:5,
//     phone:1777
// }
// console.log(student01,student02,student03)


// //function type alias
// type Add=(x:number,y:number)=>number
// const getSum:Add=(x,y)=>x+y;

// type UserName=string
// type isTure=boolean

// const userName:UserName='Abdul Malek'
// const isMarrid:isTure=true
// //total benifit for object sometimes it benifit for function
// // Primitives
// let a: string = "text";
// let b: number = 123;
// let c: boolean = true;
// let d: any = "anything";

// // Array
// let arr1: string[] = ["a", "b"];
// let arr2: number[] = [1, 2, 3];
// let arr3: (string | number)[] = [1, "x"];

// // Object
// let obj: { name: string; age?: number } = { name: "Onon" };

// // Type alias
// type User = { name: string; age: number };
// let u: User = { name: "Onon", age: 30 };

// // Interface
// interface Product { title: string; price: number }
// let p: Product = { title: "Book", price: 100 };


// // 1. Basic
// function f(): void {}

// // 2. Params + Return
// function add(a: number, b: number): number { return a + b; }

// // 3. Optional + Default
// function info(name: string, age?: number): void {}
// function hi(name: string = "Guest") {}

// // 4. Arrow
// const mult = (x: number, y: number): number => x * y;

// // 5. Object param
// function show(user: { name: string; age: number }) {}

// // 6. Rest
// function sum(...nums: number[]): number { return nums.reduce(...) }

// // 7. Callback
// function run(fn: (msg: string) => void) { fn("hi"); }

// // 8. Return a function
// function makeAdder(x: number): (y: number) => number { ... }

// // 9. Generic
// function id<T>(arg: T): T { return arg; }


// console.log('Hello World!')

// interface options{
//     height:number,
//     width:number
// }

// function Shape(parameters:options){
//     let height=parameters.height
//     let width=parameters.width
//     return height*width
// }
// let parameters={
//     height:20,
//     width:3
// }
// console.log(Shape(parameters))

// interface isPlayer{
//     name:string;
//     age:number;
//     country:string;
//     play():void
// }

// class User implements isPlayer{
//     name: string;
//     country: string;
//     fname:string;
//     lname:string;
//     age:number

//     constructor(first:string,last:string,age:number){
//         this.fname=first,
//         this.lname=last,
//         this.age=age
//     }
//     fullName():string{
//         return `${this.fname} ${this.lname} `
//     }
//     play(): void {
//         console.log('Played')
//     }
// }

// const a=new User('abul','Hasan',20)
// console.log(a)

