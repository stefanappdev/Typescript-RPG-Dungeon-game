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
    heroPlayer?:Hero<HeroInterface>,
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


    setSessionEnemies(enemies:Enemy<EnemyInterface>[]):void{
        /*set the enemies for a session */
        this.sessionEnemies=enemies;
    }

    setWonTheSession(sessionState:boolean):void{
        /*this is set if a player wins the session */
        this.wonTheSession=sessionState;
    }


    setLostTheSession(sessionState:boolean):void{
        /*this is set if a player loses the session */
        this.lostTheSession=sessionState
    }


    setNextSession(nxtSession:Session):void{
        /*Sets the next session of applicable */
        this.nextSession=nxtSession
    }

    setHeroPlayer(H:Hero<HeroInterface>):void{
        /**set the hero to be used for a session */
        this.heroPlayer=H;
    }


    getHeroPlayer():Hero<HeroInterface>|undefined{

        try{
            if(this.heroPlayer){
                return this.heroPlayer
            }else{
                throw new Error("This hero does not exist")
            }

        }catch(err){
            if(err instanceof Error){
                console.log(err.message)
            }

        }
    }


    getSessionEnemies():Enemy<EnemyInterface>[]|undefined{
        try{
            if(this.sessionEnemies){
                return this.sessionEnemies
            }else{
            throw new Error('Hmm...not finding any enemies for this session');
            }
        }catch(err){
            if(err instanceof Error){
                console.log(err.message)
            }
        }
    }


    generateEnemies():void{
                
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

        ///generates a fixed number of enemies randomly 
        

        const genRandNum=():number=>{
            let maxEnemies=5;
            let randnum=Math.floor(Math.random()*maxEnemies);
            while (randnum<1){
                genRandNum()
            }

            return randnum

        }
       
        let randnum=genRandNum();
        
        let sessionEnemies:Enemy<EnemyInterface>[]=[]
        for (let x=0;x<randnum;x++){
            ///tests if enemy generation works
            let theRandEnemy:Enemy<EnemyInterface>=createRandomEnemy();
            sessionEnemies.push(theRandEnemy)
        } 

        this.setSessionEnemies(sessionEnemies);


         console.log("enemies generated for this session:");
        if(this.sessionEnemies){
           
            this.sessionEnemies.forEach(enemy=>{
                console.log(enemy.getCharacterName())
            })
        }
        

    }

    
    initateSessionCombat():void{
        

        ///console.log(TurnQ)
         ///console.log(TurnQ[1])
                /* 
                character at front of turnQ goes first attacks an enemy.
                if the character is alive after their turn remove from front of turnQ and 
                place at back. Repeat until either all enemies die or the hero dies. 
                If hero dies => session is lost, 
                if the hero slays all enemies=> session is won and should proceed to the next session.
                */

        /*let currentPlayer=TurnQ.shift();
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


            
        }*/
    }



}


export default Session