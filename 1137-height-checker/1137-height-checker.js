/**
 * @param {number[]} heights
 * @return {number}
 */
var heightChecker = function(heights) {
    let expected = [];

    // 1,1,4,2,1,3
    heights.forEach((height, i)=> expected[i] = height);
    // 1,1,1,2,3,4
    expected.sort((a,b)=> a - b);
    let indices = 0;

    expected.forEach((height, i)=>{
        if(height !== heights[i]){
            indices++;
        }
    })
    return indices;
};