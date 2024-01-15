// prefix sum algorithm function 
// it takes array as an input
const prefixSum = (array) => {
    // initialize result empty list
    // it will store the prefix sum 
    let result = [];
    // this varable keeps track of the cumulative sum
    let sumSoFar = 0;
    // iterate through array
    for (let i = 0; i < array.length; i++) {
        // update cumulative sum
        sumSoFar += array[i];
        // add cumulative sum to the result
        result.push(sumSoFar);
    }
    // return prefix sum
    return result;
}
