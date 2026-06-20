import Character from "../Character.ts";
import {attackTypes,attack} from "../../types/types_attacks.ts"
import attackSetInterface from "../../interfaces/attackSetInterface.ts"

class Warrior extends Character implements attackSetInterface {

   
   private regularAttackMoves:attack[];
   private specialAttackMoves:attack[];

   constructor(
      name:string,
      isAlive:boolean,
      hp:number,
      atkpow:number,
      regularAttackMoves:attack[],
      specialAttackMoves:attack[]
      ){
      
      super(name,isAlive,hp,atkpow);
      this.specialAttackMoves=specialAttackMoves;
      this.regularAttackMoves=regularAttackMoves; 
   
   }



   setRegularAttackMoves(regAttacks:attack[]):void{
      this.regularAttackMoves=regAttacks
   }


   setSpecialAttackMoves(specialAttacks:attack[]):void{
      this.specialAttackMoves=specialAttacks;
   };

   getRegularAttackMoves():attack[]{
   return this.regularAttackMoves
   }

   getSpecialAttackMoves():attack[]{
   return this.specialAttackMoves
   }


}


export default Warrior