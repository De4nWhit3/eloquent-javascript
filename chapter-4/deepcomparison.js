function deepEqual(obj1, obj2){
    
    if(obj1 === obj2) return true;

    if(checkValidObject(obj1) && checkValidObject(obj2)){
        let keys1 = Object.keys(obj1);
        let keys2 = Object.keys(obj2);
        if(keys1.length != keys2.length) return false;

        for(let key of keys1){
            if(!keys2.includes(key) || !deepEqual(obj1[key], obj2[key])){
                return false;
            }
        }
    }else{
        return false;
    }
    return true;
}

function checkValidObject(obj){
    return typeof obj == "object" && obj != null;
}

let obj1 = {
    value: 1,
    name: "anna"
};

let obj2 = {
    value: 1,
    name: "anna"
};

console.log(deepEqual(obj1, obj2));

let obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));

console.log(deepEqual(obj1, 10));
console.log(deepEqual(obj, {here: 1, object: 2}));