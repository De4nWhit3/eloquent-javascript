// function range(start, end){
//     let arr = [];

//     for(let i = start; i <= end; i++){
//         arr.push(i);
//     }

//     return arr;
// }

function range(start, end, step=1){
    let arr = [];
    let iterations = Math.abs(end - start);

    for(let i = 0, value=start; i <= iterations; i++, value+=step){
        arr.push(value);
    }

    return arr;
}

function sum(numbers){
    let total = 0;

    for(let number of numbers){
        total += number;
    }

    return total;
}

console.log(range(1, 10));
console.log(range(5, 2, -1));
console.log(sum(range(1, 10)));
