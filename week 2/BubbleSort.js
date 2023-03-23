

const arr = [2,5,1,4]
for(let i=0;i<arr.length-1; i++){
    let flag = 0;
    for(let j=0; j<arr.length-1-i; j++){
        if(arr[j]>arr[j+1]){
            let temp = arr[j]
            arr[j]=arr[j+1]
            arr[j+1]=temp
            flag=1
        }
    }
    if(flag==0) break
}


console.log(arr);