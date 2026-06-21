
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
    private enemies:Enemy[];
    private numEnemies:number;
    public  achievedSessionVictory:boolean;
    public player:Hero;
    public nextSession:Session|null;

    constructor(
        achievedSessionVictory:boolean,
        enemies:Enemy[],
        numEnemies:number,
        player:Hero,
        nextSession:Session|null,

        
    ){


        this.player=player;
        this.numEnemies=numEnemies;
        this.nextSession=nextSession;
        this.enemies=enemies;
        this.achievedSessionVictory=achievedSessionVictory;
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



    
     turnManager(hero:Hero,enemies:Enemy[]){
      ///turn Q to manage turns taken

      //add all players to to turnQ
       let turnQ:any=[];
       turnQ.splice(0,0,hero,enemies.slice(0,));

        //removes first player at start of turnQ
       let currentplayer=turnQ.shift();
       let nextplayer;
       
       if(currentplayer===hero){
        //actions to be taken if hero's turn
        let regAtks=currentplayer.getRegularAttackMoves()
        let atkdmg=regAtks[0].damage;
        let randomIndex=Math.floor(Math.random()*turnQ.length)
        let target=turnQ[randomIndex];
        currentplayer.attacks(regAtks[0],target)
        target.takesDamage(atkdmg)


        //adds hero back to turnQ at end of turn and set an enemy to currentplayer
        turnQ.push(currentplayer);
        nextplayer=turnQ.shift();
        currentplayer=nextplayer;

       }else if(currentplayer!==hero){

           //finish logic for enemy turn
       }

     }


}


export default Session