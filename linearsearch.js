function LinearS(arr,trg){
    for(i=0; i<arr.length; i++){
        if(arr[i]===trg){
            return i;
        }
    }
    return -1
}

console.log(LinearS([54,25,65,45,85,95,75],45))  //3
console.log(LinearS([54,25,65,45,85,95,75],85))  //4
console.log(LinearS([54,25,65,45,85,95,75],75))  //6
console.log(LinearS([54,25,65,45,85,95,75],450))  //-1