// export default bubbleSort
const selectionSort = (unSortedArr) => {
    const motions = []
    // {bar1:"",bar2:"",swapped:true}
    const arr = [...unSortedArr]
    for(let i=0; i<arr.length; i++){
        let min = arr[i]
        for(let j=i+1; j<arr.length; j++){
            motions.push({bar1Index:i, bar2Index:j})
            let swapped=false
            if(arr[j] < min){
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

// export default selectionSort;

console.log( selectionSort([2,5,4,3,4,55,66,111,3332,4,3]) )