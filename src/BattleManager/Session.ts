
import Enemy from "../characters/enemies/Enemy";
import Hero from "../characters/Heroes/Hero";
import Goblin from "../characters/enemies/enemy_classes/Goblin";
import Orc from "../characters/enemies/enemy_classes/Orc";
import Archer from "../characters/Heroes/hero_classes/Archer";
import Mage from "../characters/Heroes/hero_classes/Mage";
import Warrior from "../characters/Heroes/hero_classes/Warrior";
import sessionInterface from "../interfaces/sessionInterface";
import { attackTypes } from "../types/types_attacks";


class Session implements sessionInterface{
    
    public achievedSessionVictory:boolean|undefined; 
    public sessionInProgress:boolean|undefined;
    public player:Hero;
    public nextSession:Session|undefined;

    constructor(
        achievedSessionVictory:boolean|undefined,
        player:Hero,
        nextSession:Session|undefined,
        sessionInProgress:boolean|undefined,
        
    ){
        this.player=player;  
        this.nextSession=nextSession;
        this.sessionInProgress=sessionInProgress;
        this.achievedSessionVictory=achievedSessionVictory;
        }
    
    
    SessionGreeting():void{
        console.log('Round Start')
    }



    // generates a Hero based on player input
    GenerateHero(heroName:string,heroType:string): Hero|any {

        let choosenHeroClass:Hero;

        switch(heroType){
            
            case "warrior":
                choosenHeroClass=new Warrior(
                    heroName,
                    true,
                    100,
                    15,
                    'Warrior',
                      [{attackName:'sword slash',
                                    attackType:attackTypes.REGULAR,
                                    description:'light attack with sword',
                                    damage:10}
                                ],
                                [
                                    {attackName:'power strike',
                                        attackType:attackTypes.SPECIAL,
                                        description:'deals heavy damage with sword',
                                    damage:15}]
                                
                )
                break;

            case "archer":

                choosenHeroClass= choosenHeroClass=new Archer(
                    heroName,
                    true,
                    100,
                    15,
                    'Archer',
                      [{attackName:'bow strike',
                                    attackType:attackTypes.REGULAR,
                                    description:'hit with arrow attack',
                                    damage:10}
                                ],
                                [
                                    {attackName:'critical shot',
                                        attackType:attackTypes.SPECIAL,
                                        description:'deals heavy ranged damaged with arrows',
                                    damage:15}]
                                
                );

                break;

            case "mage":

                choosenHeroClass= choosenHeroClass=new Mage(
                    heroName,
                    true,
                    100,
                    15,
                    'Mage',
                      [{attackName:'fireball',
                                    attackType:attackTypes.REGULAR,
                                    description:'magic fireball attack',
                                    damage:10}
                                ],
                                [
                                    {attackName:'inferno',
                                        attackType:attackTypes.SPECIAL,
                                        description:'critical attack Fire apell',
                                    damage:15}]
                                 
                );
                break;

            default:
                return

        }

        return choosenHeroClass
    }



    //generates enemies for a session 

    GenerateEnemies(enemyType:string):Enemy|any{

        let sessionEnemy:Enemy;

        switch(enemyType){
            case 'goblin':
                    
                sessionEnemy=new Goblin('goblin',true,50,5,'Enemy',
                                [{attackName:'goblin punch',
                                    attackType:attackTypes.REGULAR,
                                    description:'light punch',
                                    damage:5}
                                ],
                                [
                                    {attackName:'goblin super punch',
                                        attackType:attackTypes.SPECIAL,
                                        description:'super punch',
                                        damage:10}])
                
                                        
                break;

            case 'orc':
                sessionEnemy=new Orc('Orc',true,75,10,'Enemy',
                                [{attackName:'Orc slash',
                                    attackType:attackTypes.REGULAR,
                                    description:'light attack with sword',
                                    damage:10}
                                ],
                                [
                                    {attackName:'orc power slash',
                                        attackType:attackTypes.SPECIAL,
                                        description:'light attack with sword',
                                        damage:15}])
                break;
            
            default:
                return;
    }
    

    return sessionEnemy


    }


