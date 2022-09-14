function deepEqual(obj1, obj2){
    
    if(checkValidObject(obj1) && checkValidObject(obj2)){
        console.log("obj1 is an obj and not null");
        let keys1 = Object.keys(obj1);
        let keys2 = Object.keys(obj2);
        
        // return deepEqual();
    }else{
        return obj1 === obj2;
    }

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

deepEqual(obj1, obj2);