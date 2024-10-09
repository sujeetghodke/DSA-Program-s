// // let string = "sujeet ghodke";

// // const reg = /[aeiou]/gi

// // let check = string.match(reg);
// // console.log(check);
// // //console.log("string contain "+check.length+ " vowels");
// // console.log(`this string contains ${check.length} vowels`);
// // console.log(check.join(','));

// const vowels = ["a","e","i","o","u"];

// function countVowels(str){
//     let count = 0;
//     for(let letter of str.toLowerCase()){
//         if(vowels.includes(letter)){
//             count++;
//         }
//     }
//     return count;
// }

// let string = "Sujeet Ghodke";

// let result = countVowels(string);

// console.log(`"${string}" string  contains ${result} vowels`);

// const vowels = ['a','e','i','o','u'];

// function countvowels(str){
//     var count = 0;
//     for(let letter of str)
//     {
//         if(vowels.includes(letter)){
//             count++;
//         }
//     }
//     return count
// }

const vowels = ["a", "e", "i", "o", "u"];

function countVowels(str) {
  let count = 0;
  for (let letter of str) {
    if (vowels.includes(letter)) {
      count++;
    }
  }
  return count;
}

let string = "My name is Sujeet Ghodke";
let result = countVowels(string);
console.log("The vowels in the given string are : ", result);
