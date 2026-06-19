import { healthStatus,attackSet } from "./interfaces/interfaces.ts";
import {attackMoves} from "./types/Types.ts"

class Character implements healthStatus,attackSet{

    public maxHealth:number;
    public currentHealth:number;
    public name:string;
    private AttackPower:number;
    public isAlive:boolean;
    private attackMoves:attackMoves

    

   constructor(
            name:string,
            currentHealth:number,
            isAlive:boolean,
            maxHealth:number,
            attackMoves:attackMoves,
            AttackPower:number,
            )
    {
            this.name=name;
            this.AttackPower=AttackPower;
            this.currentHealth=currentHealth;
            this.maxHealth=maxHealth;
            this.isAlive=isAlive;
            this.attackMoves=attackMoves;
                    
   }


    //set max HP of any character

    protected setMaxHealth(hp:number){
        this.maxHealth=hp;
    }

    //get max HP of any charcater
    public getMaxHealth():number{
        return this.maxHealth;
    }

      //set current HP of any character

    protected setCurrentHealth(newcurrentHP:number):void{
        this.currentHealth=newcurrentHP;
    }

    //get current HP of any character
    public getCurrentHealth():number{
        return this.currentHealth;
    }

    // set name of a character
    protected setCharacterName(newName:string):void{
        this.name=newName;
    }

    //get name of a character
    public getCharacterName():string{
       return this.name;
    }

  


    //set current Attack of a character
   protected setCurrentAttackPow(newCurrentAttackPow:number):void{
        this.AttackPower=newCurrentAttackPow; 
    }


    protected setIsAlive(newAliveStatus:boolean):void{
        this.isAlive=newAliveStatus;
    }

    public getIsAlive():boolean{
        return this.isAlive
    }


  //check if character is Alive or dead
   public checkIfAlive():boolean{
         let remainingHP:number;
         remainingHP=this.getCurrentHealth()

         if(remainingHP===0){
           this.setIsAlive(false)
         }else{
             this.setIsAlive(true)
         }

         return this.getIsAlive();
   }
   


  //shows remaining Hp after being attacked
  public takeDamage(damageRecvd:number):void{

        let currentHP:number=this.getCurrentHealth();
        let remainingHP:number=currentHP-damageRecvd;
        this.setCurrentHealth(remainingHP);
  }


 protected setAttackMoves(regular_atks:string[]|null,special_atks:string[]|null):void{

        let characterAttacks:attackMoves={
            regular_atks:regular_atks,
            special_atks:special_atks
        };

        this.attackMoves=characterAttacks
 }


 public getAttackMoves():attackMoves{
        return this.attackMoves
 }


}

