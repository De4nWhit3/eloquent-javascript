const isEven = (num) => {
    if(num < 0) num = -(num);

    let even = num % 2;
    if(even == 0) return true;
    else if(even == 1) return false;
    else return isEven(num - 2);
}

console.log(isEven(50));
console.log(isEven(75));
console.log(isEven(-1));