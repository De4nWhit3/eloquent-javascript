function countBs(input){
    return countChar(input, "B");
}


function countChar(input, char){
    let count = 0;

    for(let i = 0, length = input.length; i < length; i++){
        if(input[i] == char) count++;
    }

    return count;
}

console.log(countBs("BBC"));
console.log(countChar("kakkerlak", "k"));