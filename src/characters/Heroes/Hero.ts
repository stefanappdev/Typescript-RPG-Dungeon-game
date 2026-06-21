import { attack} from "../../types/types_attacks.ts";
import Character from "../Character.ts";
import Enemy from "../enemies/Enemy.ts";

class Hero extends Character {

   //hero sub class 
   
   protected className:string;
   

   constructor(
      name:string,
      isAlive:boolean,
      hp:number,
      atkpow:number,
      className:string,
     
      ){
      
      super(name,isAlive,hp,atkpow);
      this.className=className; 
   
   
   }



   setClassName(className:string):void{
      this.className=className
   }


 
   getClassName():string{
      return this.className
   }


  




}


export default Hero