
import Enemy from "../characters/enemies/Enemy";
import Hero from "../characters/Heroes/Hero";
import Goblin from "../characters/enemies/enemy_classes/Goblin";
import Orc from "../characters/enemies/enemy_classes/Orc";
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
        nextSession:Session|null
    ){


        this.player=player;
        this.numEnemies=numEnemies;
        this.nextSession=nextSession;
        this.enemies=enemies;
        this.achievedSessionVictory=achievedSessionVictory
    }
    


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


    setNoSessionEnemies():void{
        this.numEnemies=Math.floor(Math.random()*4);

    }


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





    GenerateHero(heroName:string,heroType:string): Hero|any {

        let choosenHeroClass:Hero;

        switch(heroType){
            
            case "warrior":
                choosenHeroClass=new Hero(heroName,true,100,15,'Warrior');
                break;

            case "archer":

                choosenHeroClass=new Hero(heroName,true,75,20,'Archer');
                break;

            case "mage":

                choosenHeroClass=new Hero(heroName,true,60,25,'Mage');
                break;

            default:
                return

        }

        return choosenHeroClass
    }





}


export default Session