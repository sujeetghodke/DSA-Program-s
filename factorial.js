// var num = 9;
// var fact = 1;
// if(num == 0){
//     console.log(`factorial of 0 is 1`);
// }
// else if(num < 1){
//     console.log(`there is no factorial for negative number `);
// }
// else{
//     for(let i = 1; i <= num; i++){
//         fact = fact * i; 
//     }
//     console.log(`factorial of ${num} is ${fact}`);
// }

// var num = 4;
// var fact = 1;

// function factorial(n){
//     if(n>num){
//         return;
//     }
//     fact = fact * n;
//     n++
//     factorial(n);
    
// }
// factorial(1)
// console.log(fact)

// using recursion method

// let num = 5;
// let fact = 1;

// function factorial(n){
//     if(n>num){
//         return;
//     }
//     fact = fact * n;
//     n++;
//     factorial(n);
// }
// factorial(1)
// console.log("factorial of 5 is : "+fact)


let n = 5;
let fact = 1;
for(let i = 1; i<=n; i++){
    fact = fact * i;
    console.log(fact)
}
console.log(fact)
