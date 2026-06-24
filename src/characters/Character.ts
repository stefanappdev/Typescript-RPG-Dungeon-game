
 class Character {

  
    public hp:number;
    public characterName:string;
    private atkPow:number;
    

    

   constructor(
            characterName:string,
            hp:number,
            atkPow:number
            )
    {
            this.characterName=characterName;
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

    //get name of a character
    getCharacterName():string{
       return this.characterName;
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




}

export default Character;