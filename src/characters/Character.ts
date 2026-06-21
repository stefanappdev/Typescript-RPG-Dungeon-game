import { attack } from "../types/types_attacks";
import Enemy from "./enemies/Enemy";
import Hero from "./Heroes/Hero";

 class Character {

  
    public hp:number;
    public name:string;
    public isAlive:boolean;
    private atkpow:number;
    

    

   constructor(
            name:string,
            isAlive:boolean,
            hp:number,
            atkpow:number
            )
    {
            this.name=name;
            this.hp=hp;
            this.isAlive=isAlive;
            this.atkpow=atkpow;
                    
   }



     //set atkpow of any character

    setAtkpow(atkpow:number){
        this.atkpow=atkpow;
    }

    
    //get atkpow of any character
    getAtkpow():number{
        return this.atkpow;
    }



    //set HP of any character

    setHP(hp:number){
        this.hp=hp;
    }

    
    //get current HP of any character
    getCurrentHP():number{
        return this.hp;
    }

    // set name of a character
    setCharacterName(newName:string):void{
        this.name=newName;
    }

    //get name of a character
    getCharacterName():string{
       return this.name;
    }

  
    //registers damage received by a character
    takesDamage(dmgRecvd:number):void{
      console.log(`${this.getCharacterName} received ${dmgRecvd} damage`)
      let remainingHP=this.getCurrentHP()-dmgRecvd;
      this.setHP(remainingHP);
   }

   attacks(attackUsed:attack,enemyNPC:Enemy|Hero):void{
       
    console.log(`${this.getCharacterName} used ${attackUsed}`);
    console.log(`${enemyNPC.getCharacterName} received ${attackUsed.damage}`);

   }


    //set the living status of a character
    setIsAlive(newAliveStatus:boolean):void{
        this.isAlive=newAliveStatus;
    }


    //checks if character is alive
    IsAlive():boolean{
        if(this.isAlive){
            return true
        }else{
            return false
        }
    }

     //checks if character is dead
    IsDead():boolean{
        if(!this.isAlive){
            return true
        }else{
            return false
        }
    }




}

export default Character;