/**
 * @param {number[]} heights
 * @return {number}
 */
var heightChecker = function(heights) {
    let ans =0;
    const sorted = heights.slice().sort((a,b) => a - b);
    for(let i = 0; i < heights.length ; i++){
        if(sorted[i] !== heights[i]){
            ans++;
        }
    }
    return ans;
};