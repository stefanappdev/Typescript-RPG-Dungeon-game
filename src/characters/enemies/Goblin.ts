import Character from "../Character.ts";
import {attackTypes,attack} from "../../types/types_attacks.ts"
import attackSetInterface from "../../interfaces/attackSetInterface.ts"

class Goblin extends Character implements attackSetInterface {

   
 attackMoves:attack[];
 attackPower:number;

 constructor(

    name:string,
    currentHealth:number,
    isAlive:boolean,
    maxHealth:number,
    attackMoves:attack[],
    attackPower:number
 ){
    super(name,currentHealth,isAlive,maxHealth);
    this.attackMoves=attackMoves;
    this.attackPower=attackPower
 }



setAttackMoves(attacks: attack[]):void{
   this.attackMoves=attacks
}

getAttackMoves():attack[]{
return this.attackMoves
}

}


export default Goblin