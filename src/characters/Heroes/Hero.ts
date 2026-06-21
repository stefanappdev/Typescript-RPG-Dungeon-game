import Character from "../Character.ts";

class Hero extends Character {

   
   protected className:string;

   constructor(
      name:string,
      isAlive:boolean,
      hp:number,
      atkpow:number,
      className:string
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