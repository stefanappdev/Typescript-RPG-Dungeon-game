"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const readLine = require('readline');
class BattleManager {
    constructor(battleStart, battleEnd, battleSessions) {
        this.battleEnd = battleEnd;
        this.battleSessions = battleSessions;
        this.battleStart = battleStart;
    }
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
    GetBattleDetails() {
        const readLineInterface = readLine.createInterface({
            input: process.stdin,
            output: process.stdout
        });
        readLineInterface.question('Enter your character name:' + '\n', (name) => {
            console.log('Your character name is:' + name + '\n');
            readLineInterface.question(`Choose your hero:\n1.Warrior\n2.Mage\n3.Archer\nyour choice:`, (chr_choice) => {
                console.log('you chose:', chr_choice);
                readLineInterface.question('Enter a number of sessions for the battle:', (numsessions) => {
                    console.log('number of rounds:', numsessions);
                    readLineInterface.close();
                });
            });
        });
    }
}
exports.default = BattleManager;
//# sourceMappingURL=BattleManager.js.map