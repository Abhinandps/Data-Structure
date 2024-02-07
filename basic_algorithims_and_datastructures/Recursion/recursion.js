

// Indirect Recursion

// function odd(){
//     if(n<=10){
//      arr.push(n+1)
//      n++
//      even()
//     }
//     return
//    }
   
//    function even(){
//      if(n<=10){
//       arr.push(n-1)
//      n++
//      odd()
//     }
//     return
//    }
   
   
//    let arr=[]
//    let n=1;
//    odd()
//    console.log(arr)
   


// Tail Recursion

// function a(n){
//     if(n===0) return 
//     else
//         console.log(n);
//     return a(n-1)
// }

// a(5);


// Non Tail Recursion

// function a(n){
//     if(n === 0) return
//     else{
//         a(n-1)
//         console.log(n);
//     }
// }

// a(4)








// program to find factorial of a number

function fact(n){
    if(n===0) return 1
    else
        return n * fact(n-1)
}

let n=5;
console.log(`Factorial of ${n} is ${fact(n)}`);
