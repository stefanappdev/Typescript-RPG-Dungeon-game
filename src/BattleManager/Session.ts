import Character from "../characters/Character";
import enemies from "../dictionaries/dictionary_enemies";
import Goblin from "../characters/enemies/enemy_classes/Goblin";
import Orc from "../characters/enemies/enemy_classes/Orc";
import { attack } from "../types/types_attacks";

class Session{

    /*class to manage the round for the battle */

sessionHasStarted:boolean|undefined;
sessionHasEnded:boolean|undefined;
wonTheSession:boolean|undefined;
lostTheSession:boolean|undefined;
nextSession:Session|undefined;
heroPlayer:Character;


constructor(
    heroPlayer:Character,
    sessionHasStarted?:boolean,
    sessionHasEnded?:boolean,
    wonTheSession?:boolean,
    lostTheSession?:boolean,
    nextSession?:Session

)
    {
    this.lostTheSession=lostTheSession;
    this.sessionHasEnded=sessionHasEnded;
    this.wonTheSession=wonTheSession;
    this.heroPlayer=heroPlayer;
    this.sessionHasStarted=sessionHasStarted;
    this.nextSession=nextSession;
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
                            enemies.GOBLIN.characterType,
                            enemies.GOBLIN.atkPow
                        ))
                    }else if(type==='ORC'){
                    sessionEnemies.push(new Orc(
                            enemies.ORC.atkSets,
                            enemies.ORC.name,
                            enemies.ORC.hp,
                            enemies.ORC.characterClass,
                            enemies.ORC.characterType,
                            enemies.ORC.atkPow
                        ))
                        
                    
                    }

            }
        
        }

        console.log('Enemies are being generated...')

        return sessionEnemies
                
    }




    initateSessionCombat(hero:any,enemies:any):void{
        let TurnQ:any=[];
        TurnQ.splice(0,0,hero,enemies);
        let foes=TurnQ[1]
        ///console.log(TurnQ)
         ///console.log(TurnQ[1])
                /* 
                character at front of turnQ goes first attacks an enemy.
                if the character is alive after their turn remove from front of turnQ and 
                place at back. Repeat until either all enemies die or the hero dies. 
                If hero dies => session is lost, 
                if the hero slays all enemies=> session is won and should proceed to the next session.
                */
        let currentPlayer=TurnQ.shift();
        if(currentPlayer===hero){

            //hero attacks sets
            let heroSpecialAttacks:attack[]=hero.getSpecialAttacks()
            let heroRegularAttacks:attack[]=hero.getRegularAttacks();
            
            //pick random atk regular or special from attack set for hero to use
            let heroAtks:attack[]=heroRegularAttacks.concat(heroSpecialAttacks);
            let randAtk:attack|undefined=heroAtks[Math.floor(Math.random()*heroAtks.length+1)]
            
            //random chooses an enemy for the hero to attack
            
            let randEnemyIndex=Math.floor(Math.random()*(foes.length+1))
            
            if (randEnemyIndex===0){
               while(true){
                    randEnemyIndex=Math.floor(Math.random()*(foes.length+1))

                    if (randEnemyIndex>0){
                        break
                    }
               } 
              
            }


           // console.log(randEnemyIndex)

            let foe=foes[randEnemyIndex]


            //displays damage taken by attack used by hero and dmg take zenemy 

            hero.attack(randAtk,foe);
            foe.takesDamage(randAtk?.damage);

            //removes dead enemy from array
            if(foe.isDead()){
                let pos=TurnQ[1].indexOf(foe);
                TurnQ[1].splice(pos,1)
            }

            //pushes hero back into array
            TurnQ.push(currentPlayer)

            currentPlayer=TurnQ.shift();


            
        }
        


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