import { Group } from "./group.js";

export class GroupIterator{
    constructor(group){
        this.group = group;
        this.index = 0;
    }

    next(){
        if(this.index >= this.group.length) return {done: true};

        let value = this.group[this.index];
        this.index++;

        return {value, done: false};
    }
}

for (let value of Group.from(["a", "b", "c"])) {
    console.log(value);
}