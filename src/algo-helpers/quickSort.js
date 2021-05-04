//recives an unsorted ints arr and sortes it using bubble sort algorhtim
const animations = []

const quickSort = (arr, l = 0, r = arr.length - 1) => {
    if (l < r) {
        let p = partition(arr, l, r)
        quickSort(arr, l, p - 1)
        quickSort(arr, p + 1, r)
    }
    return {
        sortedArr: arr,
        animations: animations
    }
}

const partition = (arr, l, r) => {
    const pivot = arr[r]
    let k = l - 1
    for (let i = l; i < r; i++) {
        animations.push([i,r]) //indexes compared - marking
        animations.push([i,r]) //indexes compared - unmarking
        if (arr[i] < pivot) {
            k++
            swap(arr, k, i)
            animations.push([i,k,true]) //indexes compared - swapping
        } else {
            animations.push([i,i,false]) //indexes compared - swapping
        }
    }
    k++
    swap(arr, k, r)
    animations.push([k,r]) //indexes compared - marking
    animations.push([k,r]) //indexes compared - unmarking
    animations.push([k,r,true]) //indexes compared - swapping
    return k
}

const swap = (arr, i, j) => {
    let temp = arr[j]
    arr[j] = arr[i]
    arr[i] = temp
}

export default quickSort;

//tester:
const testArr = [2, 65, 23, 43, 222, 33, 25, 3]
console.log(quickSort(testArr))
// quickSort(testArr)
// console.log(testArr)