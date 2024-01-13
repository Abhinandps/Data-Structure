// Sum of Series

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