"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class BattleManager {
    constructor(battleStart, battleEnd, battleSessions) {
        this.battleEnd = battleEnd;
        this.battleSessions = battleSessions;
        this.battleStart = battleStart;
    }
    /*

    public generateSessions(hero:any,rounds:string){
         console.log(`A new champion ${hero.characterName} has arisen`);
         let sessionListHead=new Session(hero);

         setTimeout(()=>{
             sessionListHead.startTheSession();
         },2000)
         
         let enemies=sessionListHead.generateEnemies();
         sessionListHead.initateSessionCombat(hero,enemies)
        
    }*/
    //initates a battle sequence
    StartBattle() {
        this.battleStart = true;
        console.log('The battle has started');
    }
    //ends battle sequence
    EndBattle() {
        this.battleEnd = false;
        console.log('The battle has ended');
    }
}
exports.default = BattleManager;
//# sourceMappingURL=BattleManager.js.map