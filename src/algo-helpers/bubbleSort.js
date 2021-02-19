// export default bubbleSort
const bubbleSort = (unSortedArr) => {
    const motions = []
    // {bar1:"",bar2:"",swapped:true}
    const arr = [...unSortedArr]
    for(let i=0; i<arr.length; i++){
        for(let j=i+1; j<arr.length; j++){
            let swapped=false
            if(arr[i] > arr[j]){
                swapped = true
                let temp = arr[i]
                arr[i]=arr[j]
                arr[j]=temp
            }
            motions.push({bar1:arr[i], bar2:arr[j],swap:swapped})
        }
    }
    return {arr:arr,motions:motions}
}

export default bubbleSort;

// console.log( bubbleSort([2,5,4,3,4,55,66,111,3332,4,3]) )