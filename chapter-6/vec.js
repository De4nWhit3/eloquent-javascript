class Vec {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    plus(otherVec){
        return new Vec(this.x + otherVec.x, this.y + otherVec.y);
    }

    minus(otherVec){
        return new Vec(this.x - otherVec.x, this.y - otherVec.y)
    }

    get length(){
        return Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2));
    }
}

// let vec1 = new Vec(1, 2);
// console.log(vec1);

console.log(new Vec(1, 2).plus(new Vec(2, 3)));
console.log(new Vec(1, 2).minus(new Vec(2, 3)));
console.log(new Vec(3, 4).length);