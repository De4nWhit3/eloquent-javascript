class PGroup{
    constructor(members){
        this.members = members;
    }

    add(element){
        return new PGroup(this.members.concat(element));
    }

    delete(element){
        return new PGroup(this.members.filter(e => e != element));
    }

    has(element){
        return this.members.some(e => e == element);
    }
}

PGroup.empty = new PGroup([]);
let a = PGroup.empty.add("a");
let ab = a.add("b");
let b = ab.delete("a");

console.log(b.has("b"));
console.log(a.has("b"));
console.log(b.has("a"));