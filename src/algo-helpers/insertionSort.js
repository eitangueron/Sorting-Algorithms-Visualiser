// export default bubbleSort
const insertionSort = (unSortedArr) => {
    const motions = []
    // {bar1:"",bar2:"",swapped:true}
    const arr = [...unSortedArr]
    for(let i=0; i<arr.length; i++){
        for(let j=i+1; j<arr.length; j++){
            motions.push({bar1Index:i, bar2Index:j})
            let swapped=false
            if(arr[i] > arr[j]){
                swapped = true
                let temp = arr[i]
                arr[i]=arr[j]
                arr[j]=temp
            }
            motions.push({bar1Index:i, bar2Index:j,swapped:swapped})
        }
    }
    return {sortedArr:arr,motions:motions}
}

export default insertionSort;

// console.log( insertionSort([2,5,4,3,4,55,66,111,3332,4,3]) )