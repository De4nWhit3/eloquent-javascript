function reverseArray(oldArr){
    let newArr = [];

    for(let i = oldArr.length - 1; i >= 0; i--){
        newArr.push(oldArr[i]);
    }

    return newArr;
}

function reverseArrayInPlace(arr){
    let iterations = Math.ceil(arr.length/2);
    let length = arr.length - 1;

    for(let i = 0; i < iterations; i++){
        let tmp = arr[i];
        arr[i] = arr[length - i];
        arr[length - i] = tmp;
    }

    return arr;
}

let arr = [1,2,3,4,5,6,7,8,9,10];
// console.log(reverseArray(arr));
console.log(reverseArrayInPlace(arr));