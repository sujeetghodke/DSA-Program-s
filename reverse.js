let str = "sujeet";
let len = str.length;
let rev = "";
for (let i=len-1; i>=0; i--){
    rev = rev + str[i];
}
console.log(`${str} = ${rev}`)