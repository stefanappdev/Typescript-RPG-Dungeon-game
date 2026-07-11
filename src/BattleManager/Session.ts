import Character from "../characters/Character";
import Hero from "../characters/Heroes/hero_classes/Hero";
import Enemy from "../characters/enemies/enemy_classes/Enemy";
import enemies from "../dictionaries/dictionary_enemies";
import EnemyInterface from "../interfaces/enemyInterface";
import HeroInterface from "../interfaces/heroInterface";
import { attack } from "../types/types_attacks";

class Session{

    /*class to manage the round for the battle */

sessionHasStarted:boolean|undefined;
sessionHasEnded:boolean|undefined;
wonTheSession:boolean|undefined;
lostTheSession:boolean|undefined;
nextSession:Session|undefined;
heroPlayer:Hero<HeroInterface>|undefined;
sessionEnemies:Enemy<EnemyInterface>[]|undefined;

constructor(
    heroPlayer?:Hero<HeroInterface>|undefined,
    sessionHasStarted?:boolean,
    sessionHasEnded?:boolean,
    wonTheSession?:boolean,
    lostTheSession?:boolean,
    nextSession?:Session,
    sessionEnemies?:Enemy<EnemyInterface>[],

)
    {
    this.lostTheSession=lostTheSession;
    this.sessionHasEnded=sessionHasEnded;
    this.wonTheSession=wonTheSession;
    this.heroPlayer=heroPlayer;
    this.sessionHasStarted=sessionHasStarted;
    this.nextSession=nextSession;
    this.sessionEnemies=sessionEnemies
    }


    generateEnemies(numEnemies?:number):void{
                
        ///creates a predetermined set of enemies for a session
        
        
        //generates a random enemy

        const createRandomEnemy=():Enemy<EnemyInterface>=>{
            
            let foes:any=Object.values(enemies);
            
            
            let randIndex:number=Math.floor(Math.random()*foes.length);
            let foe=foes[randIndex];
            
            let generatedFoe:Enemy<EnemyInterface>=new Enemy(foe.name,foe.hp,foe.atkPow);
                
                 generatedFoe.setEnemyInterface(
                foe.characterClass,
                foe.characterType,
                foe.isHero,
                foe.atkSets);

                try{
                    
                    if(generatedFoe===undefined){
                
                        throw new Error('Something went wrong in enemy creation...');
                    }
                }catch(error){
                    if(error instanceof Error){
                        console.log(error.message)
                    }
                }

                return generatedFoe;
           
        }
        
        ///tests if enemy generation works--> OK! 
        let theRandEnemy:Enemy<EnemyInterface>=createRandomEnemy();
        console.log("Enemy generated was:",theRandEnemy.getCharacterName())


        ///generates a fixed number of enemies based params of generateEnemies() 
        //or do it randomly
        
        
    }



    
/*


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


*/

}


export default Session