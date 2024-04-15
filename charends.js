let string = "sujeet Ghodke"

let start = string.startsWith('s');
let end = string.endsWith('e');

// console.log(`${string} : ${start} & ${end}`);

if(start == true && end == true){
    console.log(`The string "${string}" starts with s and ends with e`);
}else if(start == true && end == false){
    console.log(`string starts with s`);
}
else if(start == false && end == true){
    console.log(`string ends with e`);
}
else{
    console.log("string not start with s neither ends with e");
}