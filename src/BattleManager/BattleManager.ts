import Session from "./Session";
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


        const readLineInterface=readLine.createInterface({
        input:process.stdin, 
        output:process.stdout
    })



        readLineInterface.question('Enter your character name:'+'\n',(name:string)=>{

        
            console.log('Your character name is:'+name+'\n');
        
            readLineInterface.question(`Choose your hero:\n1.Warrior\n2.Mage\n3.Archer\nyour choice:`,(chr_choice:number)=>{
            console.log('you chose:',chr_choice);
            
            readLineInterface.question('Enter a number of sessions for the battle:'+'\n',(numsessions:number)=>{
            console.log('number of rounds:'+'\n',numsessions)
            
            readLineInterface.close()
                        })

                })
            
            
        })

        


        



    }



}



export default BattleManager




