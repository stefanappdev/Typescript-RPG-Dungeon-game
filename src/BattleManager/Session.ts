import Hero from "../characters/Heroes/hero_classes/Hero";
import Enemy from "../characters/enemies/enemy_classes/Enemy";
import EnemyInterface from "../interfaces/enemyInterface";
import HeroInterface from "../interfaces/heroInterface";
import { attack } from "../types/types_attacks";
import attackHandler from "./InputManager/InputManagerAttacks";
import selectEnemyIndex from "./InputManager/InputManagerSelectEnemy";


class Session{


/*class to manage the round for the battle */

sessionHasStarted:boolean;
sessionHasEnded:boolean;
wonTheSession:boolean;
LostTheSession:boolean;
nextSession:Session|undefined;
heroPlayer:Hero<HeroInterface>;
sessionEnemies:Enemy<EnemyInterface>[];

constructor(
    heroPlayer:Hero<HeroInterface>,
    sessionEnemies:Enemy<EnemyInterface>[],
    wonTheSession:boolean,
    LostTheSession:boolean,
    sessionHasStarted:boolean,
    sessionHasEnded:boolean,
    nextSession?:Session,
    

)
    {
    this.sessionHasEnded=sessionHasEnded;
    this.wonTheSession=wonTheSession;
    this.LostTheSession=LostTheSession
    this.heroPlayer=heroPlayer;
    this.sessionHasStarted=sessionHasStarted;
    this.nextSession=nextSession;
    this.sessionEnemies=sessionEnemies
    }


   


    setSessionEnemies(enemies:Enemy<EnemyInterface>[]):void{
        /*set the enemies for a session */
        this.sessionEnemies=enemies;
    }

    setSessionStarted(sessionState:boolean):void{
        /**Set start of session */
        this.sessionHasStarted=sessionState
    }

     setSessionEnded(sessionState:boolean):void{
        /**Set start of session */
        this.sessionHasEnded=sessionState
    }

    setWonTheSession(sessionState:boolean):void{
        /*this is set if a player wins the session */
        this.wonTheSession=sessionState;
    }

     setLostTheSession(sessionState:boolean):void{
        /*this is set if a player wins the session */
        this.LostTheSession=sessionState;
    }




    setNextSession(nxtSession:Session):void{
        /*Sets the next session of applicable */
        this.nextSession=nxtSession
    }

    setHeroPlayer(H:Hero<HeroInterface>):void{
        /**set the hero to be used for a session */
        this.heroPlayer=H;
    }


    getHeroPlayer():Hero<HeroInterface>{

        try{
            return this.heroPlayer
        }catch(err){
            throw new Error("An error occured in fetching Hero Data")
        }
                
    }


    getSessionEnemies():Enemy<EnemyInterface>[]{
    
           try{
                return this.sessionEnemies
            }catch(err){
                throw new Error("An error occur in generating seesion enemies")
            }
    }
    
    getWonTheSession():boolean{
        return this.wonTheSession
    }



    getLostTheSession():boolean{
        return this.LostTheSession
    }

    getSessionHasEnded():boolean{
        return this.sessionHasEnded
    }
    
    getSessionHasStarted():boolean{
        return this.sessionHasStarted
    }
    
    async initateSessionCombat():Promise<void>{
        /*Start the combat session */
        this.setLostTheSession(false);
        this.setWonTheSession(false);
        this.setSessionStarted(true)
        /*manages session turns */
      await this.manageSessionTurns()
    }

