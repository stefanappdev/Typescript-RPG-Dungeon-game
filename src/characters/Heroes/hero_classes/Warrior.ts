<<<<<<< HEAD

import {attackTypes,attack} from "../../../types/types_attacks.ts"
import HeroInterface from "../../../interfaces/heroInterface.ts";
import Character from "../../Character.ts";

class Warrior extends Character implements HeroInterface {

     
  
    heroClass: string;
    atkSets: { regular: attack[],special: attack[] };

   constructor(

      heroClass:string,
      atkSets:{regular:attack[],special:attack[]},
      name:string,
      hp:number,
      atkpow:number,
      
      ){
      
      super(name,hp,atkpow);
      this.heroClass=heroClass;
      this.atkSets=atkSets
      }

   
   setRegularAttacks(atks:attack[]):void{
      this.atkSets.regular=atks;
   }

   setSpecialAttacks(atks:attack[]):void{
      this.atkSets.special=atks;
   }

   private getRegularAttacks():attack[]{
   return this.atkSets.regular
   }

   private getSpecialAttacks():attack[]{
   return this.atkSets.special
   }


   public getHeroClass():string{
      return this.heroClass
=======
import Hero from "../Hero.ts";
import {attackTypes,attack} from "../../../types/types_attacks.ts"
import attackSetInterface from "../../../interfaces/attackSetInterface.ts"

class Warrior extends Hero implements attackSetInterface {

   
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
>>>>>>> 685826bbf521e63c39182d48c760c14f917837bc
   }


}


export default Warrior