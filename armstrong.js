// let num = "153";
// let temp = num;
// let dig = num.length;
// let sum = 0;

// while(temp>0){
//      console.log("Temp num : "+temp);
//     let rem = temp % 10;            
//      console.log("Digit : ",dig);
//     sum = sum + rem**dig; 
//      console.log("Cube of digit : ",dig**dig);
//      console.log("Sum of num : "+sum); 
//     temp = parseInt(temp/10);
//      console.log(" new temp : "+temp)
//      console.log("******************************************")
//     }

// if(sum == num){
//     console.log(`${num} is an Armstrong number `);
// }else{
//     console.log(`${num} is not an Armstrong number `);
// }


let num = "1523"
let temp = num;
let len = num.length;
let sum = 0;

while(temp > 0){
    var  rem = temp % 10;
    sum = sum + rem**len;
    temp = parseInt(temp/10);
}

if(num == sum){
    console.log("Given number is armstrong");
}
else
    console.log("Given number NOT is armstrong");