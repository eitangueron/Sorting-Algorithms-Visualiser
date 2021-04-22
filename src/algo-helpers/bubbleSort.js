//recives an unsorted ints arr and sortes it using bubble sort algorhtim
const bubbleSort = (arr) => {
    const arrLen = arr.length
    let sorted = false
    for (let i = 0; i < arrLen; i++) {
        if (sorted) {
            return {sortedArr:arr,motions:motions}      //template for main
        } else {
            sorted = true
        }
        for (let j = 0; j < arrLen-i -1; j++) {
            motions.push({bar1Index:j, bar2Index:j+1})      //amination
            let swapped = false
            if (arr[j] > arr[j + 1]) {
                swap(j,j+1,arr)
                swapped = true
                sorted = false
            }
            motions.push({bar1Index:j, bar2Index:j+1,swapped:swapped})  //amination
        }
    }
}

const swap = (i, j, arr) => {
    let temp = arr[j]
    arr[j] = arr[i]
    arr[i] = temp
}

export default bubbleSort;

//tester:
// console.log(bubbleSort([2,65,23,43,2222,33,25,3]))