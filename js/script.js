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
let fruits = ['apple', 'mango', 'banana'];
let [fruit1,, fruit2] = fruits;
console.log(fruit1, fruit2);

let numbers = [1,5,3,5,23,22,54,34];
let [n1,n2,n3,n4,n5,,,n8]= numbers;
console.log(n8);