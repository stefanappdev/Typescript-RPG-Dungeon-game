const generatorEnemies=require("./generators/generatorEnemies");
import Hero from "../characters/Heroes/hero_classes/Hero";
import HeroInterface from "../interfaces/heroInterface";
import Enemy from "../characters/enemies/enemy_classes/Enemy";
import EnemyInterface from "../interfaces/enemyInterface";
import Session from "./Session";

class BattleManager{
/*this class manages the key parts of a battle */
public startBattle:boolean;
public endBattle:boolean;
public theHero:Hero<HeroInterface>;

constructor(startBattle:boolean,endBattle:boolean,theHero:Hero<HeroInterface>){
    this.startBattle=startBattle;
    this.endBattle=endBattle;
    this.theHero=theHero;
}

setStartOfBattle(state:boolean):void{
/*sets the start of a battle*/
    this.startBattle=state
}

setEndOfBattle(state:boolean):void{
    /*sets the end of a battle*/
    this.endBattle=state
}

getEndOfBattle():boolean{
    /*returns the end of battle state*/
    return this.endBattle
}


getStartOfBattle():boolean{
    /*returns the start of battle state*/
    return this.startBattle
}



getHero():Hero<HeroInterface>{
    return this.theHero
}

async createNewSession():Promise<void>{
    /**creates a new Session  */
    
    let ENEMIES:Enemy<EnemyInterface>[]= await generatorEnemies()
    let HERO=this.getHero()
    let newSession:Session=new Session(HERO,ENEMIES,false,false,false,false)
    newSession.initateSessionCombat()
    
}



}

export default BattleManager