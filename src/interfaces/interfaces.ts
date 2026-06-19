import { attackMoves } from "../types/Types";



interface healthStatus{
    checkIfAlive:()=>boolean;
    getCurrentHealth:()=>number;
    getMaxHealth:()=>number;

}


interface attackSet{
    getAttackMoves:()=>attackMoves
    
}



export {healthStatus,attackSet}