    /*sets the start or stop of a round*/ 
    setSessionInProgress(state:boolean):void{

        if(this.sessionInProgress===undefined){
            this.sessionInProgress=state;
        }else{
            this.sessionInProgress=state;
        }
    }


    setAchievedSessionVictory(state:boolean):void{
        if(this.achievedSessionVictory===undefined){
            this.achievedSessionVictory=state;
        }else{
            this.achievedSessionVictory=state
        }
    }


    getAchievedSessionVictory():boolean|undefined{
        return this.achievedSessionVictory
    }


    //gets the current state of a round*/
    getSessionInProgress():boolean|undefined{
        return this.sessionInProgress;
    }

/*

    //sets number of enemies for a session or round
    setNoSessionEnemies():void{
            this.numEnemies=Math.floor(Math.random()*4);

        }

    //randomly generates enemies in a session
        generateRandomEnemies():void{
            let enemies=[{id:0,type:'goblin'},{id:1,type:'orc'}]
            for (let x=0;x<this.numEnemies;x++){
                let key=Math.floor(Math.random()*this.numEnemies);
                let target=enemies.find(enemy=>enemy.id===key)
                if (target){
                    if (target.type==='goblin'){

                        this.enemies.push(this.GenerateEnemies('goblin'));
                
                    }else if(target.type==='Orc'){

                        this.enemies.push(this.GenerateEnemies('goblin'))
                        
                    }

                }
            }

    }




 

    
     turnManager(hero:Hero,enemies:Enemy[]){
      ///turn Q to manage turns taken

      //add all players to to turnQ
       let turnQ:any=[];
       turnQ.splice(0,0,hero,enemies.slice(0,));

        //removes first player at start of turnQ
       let currentplayer=turnQ.shift();
       let nextplayer;


        function checkForSessionVictory(turnQ:any,hero:Hero):boolean{
            if(turnQ.length===1 && hero.IsAlive()){
                return true
            }else{
                return false;
            }
        }

      


       while(turnQ.length>0){
       
        if(currentplayer===hero){
            //actions to be taken if hero's turn
            let regAtks=currentplayer.getRegularAttackMoves()
            let atkdmg=regAtks[0].damage;
            let randomIndex=Math.floor(Math.random()*turnQ.length)
            let target=turnQ[randomIndex];
            currentplayer.attacks(regAtks[0],target)
            target.takesDamage(atkdmg)

           
            if(hero.IsAlive()){
            //adds hero back to turnQ at end of turn and set an enemy to currentplayer
            //if hero is alive
            let gotSessionwin=checkForSessionVictory(turnQ,hero);
            if(gotSessionwin){
                this.setAchievedSessionVictory(true);
                this.setSessionInProgress(false);
                break;
            }

            turnQ.push(currentplayer);
            nextplayer=turnQ.shift();
            currentplayer=nextplayer;
            }

           
            
        }else if(currentplayer!==hero){

            //finish logic for enemy turn

                //actions to be taken if enemy's turn
            let regAtks=currentplayer.getRegularAttackMoves();
            let atkdmg=regAtks[0].damage;
            let randonIndex=Math.floor(Math.random()*turnQ.length);
            let target=turnQ[randonIndex];
            currentplayer.attacks(regAtks[0],target);
            target.takesDamage(atkdmg)

            //check if hero dies after enemy turn
            if(hero.IsDead()){

                this.setAchievedSessionVictory(false);
                this.setSessionInProgress(false);
                break;
            }

            //adds enemy back to turnQ at end of turn and set an enemy to currentplayer
            turnQ.push(currentplayer);
            nextplayer=turnQ.shift();
            currentplayer=nextplayer;

        }
            
    }
     
    }

*/


}


export default Session