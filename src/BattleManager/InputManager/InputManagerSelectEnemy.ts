import Enemy from "../../characters/enemies/enemy_classes/Enemy";
import EnemyInterface from "../../interfaces/enemyInterface";
const readLine=require('readline/promises')






const selectEnemyIndex=async(enemies:Enemy<EnemyInterface>[]):Promise<number>=>{

     const RLI=readLine.createInterface({
        input:process.stdin,
        output:process.stdout,
        })
    
    let index:number=0;               
    
                
                /*hero selects a enemy to attack from set of enemies */
                            
                        
                            console.log('===Enemies===')
                            console.log("Remaining Enemies:",enemies.length)
                            for(let x=0;x<enemies.length;x++){
                                let enemy=enemies[x];
                                let option:number=x+1;
                               
                            console.log(`${option}: ${enemy?.getCharacterName()} HP:${enemy?.getCurrentHP()}/${enemy?.getMaxHP()}`)
                            
                            }

                            
                            const enemyChoice=await RLI.question("choose an enemy to attack:\n>");
                            index=parseInt(enemyChoice)-1;
                            
                            while(index>=enemies.length||index<0){
                                    console.log("Invalid choice, please try again");
                                    const reconfirmEnemyChoice=await RLI.question("choose an enemy to attack:\n>");
                                    let reconfirmIndex:number=parseInt(reconfirmEnemyChoice)-1;
                                    if(reconfirmIndex<enemies.length&&reconfirmIndex>=0){
                                        index=reconfirmIndex;
                                        break
                            }
                                
                                                              
                }

    RLI.close();
    return new Promise((resolve,reject)=>{
        resolve(index)
    })


}
     
export default selectEnemyIndex                      
