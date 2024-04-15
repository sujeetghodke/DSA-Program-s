// var number = 7;

// if (number == 1 ){
//     console.log(`${number} is not a prime number nor composite`);
// }
// else if(number < 1){
//     console.log(`${number} this number is not a prime number `);
// }
// else{
//     for(var i=2; i<number; i++){
//         if(number % i == 0 ){
//             var res = `${number} is not a prime number`;
//             break;
//         }
//         else{
//             var res = `${number} is a prime number`;
//         }
//     }
//     console.log(res);
// }

function isPrime(n){
    if(n<2){
        return false;
    }
    for(let i=2; i<=Math.sqrt(n); i++){
        if(n%i===0){
            return false;
        }
    }
    return true;
}
console.log(isPrime(23))

// let a=Math.sqrt(5);
// console.log(a);