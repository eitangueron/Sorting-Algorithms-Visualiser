//recives an unsorted ints arr and sortes it using bubble sort algorhtim
const motions = []

const mergeSort = (arr) => {
    const mid = arr.length/2
    if(arr.length < 2 ){ return arr}
    const left = arr.splice(0,mid)
    return merge(mergeSort(left), mergeSort(arr))
}

const merge = (left, right) => {
    const mergedArr = []
    while(left.length && right.length){
        if(left[0] < right[0]){
            mergedArr.push(left.shift())
        } else {
            mergedArr.push(right.shift()) 
        }
    }
    return [...mergedArr, ...left, ...right]
}

// return {sortedArr:arr,motions:motions}      //template for main
// motions.push({bar1Index:j, bar2Index:j+1})      //amination
// motions.push({bar1Index:j, bar2Index:j+1,swapped:swapped})  //amination

// export default mergeSort;

//tester:
console.log(mergeSort([2,65,23,43,2222,33,25,3]))