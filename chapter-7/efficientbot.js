import { roads, mailRoute } from "./constants.js";
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

// let first = new VillageState(
//     "Post Office", 
//     [{place: "Post Office", address: "Alice's House"}]
// );

// let next = first.move("Alice's House");

// console.log("next.place: ", next.place);
// console.log("next.parcels: ", next.parcels);
// console.log("first.place: ", first.place);
// console.log("first.parcels: ", first.parcels);

function runRobot(state, robot, memory){
    for(let turn = 0;; turn++){
        if(state.parcels.length == 0){
            console.log(`Done in ${turn} turns`);
            break;
        }

        let action = robot(state, memory);
        state = state.move(action.direction);
        memory = action.memory;
        console.log(`Moved to ${action.direction}`);
    }
}

// random bot code
function randomPick(array){
    let choice = Math.floor(Math.random() * array.length);
    return array[choice];
}

function randomRobot(state){
    return {
        direction: randomPick(roadGraph[state.place])
    };
}

// create a new state with some parcels
VillageState.random = function(parcelCount = 5){
    let parcels = [];

    for(let i = 0; i < parcelCount; i++){
        let address = randomPick(Object.keys(roadGraph));
        let place;

        do{
            place = randomPick(Object.keys(roadGraph));
        }while(place == address);

        parcels.push({ place, address });
    }

    return new VillageState("Post Office", parcels);
}

function routeRobot(state, memory){
    if(memory.length == 0){
        memory = mailRoute;
    }

    return {
        direction: memory[0],
        memory: memory.slice(1)
    };
}

function findRoute(graph, from, to){
    let work = [{at: from, route: []}];

    // work.length is always 1
    for(let i = 0; i < work.length; i++){
        let {at, route} = work[i];

        for(let place of graph[at]){
            if(place == to){
                return route.concat(place);
            }

            if(!work.some(w => w.at == place)){
                work.push({at: place, route: route.concat(place)});
            }
        }
    }
}

function goalOrientatedRobot({place, parcels}, route){
    if(route.length == 0){
        let parcel = parcels[0];

        if(parcel.place != place){
            route = findRoute(roadGraph, place, parcel.place);
        }else{
            route = findRoute(roadGraph, place, parcel.address);
        }
    }

    return {direction: route[0], memory: route.slice(1)};
}

function efficientRobot(state, memory){
    // set the memory to a path that has been found to be efficient
}

// runRobot(VillageState.random(), randomRobot);
// runRobot(VillageState.random(), routeRobot, []);
runRobot(VillageState.random(), goalOrientatedRobot, []);
