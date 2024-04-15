// let a = 0, b = 1;
// console.log(a);
// console.log(b);
// for(let i = 0 ; i<9; i++){
//     let temp = a + b;
//     console.log(temp);
//     a = b;
//     b = temp;
// }



// let n = 4;

// let a = 0;
// console.log(a)
// let b = 1;
// console.log(b)

// for (let i = 0; i<4; i++){
//     let temp = a + b;
//     console.log(i," : ",temp);
//     a = b;
//     b = temp;
// }


function fibonacci(n){
    const fib = [0,1];
    for(let i=2; i<n; i++){
        fib[i] = fib[i-1] + fib[i-2]; 
    }
    return fib;
}

console.log(fibonacci(2));
console.log(fibonacci(3));
console.log(fibonacci(7));