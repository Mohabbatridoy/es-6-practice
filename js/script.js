//var, let and const 

//let and const(ES-6)

//arraw function
// let getSquare = num => num*num;
// // let getSquare = num => {return num*num};
// console.log(getSquare(4))


//callback
let numbers = [1,2,3,4,5];
// let printAll = item => console.log(item);
numbers.forEach(item => console.log(item));

// let getSquare = item => item*item;

let forMap = numbers.map(item => item*item);
console.log(forMap);

// function printt(){
//     console.log(numbers);
// }
// numbers.forEach(printt);