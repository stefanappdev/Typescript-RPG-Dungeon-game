import Session from "./Session";
import heroes from "../dictionaries/dictionary_heroes";
import Mage from "../characters/Heroes/hero_classes/Mage";
import Warrior from "../characters/Heroes/hero_classes/Warrior";
import Archer from "../characters/Heroes/hero_classes/Archer";


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



    public generateSessions(hero:any,rounds:string){
         console.log(`A new champion ${hero.characterName} has arisen`);
         let sessionListHead=new Session(hero);

         setTimeout(()=>{
             sessionListHead.startTheSession();
         },2000)
         
         let enemies=sessionListHead.generateEnemies();
         sessionListHead.initateSessionCombat(hero,enemies)
        
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


    createHero(hname:string,hclass:string):any{
        let hero;
        if(hclass==='1'){
            hero=new Warrior(
                        heroes.WARRIOR.atkSets,
                        hname,
                        heroes.WARRIOR.hp,
                        heroes.WARRIOR.characterClass,
                        heroes.WARRIOR.characterType,
                        heroes.WARRIOR.atkPow
                        )
            return hero;
        }else if(hclass==='2'){
            hero=new Archer(
                        heroes.ARCHER.atkSets,
                        hname,
                        heroes.ARCHER.hp,
                        heroes.ARCHER.characterClass,
                         heroes.WARRIOR.characterType,
                        heroes.ARCHER.atkPow
                        )
            return hero;
        }else if(hclass==='3'){
            hero=new Archer(
                        heroes.MAGE.atkSets,
                        hname,
                        heroes.MAGE.hp,
                        heroes.MAGE.characterClass,
                         heroes.WARRIOR.characterType,
                        heroes.MAGE.atkPow
                        )
            return hero;
        }



        
    }
 
    public DisplayMenu():void{
        //dteails to generate a battle
        
        let questions:string[];
        let answers:string[]=[];

             questions=["What's your hero name?",
                `What's your hero class? 1. Warrior, 2.Mage, 3.Archer`
                ,"How many rounds for the battle?"]

             const ask=(index:number):void =>{
                console.log(questions[index])
             }

             if(answers.length===0){
                ask(0)
            } 

            
            process.stdin.on('data',(input:string)=>{

                answers.push(input.toString().trim())
                
                if(answers.length<questions.length){
                    ask(answers.length)
                }else if(answers.length===questions.length){
                   
                    if(answers[0]&&answers[1]&&answers[2]){
                         
                        let the_Hero=this.createHero(answers[0],answers[1])
                       
                        this.generateSessions(the_Hero,answers[2])
                    }
                   
                }
            })
             
           
            

            
        }        
            
       
    }


    



export default BattleManager

