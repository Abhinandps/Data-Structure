

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

// JavaScript program for recursive implementation of Bubble Sort using console.log

function bubbleSort(arr, n) {
    // Base case
    if (n == 1)
        return;

    let count = 0;

    // One pass of bubble sort
    for (let i = 0; i < n - 1; i++) {
        if (arr[i] > arr[i + 1]) {
            // Swap arr[i] and arr[i+1]
            let temp = arr[i];
            arr[i] = arr[i + 1];
            arr[i + 1] = temp;
            count++;
        }
    }

    // If no elements were swapped, the array is sorted
    if (count == 0)
        return;

    // Recursive call for remaining array
    bubbleSort(arr, n - 1);
}

// Driver code
let arr = [64, 34, 25, 12, 22, 11, 90];
bubbleSort(arr, arr.length);

console.log("Sorted array:");
console.log(arr.join(" "));
