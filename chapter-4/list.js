let arr = [1,2,3,4];
let list = arrayToList(arr);

console.log(list);
console.log(listToArray(list));
let newList = prepend(list, 20);
console.log(newList);
console.log(nth(newList, 0));

function nth(list, index){
    if(index == 0) return list;

    if(list.next){
        return nth(list.next, --index);
    }
    return undefined;
}

function prepend(oldList, element){
    let newList = {
        value: element,
        next: oldList
    };

    return newList;
}

function listToArray(list){
    let result = [];
    while(list.next){
        result.push(list.value);
        list = list.next;
    }
    return result;
}

function arrayToList(arr){
    if (!arr || arr.length == 0) return null;
    
    let index = 0;

    let list = {
        value: arr[index++],
        next: null
    };

    function addNode(prev, current){
        if(index > arr.length) return;

        prev.next = {
            value: current,
            next: null
        };

        addNode(prev.next, arr[++index]);
    }

    addNode(list, arr[index]);

    return list;
}
