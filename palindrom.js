// let string = "nitin";
// let len = string.length;
// console.log(string.length);
// let msg="This string is palindrom string";

// for(let i=0; i < len/2; i++){
//     console.log(string[i]);
//     console.log(string[len - 1 - i]);
//     console.log("*******************")
//     if(string[i] != string[len - 1 - i]){
//         msg = "This is not a palindrom string";
//     }
// }
// console.log(`${string} : ${msg}`);

let string = "maodam";
let arrstr = string.split("");
// console.log(arrstr);
let arrev = arrstr.reverse();
// console.log(arrev);
let revstr = arrev.join("");
// console.log(revstr);

if (string == revstr) {
  console.log("The given string is palindrom ");
} else {
  console.log("The given string is not palindrom ");
}

// let str = "nitin";
// let len = str.length;
// let msg = "This is palindrom";
// for(let i = 0 ; i<len/2; i++){
//     if(str[i] != str[len - 1 - i]){
//         msg = "This is not palindrom";
//     }
// }

// console.log(msg);
