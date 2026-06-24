
import {attackTypes,attack} from "../../../types/types_attacks.ts"
import HeroInterface from "../../../interfaces/heroInterface.ts";
import Character from "../../Character.ts";

class Archer extends Character implements HeroInterface {

     
  
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
   }


}


export default Archer