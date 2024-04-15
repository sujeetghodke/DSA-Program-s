
// function sum(n){
//     if(n>0){
//         return n + sum(n-1); 
//     }
//     else{
//         return n;
//     }
// }

// let res = sum(5);

// console.log(res);

// let num = 5;
// let sum = 0;

// for(let i=1; i<=num; i++){
//     sum = sum + i; 
// }
// console.log(`sum of natural number upto ${num} is ${sum} `);

let num = 5;
let sum = 0;

function sumofnum(n){
    if(n>num){
        return;
    }
    sum = sum + n;
    n++
    sumofnum(n)
}

sumofnum(1)
console.log(sum);