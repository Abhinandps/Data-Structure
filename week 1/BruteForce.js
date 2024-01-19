
// initialzie brute force algorithm function
// it takes array as an input  
const bruteForce = (array) => {
    // we assume that the first value is the max value from the array
    let maxValue = array[0]
    // go through all elements in the array except first element
    for (let i = 1; i < array.length; i++) {
        // if the current value is greater than max value before
        if (array[i] > maxValue) {
            // update max value
            maxValue = array[i];
        }
    }
    // return max value
    return maxValue;
}


// initialize new array
const newArray = [20, 50, 2, 321, 8, 121, 256, 133, 32]
// run brute force algorithm
const maxValue = bruteForce(newArray);

console.log(`Max value of this array is: ${maxValue}`); // 321