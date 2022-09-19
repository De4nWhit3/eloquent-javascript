import { roadGraph } from "./efficientbot.js";

export class VillageState{
    constructor(place, parcels){
        this.place = place;
        this.parcels = parcels;
    }

    move(destination){
        if(!roadGraph[this.place].includes(destination)){
            // return old state if move is invalid
            console.log("This is: ", this);
            return this;
        }

        // 'Deliver' the parcel and keep the parcels that are for other addresses
        let parcels = this.parcels.map(p => {
            if(p.place != this.place){
                return p;
            }

            return {
                place: destination,
                address: p.address
            }
        }).filter(p => p.place != p.address);

        return new VillageState(destination, parcels);
    }
}