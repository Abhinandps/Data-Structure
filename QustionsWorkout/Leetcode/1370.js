/*
1370. Increasing Decreasing String

Input: s = "aaaabbbbcccc"
Output: "abccbaabccba"

*/




const s = "aaaabbbbcccc"

function sortString(s){
    const hashMap = {}
    let output = '';

    for(let i=0; i<s.length; i++){
        const code = s.charCodeAt(i);
        if(!hashMap[code]){
            hashMap[code] = 1;
        }else{
            hashMap[code]++;
        }
    }

    const temp = Object.entries(hashMap)

    let cursor = 0;
    let direction = 1;

    while(output.length < s.length){
        console.log(temp);
        console.log(temp[cursor][0], "charCode");
        output += String.fromCharCode(temp[cursor][0]);
        if(temp[cursor][1] > 1){
            temp[cursor][1]--;
        }else{
            temp.splice(cursor, 1);
            cursor = cursor + (direction === 1 ? -1 : 0);
        }
        cursor += direction;
        if(cursor === -1 || cursor === temp.length){
            direction = -direction;
            cursor += direction;
        }
        
    }
    return output;
    
}

sortString(s)