

// function convert(roman){
//     const romanValues = {
//         I:1,
//         V:5,
//         X:10,
//         L:50,
//         C:100,
//         D:500,
//         M:1000
//     }

//     let result = 0

//     for(let i=0; i<roman.length; i++){
//         let curr = romanValues[roman.charAt(i)];
//         let next = romanValues[roman.charAt(i+1)];

//         if(next && next > curr){
//             result += next - curr 
//             i++
//         }
//         else{
//             result += curr
//         }
//     }

//     console.log(result);

   
// }

// convert("CLI");




// Program 2


// function change(str,key){
//     let newKey = key % 26
//     let newArr=[]

//     for(let i = 0; i<str.length; i++){
//         letterPosition = str.charCodeAt(i) + newKey
//         if(letterPosition <= 122){
//             let char = String.fromCharCode(letterPosition)
//             newArr.push(char)
//         }
//         else{
//             let char = String.fromCharCode(96+letterPosition%122)
//             newArr.push(char)
//         }
//     }
//     return newArr
// }

// let str = "Hello"
// console.log("Input String : "+str);
// let result = change(str,3)

// console.log(`Array : ${result}\nString : ${result.join('')}`);



// Problem 3

// function isValid(s){
    
//     const pairs = {

//         '(':')',
//         '{':'}',
//         '[':']'

//     }

//     let newArr = []
//     for(let i=0; i<s.length; i++){

//         let c = s.charAt(i);

//         if(pairs[c]){
//             newArr.push(c)
//         }
//         else if(pairs[newArr[newArr.length - 1]]===c){
//             newArr.pop()
//         }
//         else{
//             return false
//         }
//     }
//     return newArr.length === 0
// }

// console.log(isValid('([])'));






// Problem 4


// function mergeTwoArray(arr1,arr2){
//     if (arr1.length === 0) {
//         return arr2;
//       }
      
//       if (arr2.length === 0) {
//         return arr1;
//       }
      
//     if(arr1[0] < arr2[0]){
//         return [arr1[0], ...mergeTwoArray(arr1.slice(1),arr2)]
//     }
//     else{
//         return [arr2[0], ...mergeTwoArray(arr1, arr2.slice(1))]
//     }
// }


// console.log(mergeTwoArray([1,3,4],[1,2,4]));




// Write a JavaScript program to find the sum of all even numbers in an array.

// function findSum(arr){
//   let sum=0;
//   arr.forEach(v=>v%2===0 ? sum= sum+ v : undefined)
//   console.log(`sum is ${sum}`);
// }

// findSum([1,3,4,5,6,7,8])




// Output 

// sum is 18





// Write a JavaScript program to reverse an array in place (i.e., without creating a new array).


// function reverseArray(arr){
//   return arr.reverse()
// }

// console.log(reverseArray([1,2,3,4,5]));

// output

// [5,4,3,2,1]



// Write a JavaScript program to find the smallest and largest numbers in an array

function findNumber(arr){
  arr.sort((a,b)=>a-b)
  let smallest = arr[0];
  let largest = arr[arr.length-1]
  console.log(` Largest is  ${ largest }.  Smallest is ${smallest}`);
}

findNumber([30,20,111,0])


// output
// Largest is  111.  Smallest is 0


// Palindrome
//============


// 1. Method (ITERATION)

// function that takes string as an argument
// return true (it's palindrome), false (not palindrome)
const palindrome1 = (str) => {
  // initialize string size
  const strSize = str.length;
  // go through string untill the middle of string is reached
  for (let i = 0; i < Math.floor(strSize / 2); i++) {
    // compare the first character with the last character
    // compare second character with the second to last and so on..
    if (str[i] !== str[strSize - i - 1]) {
      //  if any pair of characters is found to be different
      // string is not palindrome
      return false;
    }
  }
  // otherwise it's palindrome
  return true;
}


// 2. Method (BUILT-IN FUNCTIONS)

const palindrome2 = (str) => {
  const reversedString = str.split("").reverse().join("");
  return str === reversedString
}


// 3. Method (TWO POINTERS)

const palindrome3 = (str) => {
  // left pointer at first index
  // right pointer at last index
  let left = 0;
  let right = str.length - 1;
  // keep going through until they meet each other
  while (left <= right) {
    // if at any moment character at left index 
    // happens not to be equal to character at right index
    // it's not palindrome 
    if (str[left] !== str[right]) {
      return false;
    }
    // shift pointers
    left++;
    right--;
  }
  // the opposite of if statement
  // it's palindrome
  return true;
}


// initialize input string
const str = "deified";
// run palindrome function 
const result = palindrome3(str);
console.log(result);
