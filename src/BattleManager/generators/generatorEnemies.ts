 
import enemies from "../../dictionaries/dictionary_enemies";
import EnemyInterface from "../../interfaces/enemyInterface";
import Enemy from "../../characters/enemies/enemy_classes/Enemy"; 
 
 
 async function generatorEnemies():Promise<Enemy<EnemyInterface>[]>{
                
        ///creates a predetermined set of enemies for a session
        
        
        //generates a random enemy

        const createRandomEnemy=():Enemy<EnemyInterface>=>{
            
            let foes:any=Object.values(enemies);
            
            
            let randIndex:number=Math.floor(Math.random()*foes.length);
            let foe=foes[randIndex];
            
            let generatedFoe:Enemy<EnemyInterface>=new Enemy(foe.name,foe.hp,foe.hp,foe.atkPow);
                
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
                randnum=Math.floor(Math.random()*maxEnemies);
                if(randnum>=1){
                    break
                }
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

        return await new Promise<Enemy<EnemyInterface>[]>((resolve,reject)=>{
            if(sessionEnemies!==undefined){
                resolve(sessionEnemies)
            }else{
                reject("failed to generate session enemies")
            }
        })

    }


export default generatorEnemies;