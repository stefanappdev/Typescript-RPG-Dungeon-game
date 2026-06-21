import Enemy from "../Enemy.ts";
import {attackTypes,attack} from "../../../types/types_attacks.ts"
import attackSetInterface from "../../../interfaces/attackSetInterface.ts"

class Orc extends Enemy implements attackSetInterface {

   
   private regularAttackMoves:attack[];
   private specialAttackMoves:attack[];
   

   constructor(
      name:string,
      isAlive:boolean,
      hp:number,
      atkpow:number,
      className:string,
      regularAttackMoves:attack[],
      specialAttackMoves:attack[]
      ){
      
      super(name,isAlive,hp,atkpow,className);
      this.regularAttackMoves=regularAttackMoves;
      this.specialAttackMoves=specialAttackMoves
      
   
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


export default Orc