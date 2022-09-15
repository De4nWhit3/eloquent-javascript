function everyVersion1(array, predicate){
    for(let element of array){
        if(!predicate(element)) return false;
    }
    return true;
}

function everyVersion2(array, predicate){
    return !array.some(element => !predicate(element));
}

console.log(everyVersion2([1, 3, 5], n => n < 10));
console.log(everyVersion2([2, 4, 16], n => n < 10));
console.log(everyVersion2([], n => n < 10));