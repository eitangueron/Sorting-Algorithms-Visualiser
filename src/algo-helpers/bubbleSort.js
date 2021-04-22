// export default bubbleSort
//recives an unsorted ints arr and sortes it using bubble sort algorhtim
const bubbleSort = (arr) => {
    const motions = []
    // {bar1:"",bar2:"",swapped:true}
    const arrLen = arr.length
    let sorted = false
    for (let i = 0; i < arrLen; i++) {
        if (sorted) {
            // console.log(arr)
            return {sortedArr:arr,motions:motions}
        } else {
            sorted = true
        }
        for (let j = 0; j < arrLen-i -1; j++) {
            motions.push({bar1Index:j, bar2Index:j+1})
            let swapped = false
            if (arr[j] > arr[j + 1]) {
                swap(j,j+1,arr)
                swapped = true
                sorted = false
            }
            motions.push({bar1Index:j, bar2Index:j+1,swapped:swapped})
        }
    }
}

const swap = (i, j, arr) => {
    let temp = arr[j]
    arr[j] = arr[i]
    arr[i] = temp
}

export default bubbleSort;

console.log(bubbleSort([2,65,23,43,2222,33,25,3]))