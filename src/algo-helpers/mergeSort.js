// recives an unsorted ints arr and sortes it using quick sort algorhtim 
// returns an obbject with the sorted array and the animations commands for the visualiztation

const mergeSort = (arr, l = 0, r = arr.length - 1, animations = []) => {
    if (l < r) {
        let m = Math.floor(l + (r - l) / 2)
        mergeSort(arr, l, m, animations)
        mergeSort(arr, m + 1, r, animations)
        merge(arr, l, m, r, animations)
    }
    return {
        sortedArr: arr,
        animations: animations
    }
}

const merge = (arr, l, m, r, animations) => {
    // temp arrays:
    const L = arr.slice(l, m + 1) //IMPORTANT - until M including! (divide correctly)
    const R = arr.slice(m + 1, r + 1)
    let k = l,
        i = 0,
        j = 0
    while (i < L.length && j < R.length) {
        animations.push([l + i, m + j]) //indexes compared - marking
        animations.push([l + i, m + j]) //indexes compared - unmarking
        if (L[i] <= R[j]) {
            arr[k] = L[i]
            animations.push([k, L[i]]) //commit change - [index, new value]
            i++
        } else {
            arr[k] = R[j]
            animations.push([k, R[j]])
            j++
        }
        k++
    }
    //copying the remaining data not checking which array is empty
    while (i < L.length) {
        animations.push([l + i, m + j])
        animations.push([l + i, m + j])
        animations.push([k, L[i]])
        arr[k] = L[i]
        i++
        k++
    }
    while (j < R.length) {
        animations.push([l + i, m + j])
        animations.push([l + i, m + j])
        animations.push([k, R[j]])
        arr[k] = R[j]
        j++
        k++
    }
}

export default mergeSort;

//tester:
// const testArr = [2, 65, 23, 43, 222, 33, 25, 3]
// console.log( mergeSort(testArr))