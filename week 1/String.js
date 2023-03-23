

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


