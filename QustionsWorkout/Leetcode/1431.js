// 1431. Kids With the Greatest Number of Candies

// Input: candies = [2,3,5,1,3], extraCandies = 3
// Output: [true,true,true,false,true] 
// Explanation: If you give all extraCandies to:
// - Kid 1, they will have 2 + 3 = 5 candies, which is the greatest among the kids.
// - Kid 2, they will have 3 + 3 = 6 candies, which is the greatest among the kids.
// - Kid 3, they will have 5 + 3 = 8 candies, which is the greatest among the kids.
// - Kid 4, they will have 1 + 3 = 4 candies, which is not the greatest among the kids.
// - Kid 5, they will have 3 + 3 = 6 candies, which is the greatest among the kids.


/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */

var kidsWithCandies = function(candies, extraCandies) {
    let highest= candies[0];
    let array = []
    for(let i=1;i<candies.length;i++){
        if(highest < candies[i]){
            highest = candies[i]
        }
    }

    for(let i=0;i<candies.length;i++){
        if(candies[i]+extraCandies >= highest){
            array.push(true);
        }else{
            array.push(false)
        }
    }

    return array
};
