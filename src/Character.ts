interface characterHealthStatus{
    checkIfAlive:()=>boolean;
    setMaxHealth:(newMaxHP:number)=>void;
    setCurrentHealth:(newCurrentHealth:number)=>void;
    getCurrentHealth:()=>number;
    getMaxHealth:()=>number;

}



class Character implements characterHealthStatus{

    maxHealth:number;
    currentHealth:number;
    name:string;
    currentAttackPower:number;
    maxAttackPower:number;
   

    

   constructor(name:string,currentHealth:number,maxHealth:number,currentAttackPower:number,maxAttackPower:number){
            this.name=name;
            this.currentAttackPower=currentAttackPower;
            this.currentHealth=currentHealth;
            this.maxHealth=maxHealth;
            this.maxAttackPower=maxAttackPower;
            
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

     //set max Attack of a character
    setmaxAttackPow(newMaxAttackPow:number):void{
        this.maxAttackPower=newMaxAttackPow;
    }


    //get max Attack of character
    getmaxAttackPow():number{
        return this.maxAttackPower
    }


    //set current Attack of a character
    setCurrentAttackPow(newCurrentAttackPow:number):void{
        this.currentAttackPower=newCurrentAttackPow; 
    }


  //check if character is Alive or dead
   checkIfAlive():boolean{
         let remainingHP:number;
         remainingHP=this.getCurrentHealth()

         if(remainingHP===0){
            return false
         }else{
            return true
         }
   }


   


  //shows remaining Hp after being attacked
   takeDamage(damageRecvd:number):void{

        let currentHP:number=this.getCurrentHealth();
        let remainingHP:number=currentHP-damageRecvd;
        this.setCurrentHealth(remainingHP);
  }

}