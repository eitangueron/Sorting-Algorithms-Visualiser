//recives an unsorted ints arr and sortes it using bubble sort algorhtim
const animations = []

const mergeSort = (arr, l = 0, r = arr.length - 1) => {
    if (l < r) {
        let m = Math.floor(l + (r - l) / 2)
        mergeSort(arr, l, m)
        mergeSort(arr, m + 1, r)
        merge(arr, l, m, r)
    }
    return {
        sortedArr: arr,
        animations: animations
    }
}

const merge = (arr, l, m, r) => {
    const L = arr.slice(l, m + 1) //IMPORTANT - until M including! (divide correctly)
    const R = arr.slice(m + 1, r + 1)
    let k = l,
        i = 0,
        j = 0
    while (i < L.length && j < R.length) {
        animations.push([l+i,m+j]) //indexes compared - marking
        animations.push([l+i,m+j]) //indexes compared - unmarking
        if (L[i] <= R[j]) {
            arr[k] = L[i]
            animations.push([k,L[i]]) //commit change - [index, new value]
            i++
        } else {
            arr[k] = R[j]
            animations.push([k,R[j]]) //commit change - [index, new value]
            j++
        }
        k++
    }
    while (i < L.length) {
        animations.push([l+i,m+j]) //indexes compared - marking
        animations.push([l+i,m+j]) //indexes compared - unmarking
        animations.push([k,L[i]]) //commit change - [index, new value]
        arr[k] = L[i]
        i++
        k++
    }
    while (j < R.length) {
        animations.push([l+i,m+j]) //indexes compared - marking
        animations.push([l+i,m+j]) //indexes compared - unmarking
        animations.push([k,R[j]]) //commit change - [index, new value]
        arr[k] = R[j]           
        j++
        k++
    }
}

export default mergeSort;

//tester:
const testArr = [2, 65, 23, 43, 222, 33, 25, 3]
console.log(
    mergeSort(testArr))
// console.log(testArr)