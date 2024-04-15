function insertionSort(arr){
    for(let i=1; i<arr.length; i++){
        let numtoinsert = arr[i]
        let j = i-1
        while(j >= 0 && arr[j] > numtoinsert){
            arr[j+1] = arr[j]
            j = j-1
        }
        arr[j+1] = numtoinsert
    }
}

const arr = [-1,10,45,88,19,-88];
insertionSort(arr)
console.log(arr)