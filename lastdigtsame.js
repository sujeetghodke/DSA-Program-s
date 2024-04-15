let a = 24;
let b = 44;
let c = 84;

let rema = a%10;
let remb = b%10;
let remc = c%10;

if(rema==remb && rema==remc){
    console.log(`${a}, ${b} & ${c} are having same last digit ${rema}`);
}
else{
    console.log(`${a}, ${b} & ${c} are not having same last digit`);
}