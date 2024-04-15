let string = "sujeet";
let letter = "e";

let len = string.length;

let count = 0;

for(let i = 0; i<len; i++){
    if(string[i]==letter){
        count++;
    }
}
console.log(`In String ${string} letter ${letter} appears : ${count} times`);