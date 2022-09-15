function loop(value, testFunc, updateFunc, bodyFunc){
    if(!testFunc(value)) return false;
    bodyFunc(value);
    let newVal = updateFunc(value);
    loop(newVal, testFunc, updateFunc, bodyFunc);
}

loop(3, n => n > 0, n => n - 1, console.log);