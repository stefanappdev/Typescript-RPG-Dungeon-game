"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dictionary_heroes_1 = __importDefault(require("../dictionaries/dictionary_heroes"));
const Mage_1 = __importDefault(require("../characters/Heroes/hero_classes/Mage"));
const Warrior_1 = __importDefault(require("../characters/Heroes/hero_classes/Warrior"));
const Archer_1 = __importDefault(require("../characters/Heroes/hero_classes/Archer"));
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
        let Hero;
        let BD = {
            heroName: '',
            heroChoice: 0,
            sessions: 0
        };
        async function inputBattleDetails() {
            const readLineInterface = readLine.createInterface({
                input: process.stdin,
                output: process.stdout
            });
            await readLineInterface.question('Enter your character name:' + '\n', (name) => {
                BD.heroName = name;
                readLineInterface.question(`Choose your hero:\n1.Warrior\n2.Mage\n3.Archer\nyour choice:`, (chr_choice) => {
                    console.log('you chose:', chr_choice);
                    BD.heroChoice = chr_choice;
                    readLineInterface.question('Enter a number of sessions for the battle:' + '\n', (numsessions) => {
                        console.log('number of rounds:' + '\n', numsessions);
                        BD.sessions = numsessions;
                        readLineInterface.close();
                    });
                });
            });
            return BD;
        }
        inputBattleDetails();
        if (BD.heroChoice === 1) {
            Hero = new Warrior_1.default(dictionary_heroes_1.default.WARRIOR.atkSets, BD.heroName, dictionary_heroes_1.default.WARRIOR.hp, dictionary_heroes_1.default.WARRIOR.characterClass, dictionary_heroes_1.default.WARRIOR.atkPow);
        }
        else if (BD.heroChoice === 2) {
            Hero = new Archer_1.default(dictionary_heroes_1.default.ARCHER.atkSets, BD.heroName, dictionary_heroes_1.default.ARCHER.hp, dictionary_heroes_1.default.ARCHER.characterClass, dictionary_heroes_1.default.ARCHER.atkPow);
        }
        else if (BD.heroChoice === 3)
            Hero = new Mage_1.default(dictionary_heroes_1.default.MAGE.atkSets, BD.heroName, dictionary_heroes_1.default.MAGE.hp, dictionary_heroes_1.default.MAGE.characterClass, dictionary_heroes_1.default.MAGE.atkPow);
        console.log('a new champion has arisen!!', Hero);
    }
}
exports.default = BattleManager;
//# sourceMappingURL=BattleManager.js.map