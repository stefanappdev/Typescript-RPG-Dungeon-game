
import {attackTypes,attack} from "../../../types/types_attacks.ts"
import HeroInterface from "../../../interfaces/heroInterface.ts";
import Character from "../../Character.ts";

class Archer extends Character implements HeroInterface {

     
      
    atkSets: { regular: attack[],special: attack[] };

   constructor(

      atkSets:{regular:attack[],special:attack[]},
      name:string,
      hp:number,
      characterClass:string,
      atkPow:number,
      
      ){
      
      super(name,hp,characterClass,atkPow);
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






}


export default Archer