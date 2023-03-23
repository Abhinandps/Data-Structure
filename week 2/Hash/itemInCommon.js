
function itemInCommon(arr1, arr2) {

    let obj = {}

    for (let i = 0; i < arr1.length; i++) {
        obj[arr1[i]] = true
    }

    for (let i = 0; i < arr2.length; i++) {
        if (obj[arr2[i]]) return obj[arr2[i]]
    }

    return false
}

const arr1 = [1, 2, 3]
const arr2 = [4, 5, 3]

console.log(itemInCommon(arr1, arr2));