    delay(ms:number):Promise<void>{

        return new Promise((resolve)=>{
            setTimeout(resolve,ms)
        })
    }

    
  manageHeroPhase=async():Promise<void>=>{
            /*Allow player to manage hero actions */

   
        let Hero:Hero<HeroInterface>=this.getHeroPlayer();
         await this.delay(2000);
         console.log(`Its your turn\n`)
         console.log(`Your HP:${Hero.getCurrentHP()}/${Hero.getMaxHP()}`)    
    
                    //attack menu options for hero
    

      
                  
            //implement attack function of hero and enemy

            try{      
                    
                let choosenAtk:attack|undefined=await attackHandler(Hero);
                let enemies:Enemy<EnemyInterface>[]=this.getSessionEnemies()
                
                            
                        if(enemies.length>0 && choosenAtk){
                            /*hero selects a enemy to attack from set of enemies */
                                
                                let index:number=await selectEnemyIndex(enemies)
                                
                                //hero executes attack on enemy
                                Hero.attackEnemy(enemies[index],choosenAtk)
                                enemies[index]?.recvDMG(choosenAtk.damage,Hero)

                                /*
                                updates status of enemies in session, 
                                to ensure info on all living enemies*/
                                
                                if(enemies[index]?.isAlive()===false){   
                                    console.log(`${Hero.getCharacterName()} defeated the ${enemies[index]?.getCharacterName()}`)
                                }

                                let enemiesAlive=enemies.filter(enemy=>enemy.isAlive());
                                this.setSessionEnemies(enemiesAlive)
                                
                            
            
                            
                        }else{
                            throw new Error("error occured in attack selection")
                        }
                
            }catch(Err){
                if(Err instanceof Error){
                    console.log(Err)
                }
            
            await this.delay(2000)
            console.log("+++++END OF HERO PHASE+++++\n")
                
        }      
    }
     
    
    async manageEnemyPhase():Promise<void>{
        /*Excutes enemy phase */
        
        const startOfPhaseNotifier=async():Promise<void> =>{
            await this.delay(3000)
            console.log("===START OF ENEMY PHASE====")
        }

        await startOfPhaseNotifier()

        let ENEMIES:Enemy<EnemyInterface>[]=this.getSessionEnemies();
        let HERO:Hero<HeroInterface>=this.getHeroPlayer();

        const executeAtk= async(Enemies:Enemy<EnemyInterface>[]):Promise<void>=>{
            
            for (let x=0;x<Enemies.length;x++){
            let randomAtk:attack|undefined=Enemies[x]?.chooseRandomAtk();
            if(randomAtk){
                    Enemies[x]?.attackHero(HERO,randomAtk)
                    HERO.recvDMG(randomAtk.damage) 

                }
            
            }
        }

        await executeAtk(ENEMIES)

        //update hero status after enemy attack
        this.setHeroPlayer(HERO)

     

         const endOfPhaseNotifier=async():Promise<void>=>{
            await this.delay(3000)
            console.log("===END OF ENEMY PHASE====")
        }

        await endOfPhaseNotifier()



    }
 


    /**this function manages the execution of turns for hero and enemies
     * This function should keep excuting until either victory or loss conditons are met
     * Loss: If hero dies before enemies are defeated (game over)
     * victory:hero defeats all enemies
     */ 

    async manageSessionTurns():Promise<void>{

        const runWinSequence=async():Promise<void>=>{
            this.setSessionEnded(true)
            this.setSessionStarted(false)
            await this.delay(1000)
            console.log('All enemies defeated')
            await this.delay(1000)
            console.log("Congrats,you won the round!")
            
        }

         const runLossSequence=async():Promise<void>=>{
            this.setSessionEnded(true)
            this.setSessionStarted(false)
            console.log("You lost the round,game over")
        }



    
        let isEnemyPhase:boolean=false;
        let isHeroPhase:boolean=false;
        /*finish session manager*/

         const isStartOfSession=():boolean=>{
                if(this.getSessionHasStarted()){
                    return true
                }else{
                    return false
                }
            }


        if(this.getWonTheSession()===false&&this.getLostTheSession()===false){
           
            while(isStartOfSession()){

                isHeroPhase=true
                await this.manageHeroPhase();
                isHeroPhase=false;
                //check if hero is alive and enemies defeated
                if(this.getHeroPlayer().isAlive()===true && this.getSessionEnemies().length===0){
                    this.setLostTheSession(false)
                    this.setWonTheSession(true)
                    await runWinSequence()
                    break;
                }

                isEnemyPhase=true;
                await this.manageEnemyPhase()
                isEnemyPhase=false;
                    
                //check if enemies alive and hero defeated
                if(this.getHeroPlayer().isAlive()===false&&this.getSessionEnemies().length>0){
                    this.setLostTheSession(true)
                    this.setWonTheSession(false)
                    await runLossSequence()
                    break;
                }
               
            }
            


        }
       
    }


}


export default Session