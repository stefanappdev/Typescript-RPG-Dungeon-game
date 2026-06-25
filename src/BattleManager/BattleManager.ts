import Session from "./Session";
import heroes from "../dictionaries/dictionary_heroes";
import Mage from "../characters/Heroes/hero_classes/Mage";
import Warrior from "../characters/Heroes/hero_classes/Warrior";
import Archer from "../characters/Heroes/hero_classes/Archer";
import { read } from "node:fs";

const readLine=require('readline');



class BattleManager{
    public battleStart:boolean|undefined;
    public battleEnd:boolean|undefined
    public battleSessions:Session[]|undefined;
   
    

    constructor(battleStart?:boolean,battleEnd?:boolean,battleSessions?:Session[]) {
        this.battleEnd=battleEnd;
        this.battleSessions=battleSessions;
        this.battleStart=battleStart
    }





    

     //initates a battle sequence

    public StartBattle():void{

        this.battleStart=true;
        console.log('The battle has started')
    }

    //ends battle sequence
    public EndBattle():void{
        this.battleEnd=false;
        console.log('The battle has ended')
    }


    public GetBattleDetails():void{

    let Hero:any;

    interface battleDetails{
            
            heroName:string,
            heroChoice:number,
            sessions:number
            }

        let BD:battleDetails={
            heroName:'',
            heroChoice:0,
            sessions:0
        };


        

        async function readBattleDetails(){
            
        }
        
            const readLineInterface=readLine.createInterface({
            input:process.stdin, 
            output:process.stdout
        })

            readLineInterface.question('Enter your character name:'+'\n',(name:string)=>{

                BD.heroName=name
            
                readLineInterface.question(`Choose your hero:\n1.Warrior\n2.Mage\n3.Archer\nyour choice:`,(chr_choice:number)=>{
                console.log('you chose:',chr_choice);

                BD.heroChoice=chr_choice;

                readLineInterface.question('Enter a number of sessions for the battle:'+'\n',(numsessions:number)=>{
                console.log('number of rounds:'+'\n',numsessions)

                BD.sessions=numsessions
                
                readLineInterface.close()
                            })
                

                })
                
                
            })




            if(BD.heroChoice===1){
                
                            Hero=new Warrior(
                            heroes.WARRIOR.atkSets,
                            BD.heroName,
                            heroes.WARRIOR.hp,
                            heroes.WARRIOR.characterClass,
                            heroes.WARRIOR.atkPow,
                        )

                    }else if(BD.heroChoice===2){
                        
                            Hero=new Archer(
                            heroes.ARCHER.atkSets,
                            BD.heroName,
                            heroes.ARCHER.hp,
                            heroes.ARCHER.characterClass,
                            heroes.ARCHER.atkPow,
                        )
                    }else if(BD.heroChoice===3)
                            Hero=new Mage(
                            heroes.MAGE.atkSets,
                            BD.heroName,
                            heroes.MAGE.hp,
                            heroes.MAGE.characterClass,
                            heroes.MAGE.atkPow,
                        )

            
        console.log('a new champion has arisen!!')

    }



}



export default BattleManager




