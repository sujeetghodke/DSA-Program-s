// let num = 4;
// for (let i = 1 ; i<11; i++){
//     let res = num * i;
//     console.log(`${num} X ${i} = ${res}`);
// }

// let num = 4;
// let res;
// function table(n){
//     if(n>10){
//         return;
//     }
//     res = num * n;
//     console.log(num+" X "+n+" = "+res);
//     n++;
//     table(n) 
// }
// table(1)


function table(num){
    for(let i=1; i<11; i++){
        let res = num * i;
        console.log(`${num} X ${i} = ${res}`);
    }
}
table(9)