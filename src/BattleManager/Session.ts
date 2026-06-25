import Character from "../characters/Character";
import enemies from "../dictionaries/dictionary_enemies";
import Goblin from "../characters/enemies/enemy_classes/Goblin";
import Orc from "../characters/enemies/enemy_classes/Orc";

class Session{

    /*class to manage the round for the battle */

sessionHasStarted:boolean|undefined;
sessionHasEnded:boolean|undefined;
wonTheSession:boolean|undefined;
lostTheSession:boolean|undefined;
heroPlayer:Character;


constructor(
    heroPlayer:Character,
    sessionHasStarted?:boolean,
    sessionHasEnded?:boolean,
    wonTheSession?:boolean,
    lostTheSession?:boolean)
    {
    this.lostTheSession=lostTheSession;
    this.sessionHasEnded=sessionHasEnded;
    this.wonTheSession=wonTheSession;
    this.heroPlayer=heroPlayer;
    this.sessionHasStarted=sessionHasStarted;
    }


    generateEnemies():any[]|null{
        //generates at most up to 3 enemies per session
        let max=4;
        let randomNumberEnemies=Math.floor(Math.random()*max);
        let sessionEnemies:any=[]
        let EnemyTypes=Object.keys(enemies)
        let randomIndex=Math.floor(Math.random()*EnemyTypes.length);

        //if number of random enemies generated is zero regenerate until bigger than zero
        if(randomNumberEnemies===0){
            while(true){
                randomNumberEnemies=Math.floor(Math.random()*max)
                if(randomNumberEnemies>0){
                    break
                }
            }
        }

        //adds random number of enemies to the sessionEnemies list 
        while(sessionEnemies.length<=randomNumberEnemies){
            for(let i=0;i<EnemyTypes.length;i++){
                    let type=EnemyTypes[randomIndex]
                    if(type==='GOBLIN'){
                        sessionEnemies.push(new Goblin(
                            enemies.GOBLIN.atkSets,
                            enemies.GOBLIN.name,
                            enemies.GOBLIN.hp,
                            enemies.GOBLIN.characterClass,
                            enemies.GOBLIN.atkPow
                        ))
                    }else if(type==='ORC'){
                    sessionEnemies.push(new Orc(
                            enemies.ORC.atkSets,
                            enemies.ORC.name,
                            enemies.ORC.hp,
                            enemies.ORC.characterClass,
                            enemies.ORC.atkPow
                        ))
                        
                    
                    }

            }
        
        }

        return sessionEnemies
                
    }


    setStartTheSession(state:boolean):void{
        this.sessionHasStarted=state;
    }

    setEndTheSession(state:boolean):void{
        this.sessionHasEnded=state;
    }


    EndTheSession():void{
        this.setEndTheSession(true)
        this.setStartTheSession(false)
        console.log('Round over')
    }


    startTheSession():void{
        this.setStartTheSession(true);
        this.setEndTheSession(false);
        console.log('Begin!')
    }



}


export default Session