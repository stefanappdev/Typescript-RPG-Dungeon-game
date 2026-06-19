

export default class Character {

    private maxHealth:number;
    private currentHealth:number;
    public name:string;
    public isAlive:boolean;
    

    

   constructor(
            name:string,
            currentHealth:number,
            isAlive:boolean,
            maxHealth:number,
            )
    {
            this.name=name;
            this.currentHealth=currentHealth;
            this.maxHealth=maxHealth;
            this.isAlive=isAlive;
                    
   }


    //set max HP of any character

    setMaxHealth(hp:number){
        this.maxHealth=hp;
    }

    //get max HP of any charcater
    getMaxHealth():number{
        return this.maxHealth;
    }

      //set current HP of any character

    setCurrentHealth(newcurrentHP:number):void{
        this.currentHealth=newcurrentHP;
    }

    //get current HP of any character
    getCurrentHealth():number{
        return this.currentHealth;
    }

    // set name of a character
    setCharacterName(newName:string):void{
        this.name=newName;
    }

    //get name of a character
    getCharacterName():string{
       return this.name;
    }

  


    //set the living status of a character
    setIsAlive(newAliveStatus:boolean):void{
        this.isAlive=newAliveStatus;
    }


    //gets living status of character
    getIsAlive():boolean{
        return this.isAlive
    }


  //check if character is Alive or dead
   checkIfAlive():boolean{
         let remainingHP:number;
         remainingHP=this.getCurrentHealth()

         if(remainingHP===0){
           this.setIsAlive(false)
         }else{
             this.setIsAlive(true)
         }

         return this.getIsAlive();
   }
   


}

