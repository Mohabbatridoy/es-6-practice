//var, let and const 

//let and const(ES-6)

//arraw function
// let getSquare = num => num*num;
// // let getSquare = num => {return num*num};
// console.log(getSquare(4))


//callback
// let numbers = [1,2,3,4,5];
// // let printAll = item => console.log(item);
// numbers.forEach(item => console.log(item));

// // let getSquare = item => item*item;

// let forMap = numbers.map(item => item*item);
// console.log(forMap);

// function printt(){
//     console.log(numbers);
// }
// numbers.forEach(printt);


//array distructing: 
// let fruits = ['apple', 'mango', 'banana'];
// let [fruit1,, fruit2] = fruits;
// console.log(fruit1, fruit2);

// let numbers = [1,5,3,5,23,22,54,34];
// let [n1,n2,n3,n4,n5,,,n8]= numbers;
// console.log(n8);

// //swapping: 
// let a = 8;
// let b = 20;
// console.log(`before swap: a = ${a} and b = ${b}`);
// [a,b] = [b,a];
// console.log(`After swap: a = ${a} and b = ${b}`);


// object Destructing: 
// let person = {
//     firstName : 'Mohabbat',
//     lastName : 'Riody',
//     dob : '28-06-2001'
// }


// // fname = person.firstName;
// // lNmae = person.lastName;
// // dob = person.dob;

// // destructing:
// // let {firstName:fname,lastName:lname,dob} = person;

// // console.log(fname,lname,dob);

// let display = ({firstName: fname,lastName:lname,dob}) => {
//     console.log(fname,lname,dob);
// }

// display(person);


//Spread operator

// let str = 'Mohabbat'
// let newstr = [...str];
// console.log(newstr);

// // spread operator for array
// let fruit1 = ["apple","banana", "Mango"];
// let fruit2 = ["Orange","Grape"];
// let newFruit = [...fruit1,...fruit2];
// console.log(newFruit);


// //spread operator for Object:

// let person = {
//     fname: "Mohabbt",
//     lname: "Hossain"
// }

// let newPerson = {...person, dob:'12131'};
// console.log(newPerson);




//sspread (...) operator as a parameter of function:

// let numbers = [23,1,0,-1];

// console.log(Math.min(...numbers));

// let person = {
//     fname : "mohabbt",
//     lname : "ridoy",
//     // dob : "28"
// }

// let person = ["mohabat","riody"]

// let display = (fname,lname) => {
//     console.log(`Hello ${fname} ${lname}`);
// }

// display(...person);




// //Rest operator ... : 
// let fruits1 = ["apple","banana", "Mango"];
// let name = "Mohabbat Hossain Riody";

// let test = (name,fruit1, ...fruits) =>{
//     console.log(`name= ${name}. first fruit = ${fruit1}. Others fruits= ${fruits}.`);
// }

// test(name,...fruits1,fruits1);



//Symbols 
// let iterable = "Hello";
// iterable = [1,2,3,4,5,6,7];

// let iter = iterable[Symbol.iterator]();

// console.log(iter);

// console.log(iter.next());
// console.log(iter.next());
// console.log(iter.next());
// console.log(iter.next());
// console.log(iter.next());
// console.log(iter.next());

// let names = ["Mohabbt","Ridoy","Hossain"];

// function customIterator(arr){
//     let i =0;

//     return{
//         next: function (){
//             return i < arr.length ? {value : arr[i++] , done: false}:{value: undefined, done: true};
//         }
//     }
// }

// let members = customIterator(names);

// console.log(members.next());
// console.log(members.next());
// console.log(members.next());
// console.log(members.next());


// //generator: 
// function* genFunction(){
//     yield 1;
//     yield "Mohabbat";
//     console.log("this is after 2 yield");
//     yield "riody";
// }

// let iter = genFunction();

// console.log(iter.next());
// console.log(iter.next());
// console.log(iter.next());
// console.log(iter.next());


//promises:

// let prom = new Promise((resolve, reject)=>{
//     setTimeout(() => {
//         let a;
//         a = 1+1;
//         if(a == 2){
//             resolve('Success');
//         }
//         else{
//             reject('Failed');
//         }
//     }, 4000);
// })
// //.then and .catch
// prom.then((message) => {
//     console.log("I am from then", + message);
// }).catch((message) => {
//     console.log("I am from catch", + message);
// })


// console.log("I am after promise But print before promise because promise code is late.")


//async and await:
fetch('http://api.icndb.com/jokes/random/5000')
    .then(response => response.json())
    .then(data => console.log(data));