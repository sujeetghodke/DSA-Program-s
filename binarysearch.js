// function binarySearch(arr,trg){
//     let leftIdx = 0;
//     let rightIdx = arr.length-1

//     while(leftIdx <= rightIdx){
//         let  midIdx = Math.floor((leftIdx + rightIdx)/2) //0+7  3.5 = 3 //4+7/2=5 //6+7/2=7.5 7

//         if(trg === arr[midIdx]){
//             return midIdx;
//         }
//         else if(trg < arr[midIdx]){  
//             rightIdx = midIdx - 1  //3-1 = 2
//         }
//         else{
//             leftIdx = midIdx + 1  //3+1 = 4 //5+1=6
//         }
//     }
//     return -1;
// }

// console.log(binarySearch([-5,2,4,6,10],6)) //3
// console.log(binarySearch([-5,2,4,6,10],2)) //1
// console.log(binarySearch([-5,2,4,6,10],10)) //4
// console.log(binarySearch([-5,2,4,6,10],60)) //-1
// console.log("******************************") 
// console.log(binarySearch([-5,2,4,6,10,12,15,17],15)) //6
// console.log(binarySearch([-5,2,4,6,10,12,15,17],4))  //2
// console.log(binarySearch([-5,2,4,6,10,12,15,17],17)) //7









// function binarySearch(arr,trg){
//     let lidx = 0;
//     let Ridx = arr.length-1;

//     while(lidx <= Ridx){
//         let Midx = Math.floor((lidx + Ridx)/2)

//         if(trg === arr[Midx]){
//             return Midx
//         }
//         else if(trg < arr[Midx]){
//             Ridx = Midx - 1
//         }
//         else{
//             lidx = Midx + 1
//         }
//     }
//     return -1;
// }


// console.log(binarySearch([-5,2,4,6,10],6)) //3
// console.log(binarySearch([-5,2,4,6,10],2)) //1
// console.log(binarySearch([-5,2,4,6,10],10)) //4
// console.log(binarySearch([-5,2,4,6,10],60)) //-1
// console.log("******************************") 
// console.log(binarySearch([-5,2,4,6,10,12,15,17],15)) //6
// console.log(binarySearch([-5,2,4,6,10,12,15,17],-5))  //0
// console.log(binarySearch([-5,2,4,6,10,12,15,17],17)) //7


// //binary Search Recursive

// function binarySearch(arr,trg){
//     return search(arr,trg,0,arr.length-1)
// }

// function search(arr,trg,lidx,ridx){
    
//     if(lidx > ridx){
//         return -1
//     }

//     let midx = Math.floor((lidx+ridx)/2)

//     if(trg === arr[midx]){
//         return midx
//     }
//     else if(trg < arr[midx]){
//         return search(arr,trg,lidx,midx-1)
//     }
//     else{
//         return search(arr,trg,midx+1,ridx)
//     }
// }

// console.log(binarySearch([-5,2,4,6,10],6)) //3
// console.log(binarySearch([-5,2,4,6,10],2)) //1
// console.log(binarySearch([-5,2,4,6,10],10)) //4
// console.log(binarySearch([-5,2,4,6,10],1)) //-1
// console.log("******************************") 
// console.log(binarySearch([-5,2,4,6,10,12,15,17],15)) //6
// console.log(binarySearch([-5,2,4,6,10,12,15,17],-5))  //0
// console.log(binarySearch([-5,2,4,6,10,12,15,17],17)) //7


function binarySearch(arr,trg){
    return search(arr,trg,0,arr.length-1)
}
function search(arr,trg,lidx,ridx)
{
    if(lidx > ridx){
        return -1
    }

    let midx = Math.floor((lidx+ridx)/2)

    if(trg === arr[midx]){
        return midx
    }
    else if(trg < arr[midx]){
        return search(arr,trg,lidx,midx-1)
    }
    else{
        return search(arr,trg,midx+1,ridx)
    }
}


console.log(binarySearch([-5,2,4,6,10],6)) //3
console.log(binarySearch([-5,2,4,6,10],2)) //1
console.log(binarySearch([-5,2,4,6,10],10)) //4
console.log(binarySearch([-5,2,4,6,10],1)) //-1
console.log("******************************") 
console.log(binarySearch([-5,2,4,6,10,12,15,17],15)) //6
console.log(binarySearch([-5,2,4,6,10,12,15,17],-5))  //0
console.log(binarySearch([-5,2,4,6,10,12,15,17],17)) //7