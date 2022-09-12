let height = 8;
let width = 10;
let output = "";

for(let i = 0; i < height; i++){
    for(let j = 0; j < width; j++){
        if((i+j)%2 == 0) output+= " ";
        else output += "#";
    }
    console.log(output);
    output = "";
}