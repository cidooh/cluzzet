export function getTotals(arr,prop){
    return getFilteredArray(arr,prop).reduce((acc, curr) => acc + curr.price, 0)
}