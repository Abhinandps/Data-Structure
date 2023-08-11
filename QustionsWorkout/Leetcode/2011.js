/**
 *  Final Value of Variable After Performing Operations
 * @param {string[]} operations
 * @return {number}
 */
var finalValueAfterOperations = function(operations) {
    let finalValue=0
    for(const operation of operations){
        if(operation.includes('++')){
            finalValue+=1
        }else{
            finalValue-=1
        }
    }
    return finalValue
};