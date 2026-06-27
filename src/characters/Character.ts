import { attack } from "../types/types_attacks";

 class Character {

  
    public hp:number;
    public characterName:string;
    private atkPow:number;
    public characterClass:string;
    public characterType:string;

    

   constructor(
            characterName:string,
            hp:number,
            characterType:string,
            characterClass:string,
            atkPow:number
            )
    {
            this.characterName=characterName;
            this.characterClass=characterClass;
            this.characterType=characterType
            this.hp=hp;
            this.atkPow=atkPow;
                    
   }



     //set atkpow of any character

    setAtkpow(atkPow:number){
        this.atkPow=atkPow;
    }

    
    //get atkpow of any character
    getAtkpow():number{
        return this.atkPow;
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
        this.characterName=newName;
    }

     //get type of a character: Hero or enemy
    getCharacterType():string{
       return this.characterType;
    }


    //get name of a character
    getCharacterName():string{
       return this.characterName;
    }

    //set class of character 
    setCharacterClass(newClass:string):void{
        this.characterClass=newClass
    }

  //get cllass of character
  getCharacterClass():string{
    return this.characterClass
  }



    //checks if character is alive
    IsAlive():boolean{
        if(this.getCurrentHP()>0){
            return true
        }
        return false
    }

     //checks if character is dead
    IsDead():boolean{
        if(this.getCurrentHP()===0){
            return true
        }
        return false
    }



    takesDmg(dmgRcvd:number):void{
        let remainingHP=this.getCurrentHP()-dmgRcvd;
        console.log(`Received ${dmgRcvd} damage`)
        this.setHP(remainingHP)

    }



    attack(atk:attack,opponent:Character):void{
         
         console.log(`${this.getCharacterName()} used ${atk.attackName} on ${opponent.getCharacterName()}`)
    }


}

export default Character;