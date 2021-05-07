// recives an unsorted ints arr and sortes it using bubble sort algorhtim 
// returns an obbject with the sorted array and the animations commands for the visualiztation

const bubbleSort = (arr) => {
    const animations = []
    let sorted = false
    const len = arr.length
    for (let i = 0; i < len; i++) {
        if (sorted) {
            return {
                sortedArr: arr,
                animations: animations
            }
        }
        sorted = true
        for (let j = 0; j < len - i - 1; j++) {
            animations.push([j, j + 1]) //indexes compared - marking
            animations.push([j, j + 1]) //indexes compared - unmarking
            let swapped = false
            if (arr[j] > arr[j + 1]) {
                swap(arr, j, j + 1)
                sorted = false
                swapped = true
            }
            animations.push([j, j + 1, swapped]) //indexes compared - swapping values if true
        }
    }
}

const swap = (arr, i, j) => {
    let temp = arr[j]
    arr[j] = arr[i]
    arr[i] = temp
}

export default bubbleSort;

//tester:
console.log(bubbleSort([2,65,23,43,2222,33,25,3]))