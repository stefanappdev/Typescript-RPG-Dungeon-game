import Hero from "../../characters/Heroes/hero_classes/Hero";
import HeroInterface from "../../interfaces/heroInterface";
import { attack } from "../../types/types_attacks";
const readLine=require('readline/promises');

const RLI=readLine.createInterface(
    {input:process.stdin,output:process.stdout}
)

const attackHandler=async(Hero:Hero<HeroInterface>):Promise<attack|undefined> =>{

 let choosenAtk:attack|undefined;
               
    console.log(`Choose an attack for ${Hero.getCharacterName()}\n`)    

                 console.log(`======Hero Attack Menu======\n\n`)
                
                if(Hero.getCharacterClass()==='archer'){

                    const archerAttackHandler=async():Promise<attack|undefined>=>{
                                
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

                                    return new Promise((resolve)=>{
                                        resolve(choosenAtk)
                                    })

                                }else{
                                     console.log("Invalid attack move Selection, Please try Again.")
                                      while(true){
                                        const reconfirmAttack=await RLI.question('choose your attack:\n>');
                                        if(reconfirmAttack==='1'){
                                            choosenAtk=Hero.getSpecialAtks()[0];
                                             return new Promise((resolve)=>{
                                        resolve(choosenAtk)
                                        })
                                        }else{
                                            console.log("Invalid attack move Selection, Please try Again.")
                                        }
                                     }
                                    
                                }
                        }else{
                            console.log("Invalid attack type Selection, Please try Again.")
                           await archerAttackHandler()
                        }
                    
                    return archerAttackHandler()
                    }
                    
                    }else if(Hero.getCharacterClass()==='mage'){

                   const mageAttackHandler=async():Promise<attack|undefined>=>{
                                
                            const mageAttackType=await RLI.question("choose your attack type: 1.Regular or 2.Special\n>");
                        
                        
                            if(mageAttackType==='1'){
                                console.log("=====Regular Attacks====\n")
                                console.log(`1.fireball\n`);
                                 console.log(`2. staff poke\n`)

                                const attack=await RLI.question('choose your attack:\n>');
                                if(attack==='1'){
                                    choosenAtk=Hero.getRegularAtks()[0];
                                     return new Promise((resolve)=>{
                                        resolve(choosenAtk)
                                    })
                                }else if(attack==='2'){
                                        choosenAtk=Hero.getRegularAtks()[1];
                                         return new Promise((resolve)=>{
                                        resolve(choosenAtk)
                                    })
                                }else{
                                     console.log("Invalid attack move Selection, Please try Again.")
                                     while(true){
                                        const reconfirmAttack=await RLI.question('choose your attack:\n>');
                                        if(reconfirmAttack==='1'){
                                            choosenAtk=Hero.getRegularAtks()[0];
                                             return new Promise((resolve)=>{
                                        resolve(choosenAtk)
                                    })
                                        }else if(reconfirmAttack==='2'){
                                            choosenAtk=Hero.getRegularAtks()[1];
                                             return new Promise((resolve)=>{
                                        resolve(choosenAtk)
                                    })
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
                                     return new Promise((resolve)=>{
                                        resolve(choosenAtk)
                                    })
                                }else{
                                     console.log("Invalid attack move Selection, Please try Again.")
                                      while(true){
                                        const reconfirmAttack=await RLI.question('choose your attack:\n>');
                                        if(reconfirmAttack==='1'){
                                            choosenAtk=Hero.getSpecialAtks()[0];
                                             return new Promise((resolve)=>{
                                        resolve(choosenAtk)
                                    })
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

                 return mageAttackHandler()
                    
                }

                else if(Hero.getCharacterClass()==='warrior'){
                    
                    
                    const warriorAttackHandler=async():Promise<attack|undefined>=>{
                                
                            const warriorAttackType=await RLI.question("choose your attack type: 1.Regular or 2.Special\n>");
                        
                        
                            if(warriorAttackType==='1'){
                                console.log("=====Regular Attacks====")
                                console.log(`1.sword strike\n`)

                                const attack=await RLI.question('choose your attack:\n>');
                                if(attack==='1'){
                                    choosenAtk=Hero.getRegularAtks()[0];
                                     return new Promise((resolve)=>{
                                        resolve(choosenAtk)
                                    })
                                }else{
                                     console.log("Invalid attack move Selection, Please try Again.")
                                     while(true){
                                        const reconfirmAttack=await RLI.question('choose your attack:\n>');
                                        if(reconfirmAttack==='1'){
                                            choosenAtk=Hero.getRegularAtks()[0];
                                             return new Promise((resolve)=>{
                                        resolve(choosenAtk)
                                    })
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
                                     return new Promise((resolve)=>{
                                        resolve(choosenAtk)
                                    })
                                }else{
                                     console.log("Invalid attack move Selection, Please try Again.")
                                      while(true){
                                        const reconfirmAttack=await RLI.question('choose your attack:\n>');
                                        if(reconfirmAttack==='1'){
                                            choosenAtk=Hero.getSpecialAtks()[0];
                                             return new Promise((resolve)=>{
                                        resolve(choosenAtk)
                                    })
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
                    
               return warriorAttackHandler()    
                   
                }

                
                }
            