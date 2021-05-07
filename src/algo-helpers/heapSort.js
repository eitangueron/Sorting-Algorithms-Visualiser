// recives an unsorted ints arr and sortes it using heap sort algorhtim 
// returns an obbject with the sorted array and the animations commands for the visualiztation

const heapSort = (arr) => {
    const animations = []
    buildMaxHeap(arr,animations)
    let heapSize = arr.length
    for (let i = arr.length - 1; i > 0; i--) {
        animations.push([0,i]) //indexes compared - marking
        animations.push([0,i]) //indexes compared - unmarking
        animations.push([0, i,true])    //indexes compared - swapping values if true
        swap(arr, 0, i)
        heapSize--
        heapifyDown(arr, 0, heapSize,animations)
    }
    return {
        sortedArr: arr,
        animations: animations
    }
}

const buildMaxHeap = (arr,animations) => {
    const startIndex = Math.floor(arr.length / 2) // heapifying all non leaf nodes 
    for (let i = startIndex; i >= 0; i--) {
        heapifyDown(arr, i, arr.length,animations)
    }
}

const heapifyDown = (arr, i, heapSize,animations) => {
    let maxIndex = i
    let leftChildIndex = i * 2 + 1
    let rightChildIndex = i * 2 + 2
    if (leftChildIndex < heapSize && arr[leftChildIndex] > arr[maxIndex]) {
        maxIndex = leftChildIndex
    }
    if (rightChildIndex < heapSize && arr[rightChildIndex] > arr[maxIndex]) {
        maxIndex = rightChildIndex
    }
    animations.push([maxIndex,i]) 
    animations.push([maxIndex,i]) 
    if (maxIndex !== i) {
        swap(arr, i, maxIndex)
        animations.push([maxIndex, i,true])    
        heapifyDown(arr, maxIndex, heapSize,animations)
    } else {
        animations.push([maxIndex, i,false])    
    }
}

const swap = (arr, i, j) => {
    let temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
}

export default heapSort;

//tester:
const testArr = [2, 65, 23, 43, 222, 33, 25, 3]
console.log(
    heapSort(testArr))
// console.log(testArr)