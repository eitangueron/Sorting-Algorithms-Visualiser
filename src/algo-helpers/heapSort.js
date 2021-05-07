//recives an unsorted ints arr and sortes it using bubble sort algorhtim
const animations = []

const heapSort = (arr) => {
    const startIndex = Math.floor(arr.legnth/2)     // heapfiny all non leaf nodes 
    for(let i=startIndex; i>=0; i--){
        heapify(arr,i)
    }
}

const heapify = (arr,index) => {
    
}


export default heapSort;

//tester:
const testArr = [2, 65, 23, 43, 222, 33, 25, 3]
console.log(
    heapSort(testArr))
// console.log(testArr)