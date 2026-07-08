import CharacterInterface from "../interfaces/CharacterInterface";

 class Character implements CharacterInterface{
/// defines basics for a character
  
    public hp:number;
    public characterName:string;
    public atkPow:number;


    

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

    private setAtkpow(atkPow:number){
        this.atkPow=atkPow;
    }

    
    //get atkpow of any character
   private getAtkpow():number{
        return this.atkPow;
    }



    //set HP of any character

    private setHP(hp:number){
        this.hp=hp;
    }

    
    //get current HP of any character
    public getCurrentHP():number{
        return this.hp;
    }

    // set name of a character
    setCharacterName(newName:string):void{
        this.characterName=newName;
    }



    //get name of a character
    public getCharacterName():string{
       return this.characterName;
    }

    
    //checks if character is alive
    public IsAlive():boolean{
        if(this.getCurrentHP()>0){
            return true
        }
        return false
    }

     //checks if character is dead
    public IsDead():boolean{
        if(this.getCurrentHP()===0){
            return true
        }
        return false
    }



}

export default Character;