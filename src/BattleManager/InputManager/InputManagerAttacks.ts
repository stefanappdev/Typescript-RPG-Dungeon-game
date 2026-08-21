import Hero from "../../characters/Heroes/hero_classes/Hero";
import HeroInterface from "../../interfaces/heroInterface";
import { attack } from "../../types/types_attacks";
const readLine=require('readline/promises');



const attackHandler=async(Hero:Hero<HeroInterface>):Promise<attack|undefined> =>{


const RLI=readLine.createInterface(
    {input:process.stdin,output:process.stdout}
)

 let choosenAtk:attack|undefined;
               
    console.log(`Choose an attack for ${Hero.getCharacterName()}\n`)    

                 console.log(`======Hero Attack Menu======\n\n`)
                
            
                let regularAtks:attack[]=Hero.getRegularAtks();
                let specialAtks:attack[]=Hero.getSpecialAtks();

                const attackType=await RLI.question("choose your attack type: 1.Regular or 2.Special\n>");
                        
                        
                if(attackType==='1'){


                                let REGATKS_NAMES=regularAtks.map(atk=>atk.attackName)
                                console.log("=====Regular Attacks====")
                                for(let x=0;x<REGATKS_NAMES.length;x++){
                                    let num:number=1;
                                    console.log(`${num}. ${REGATKS_NAMES[x]}`)
                                    num+=1
                                }

                                const attack=await RLI.question('choose your attack:\n>');
                                let index=parseInt(attack)-1
                                if(index<regularAtks.length){
                                    choosenAtk=Hero.getRegularAtks()[index];
                                    
                                    RLI.close()
                                    return choosenAtk
                                }else{
                                     console.log("Invalid attack move Selection, Please try Again.")
                                     while(true){
                                        const reconfirmAttack=await RLI.question('choose your attack:\n>');
                                        let reconfirmIndex=parseInt(reconfirmAttack)-1
                                        if(reconfirmIndex<reconfirmAttack.length){
                                            choosenAtk=Hero.getRegularAtks()[reconfirmIndex];
                                               RLI.close()
                                            return choosenAtk
                                        }else{
                                            console.log("Invalid attack move Selection, Please try Again.")
                                        }
                                     }
                                }
                            
                        }else if(attackType==='2'){

                               let SPECIALATKS_NAMES=specialAtks.map(atk=>atk.attackName)
                                console.log("=====Special Attacks====")
                                for(let x=0;x<SPECIALATKS_NAMES.length;x++){
                                    let num:number=1;
                                    console.log(`${num}. ${SPECIALATKS_NAMES[x]}`)
                                    num+=1
                                }

                                const attack=await RLI.question('choose your attack:\n>');
                                let attackIndex=parseInt(attack)-1
                                if(attackIndex<specialAtks.length){
                                    choosenAtk=Hero.getSpecialAtks()[attackIndex];
                                    RLI.close()
                                    return choosenAtk
                                }else{
                                     console.log("Invalid attack move Selection, Please try Again.")
                                     while(true){
                                        const reconfirmAttack=await RLI.question('choose your attack:\n>');
                                        let reconfirmIndex=parseInt(reconfirmAttack)-1
                                        if(reconfirmIndex<specialAtks.length){
                                            choosenAtk=Hero.getSpecialAtks()[reconfirmIndex];
                                            RLI.close()
                                            return choosenAtk
                                        }else{
                                            console.log("Invalid attack move Selection, Please try Again.")
                                        }
                                     }
                                }
                        }else{
                            console.log("Invalid attack type Selection, Please try Again.")
                           await attackHandler(Hero)
                        }
                    
                 
                    
                    }
                    
    export default attackHandler