import { GroupIterator } from "./iterableGroups.js";

export class Group{
    constructor(){
        this.group = [];
    }

    add(element){
        if(!this.has(element)){
            this.group.push(element);
        }
    }

    delete(itemToDelete){
        this.group = this.group.filter(element => element != itemToDelete)
    }

    has(element){
        return this.group.includes(element);
    }

    static from(elements){
        let group = new Group();
        for(let element of elements){
            group.add(element);
        }
        return group;
    }

    [Symbol.iterator](){
        return new GroupIterator(this.group);
    }
}

let group = Group.from([10, 20]);
console.log(group.has(10));
console.log(group.has(30));
group.add(10);
console.log(group.has(10));
group.delete(10);
console.log(group.has(10));