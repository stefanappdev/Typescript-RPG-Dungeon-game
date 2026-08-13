import Character from "../characters/Character";
import Hero from "../characters/Heroes/hero_classes/Hero";
import Enemy from "../characters/enemies/enemy_classes/Enemy";

import EnemyInterface from "../interfaces/enemyInterface";
import HeroInterface from "../interfaces/heroInterface";
import { attack } from "../types/types_attacks";
import generatorEnemies from "./generators/generatorEnemies";
import generatorHero from "./generators/generatorHero";
const readLine=require('readline/promises')






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


    async generateSessionCombatants():Promise<void>{
        let enemies=await generatorEnemies();
        let hero=await generatorHero();
        this.setHeroPlayer(hero);
        this.setSessionEnemies(enemies) 
        
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
    
            if(this.sessionEnemies){
                return this.sessionEnemies
            }
    }
    

    
    initateSessionCombat():void{
        /*Start the combat session */
       this.manageSessionTurns()
    }


  manageHeroPhase=async():Promise<void>=>{
            /*Allow player to manage hero actions */

    const RLI=readLine.createInterface({
        input:process.stdin,
        output:process.stdout,
        })

        let Hero:Hero<HeroInterface>|undefined=this.getHeroPlayer();
         console.log(`Its your turn\n`)    
        
            try{
                if(Hero){
                    //attack menu options for hero
    

                let choosenAtk:attack|undefined;
               

                console.log(`Choose an attack for ${Hero.getCharacterName()}\n`)    

                 console.log(`======Hero Attack Menu======\n\n`)
                
                if(Hero.getCharacterClass()==='archer'){

                    const archerAttackHandler=async():Promise<void>=>{
                                
                            const archerAttackType=await RLI.question("choose your attack type: 1.Regular or 2.Special\n>");
                        
                        
                            if(archerAttackType==='1'){
                                console.log("=====Regular Attacks====")
                                console.log(`1.bow strike\n`)

                                const attack=await RLI.question('choose your attack:\n>');
                                if(attack==='1'){
                                    choosenAtk=Hero.getRegularAtks()[0];
                                }else{
                                     console.log("Invalid attack move Selection, Please try Again.")
                                     while(true){
                                        const reconfirmAttack=await RLI.question('choose your attack:\n>');
                                        if(reconfirmAttack==='1'){
                                            choosenAtk=Hero.getRegularAtks()[0];
                                            break;
                                        }else{
                                            console.log("Invalid attack move Selection, Please try Again.")
                                        }
                                     }
                                }
                            
                        }else if(archerAttackType==='2'){

                                console.log("=====Special Attacks====")
                                console.log(`1.critical shot\n`)


                                const attack=await RLI.question('choose your attack:\n>');
                                if(attack==='1'){
                                    choosenAtk=Hero.getSpecialAtks()[0];
                                }else{
                                     console.log("Invalid attack move Selection, Please try Again.")
                                      while(true){
                                        const reconfirmAttack=await RLI.question('choose your attack:\n>');
                                        if(reconfirmAttack==='1'){
                                            choosenAtk=Hero.getSpecialAtks()[0];
                                            break;
                                        }else{
                                            console.log("Invalid attack move Selection, Please try Again.")
                                        }
                                     }
                                    
                                }
                        }else{
                            console.log("Invalid attack type Selection, Please try Again.")
                           await archerAttackHandler()
                        }

                    }

                   
                   await archerAttackHandler()
               

                }
                
                else if(Hero.getCharacterClass()==='mage'){

                   const mageAttackHandler=async():Promise<void>=>{
                                
                            const mageAttackType=await RLI.question("choose your attack type: 1.Regular or 2.Special\n>");
                        
                        
                            if(mageAttackType==='1'){
                                console.log("=====Regular Attacks====\n")
                                console.log(`1.fireball\n`);
                                 console.log(`2. staff poke\n`)

                                const attack=await RLI.question('choose your attack:\n>');
                                if(attack==='1'){
                                    choosenAtk=Hero.getRegularAtks()[0];
                                }else if(attack==='2'){
                                        choosenAtk=Hero.getRegularAtks()[1];
                                }else{
                                     console.log("Invalid attack move Selection, Please try Again.")
                                     while(true){
                                        const reconfirmAttack=await RLI.question('choose your attack:\n>');
                                        if(reconfirmAttack==='1'){
                                            choosenAtk=Hero.getRegularAtks()[0];
                                            break;
                                        }else if(reconfirmAttack==='2'){
                                            choosenAtk=Hero.getRegularAtks()[1];
                                            break;
                                        }
                                        else{
                                            console.log("Invalid attack move Selection, Please try Again.")
                                        }
                                     }
                                }
                            
                        }else if(mageAttackType==='2'){

                                console.log("=====Special Attacks====")
                                console.log(`1.inferno\n`)


                                const attack=await RLI.question('choose your attack:\n>');
                                if(attack==='1'){
                                    choosenAtk=Hero.getSpecialAtks()[0];
                                }else{
                                     console.log("Invalid attack move Selection, Please try Again.")
                                      while(true){
                                        const reconfirmAttack=await RLI.question('choose your attack:\n>');
                                        if(reconfirmAttack==='1'){
                                            choosenAtk=Hero.getSpecialAtks()[0];
                                            break;
                                        }else{
                                            console.log("Invalid attack move Selection, Please try Again.")
                                        }
                                     }
                                    
                                }
                        }else{
                            console.log("Invalid attack type Selection, Please try Again.")
                           await mageAttackHandler()
                        }

                    }

                 await mageAttackHandler()
                    
                }

                else if(Hero.getCharacterClass()==='warrior'){
                    
                    
                    const warriorAttackHandler=async():Promise<void>=>{
                                
                            const warriorAttackType=await RLI.question("choose your attack type: 1.Regular or 2.Special\n>");
                        
                        
                            if(warriorAttackType==='1'){
                                console.log("=====Regular Attacks====")
                                console.log(`1.sword strike\n`)

                                const attack=await RLI.question('choose your attack:\n>');
                                if(attack==='1'){
                                    choosenAtk=Hero.getRegularAtks()[0];
                                }else{
                                     console.log("Invalid attack move Selection, Please try Again.")
                                     while(true){
                                        const reconfirmAttack=await RLI.question('choose your attack:\n>');
                                        if(reconfirmAttack==='1'){
                                            choosenAtk=Hero.getRegularAtks()[0];
                                            break;
                                        }else{
                                            console.log("Invalid attack move Selection, Please try Again.")
                                        }
                                     }
                                }
                            
                        }else if(warriorAttackType==='2'){

                                console.log("=====Special Attacks====")
                                console.log(`1.power strike\n`)


                                const attack=await RLI.question('choose your attack:\n>');
                                if(attack==='1'){
                                    choosenAtk=Hero.getSpecialAtks()[0];
                                }else{
                                     console.log("Invalid attack move Selection, Please try Again.")
                                      while(true){
                                        const reconfirmAttack=await RLI.question('choose your attack:\n>');
                                        if(reconfirmAttack==='1'){
                                            choosenAtk=Hero.getSpecialAtks()[0];
                                            break;
                                        }else{
                                            console.log("Invalid attack move Selection, Please try Again.")
                                        }
                                     }
                                    

                                }
                        }else{
                            console.log("Invalid attack type Selection, Please try Again.")
                           await warriorAttackHandler()
                        }

                    }
                    
               await warriorAttackHandler()    
                   
                }

                
               
            //implement attack function of hero and enemy

            try{

            let enemies:Enemy<EnemyInterface>[]|undefined=this.getSessionEnemies()
            

                    if(enemies) {
                        
                        if(enemies.length>0){
                        /*hero selects a enemy to attack from set of enemies */
                            
                        if(choosenAtk){
                            console.log('===Enemies===')
                            console.log("Remaining Enemies:",enemies.length)
                            for(let x=0;x<enemies.length;x++){
                                let enemy=enemies[x];
                                let option:number=x+1;
                               
                                console.log(`${option}: ${enemy?.getCharacterName()}`)
                            }

                            const enemyChoice=await RLI.question("choose an enemy to attack:\n>");
                            let index:number=parseInt(enemyChoice)-1;
                            
                            while(index>enemies.length||index<0){
                                    console.log("Invalid choice, please try again");
                                    const reconfirmEnemyChoice=await RLI.question("choose an enemy to attack:\n>");
                                    let reconfirmIndex:number=parseInt(reconfirmEnemyChoice)-1;
                                    if(reconfirmIndex<enemies.length&&reconfirmIndex>=0){
                                        index=reconfirmIndex;
                                        break
                                    }
                                     
                                                              
                            }
                            
                            //hero executes attack on enemy
                            Hero.attackEnemy(enemies[index],choosenAtk)
                            enemies[index]?.recvDMG(choosenAtk.damage,Hero)

                            /*
                            updates status of enemies in session, 
                            to ensure info on all living enemies*/
                            
                            if(enemies[index]?.isDead()){   
                                console.log(`${Hero.getCharacterName()} defeated the ${enemies[index]?.getCharacterName()}`)
                            }

                            let enemiesAlive=enemies.filter(enemy=>enemy.isAlive());
                            this.setSessionEnemies(enemiesAlive)

                            
                        }   
        
                        
                    }else{
                        throw new Error("error occured in attack selection")
                    }
                }
            }catch(Err){
                if(Err instanceof Error){
                    console.log(Err)
                }
            }
               

              console.log("+++++END OF HERO PHASE+++++\n")

                }else{
                    throw new Error("The hero does not exist")
                }

            }catch(err){
                  if(err instanceof Error){
                    console.log(err.message);
                }
                
            }
                
                
        }      

     
    
    async manageEnemyPhase():Promise<void>{
        let enemies:Enemy<EnemyInterface>[]|undefined=this.getSessionEnemies();
        let H:Hero<HeroInterface>|undefined=this.getHeroPlayer();

       /*

        if(H&&enemies){
            for(let x=0;x<enemies.length;x++){
                enemies[x]?.attackHero(H,)
            }

        }*/
        
    }
 


    /**this function manages the execution of turns for hero and enemies */

    manageSessionTurns():void{
        
            
            
            
    }


}


export default Session