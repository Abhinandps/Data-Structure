


function findMissingNumber(arr){
    let n = arr.length + 1 // total number of elements
    let sum = ( n * (n+1)) /2 // sum of elements in the original sequence
    let arrSum = 0 // sum of array elements
    for(let i=0; i<arr.length; i++){
        arrSum+=arr[i]
    }
    return sum - arrSum
}

// let missingNumber  =findMissingNumber([3,2,1,4,6])
// console.log('Missing number is : ' + missingNumber); // Missing number is : 5


function missingNumber(arr) {
    let hash = {};
    let number;
    
    for (let i = 0; i < arr.length; i++) {
      hash[arr[i]] = true;
    }
  
    for (let i = 1; i <= arr.length; i++) {
      if (hash[i] === undefined) {
        number = i;
        break;
      }
    }
    
    return number;
  }
  

//   let arr = [3, 2, 4, 6, 1];
//   console.log(missingNumber(arr)); // Output: 5
  
//   let arr2 = [1,2,4];
//   console.log(missingNumber(arr2)); // Output: 3
  


