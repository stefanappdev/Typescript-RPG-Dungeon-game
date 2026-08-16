import CharacterInterface from "../interfaces/CharacterInterface";

 class Character implements CharacterInterface{
/// defines basics for a character
  
    public hp:number;
    public currentHP:number;
    public characterName:string;
    public atkPow:number;


    

   constructor(
            characterName:string,
            hp:number,
            currentHP:number,
            atkPow:number
            )
    {
            this.characterName=characterName;
            this.hp=hp;
            this.currentHP=currentHP;
            this.atkPow=atkPow;
                    
   }



     //set atkpow of any character

    protected setAtkpow(atkPow:number){
        this.atkPow=atkPow;
    }

    
    //get atkpow of any character
   protected getAtkpow():number{
        return this.atkPow;
    }

 //set current HP of any character

    protected setCurrentHP(hp:number){
        if(hp<0){
            hp=0
        }
        
        return this.currentHP=hp;
    }

    
    //get maxHP of any character
    public getCurrentHP():number{
        return this.currentHP;
    }

    //set max HP of any character

    protected setMaxHP(hp:number){
        this.hp=hp;
    }

    
    //get maxHP of any character
    public getMaxHP():number{
        return this.hp;
    }

    // set name of a character
    protected setCharacterName(newName:string):void{
        this.characterName=newName;
    }



    //get name of a character
    public getCharacterName():string{
       return this.characterName;
    }

    
    //checks if character is alive
    public isAlive():boolean{
        if(this.getCurrentHP()>0){
            return true
        }
        return false
    }

   



}

export default Character;