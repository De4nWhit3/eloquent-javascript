import { roads } from "./constants.js";
import { VillageState } from "./villagestate.js";

function buildGraph(edges){
    let graph = Object.create(null);
    
    for(let [from, to] of edges.map(r => r.split("-"))){
        addEdge(from, to);
        addEdge(to, from);
    }
    
    return graph;

    // Inner Function
    function addEdge(from, to){
        if(graph[from] == null){
            graph[from] = [to];
        }else{
            graph[from].push(to);
        }
    }
}

// array of places, and destinations that can be reached from there
export const roadGraph = buildGraph(roads);
let first = new VillageState(
    "Post Office", 
    [{place: "Post Office", address: "Alice's House"}]
);

let next = first.move("Alice's House");

console.log("next.place: ", next.place);
console.log("next.parcels: ", next.parcels);
console.log("first.place: ", first.place);
console.log("first.parcels: ", first.parcels);