// Sum of Series
// =================
/*

Write a program to find the sum of the given series 1+2+3+ . . . . . .(N terms) 

Example 1:

Input:
N = 1
Output: 1
Explanation: For n = 1, sum will be 1.
Example 2:

Input:
N = 5
Output: 15
Explanation: For n = 5, sum will be 15.
1 + 2 + 3 + 4 + 5 = 15.
*/

// output 

class Solution {
    seriesSum(n) {
       return (n * ( n+1 )/2 )
    }
} 

// Expected Time Complexity: O(1)
// Expected Auxiliary Space: O(1)

// ------------------------------------------------------------------

// Value equal to index value
// ===========================

/*

Given an array Arr of N positive integers. Your task is to find the elements whose value is equal to that of its index value ( Consider 1-based indexing ).

Note: There can be more than one element in the array which have the same value as its index. You need to include every such element's index. Follows 1-based indexing of the array.

Example 1:

Input:
N = 5
Arr[] = {15, 2, 45, 12, 7}
Output: 2
Explanation: Only Arr[2] = 2 exists here.

*/


class Solution{
    valueEqualToIndex(arr,n){
        const result = [];
        
        for(let i=1; i<=n;i++){
            if(arr[i - 1] === i){
                result.push(i);
            }
        }
        return result;
    }
}


// Expected Time Complexity: O(N)
// Expected Auxiliary Space: O(1)

// -------------------------------------------------

// Print alternate elements of an array
// ========================================


class Solution {
    print(arr,n){
        let result = ''
        for(let i=0; i<n; i += 2){
            result += arr[i] + ' ';
        }
        console.log(result.trim());
    }
  }

  
//   Input:
// N = 5
// A[] = {1, 2, 3, 4, 5}
// Output:
// 1 3 5

// Expected Time Complexity: O(n)
// Expected Auxiliary Space: O(1)

// -------------------------------------------------------

// Print 1 To N Without Loop
// ===============================


class Solution{
    constructor(){
        this.result = '';
    }
    
    printNos(N){
       this.printRecursive(1,N);
       console.log(this.result.trim());
    }
    
    printRecursive(start, end){
        if(start <= end){
            this.result += start + ' '
            this.printRecursive(start+1, end)
        }
    }
}

// ------------------------------------------------------------------

// Palindromic Array
// =========================


class Solution {
    
    constructor(){
         this.isPalindrom = true;
    }
    
     PalinArray(arr,n){

         for(let i=0; i<n; i++){
             
             let originalNumber = arr[i];
             let temp = originalNumber;
             let reversedNumber = 0;
             
             // reverse the number
             while(temp>0){
                 const digit = temp % 10;
                 reversedNumber = reversedNumber * 10 + digit 
                 temp = Math.floor(temp/10);
             }
             
             // check if the original number is equal to it's revers
             if(originalNumber !== reversedNumber){
                 this.isPalindrom = false;
                 break;
             }
         }
         
         // check if entire array element is palindrom then return 1
         if(this.isPalindrom){
             return 1
         }
         
         return 0
     }
 }


//  Time O(n*m) n - number of elements in Array. m - number of digits
//  Space O(1) constant amount of extra space regardless of the size of the input array.


// -------------------------------------------------------------------------

// Print the pattern | Set-1
// =========================

// For N = 3 the pattern will be 
// 3 3 3 2 2 2 1 1 1
// 3 3 2 2 1 1
// 3 2 1



class Solution {
    printPat(n){
        
      let result =''
      for (let i = n; i >= 1; i--) { 
          for (let j = n; j >= 1; j--) {
              for (let k = i; k >= 1; k--) { 
                  result += j +' '
              }
          }
          result+='$'
      }
      console.log(result)
    }
  }


//   TIME O(n^3)


