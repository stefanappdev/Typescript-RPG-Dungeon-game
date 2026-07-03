"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Session_1 = __importDefault(require("./Session"));
const dictionary_heroes_1 = __importDefault(require("../dictionaries/dictionary_heroes"));
const Warrior_1 = __importDefault(require("../characters/Heroes/hero_classes/Warrior"));
const Archer_1 = __importDefault(require("../characters/Heroes/hero_classes/Archer"));
const readLine = require('readline');
class BattleManager {
    constructor(battleStart, battleEnd, battleSessions) {
        this.battleEnd = battleEnd;
        this.battleSessions = battleSessions;
        this.battleStart = battleStart;
    }
    generateSessions(hero, rounds) {
        console.log(`A new champion ${hero.characterName} has arisen`);
        let sessionListHead = new Session_1.default(hero);
        setTimeout(() => {
            sessionListHead.startTheSession();
        }, 2000);
        let enemies = sessionListHead.generateEnemies();
        sessionListHead.initateSessionCombat(hero, enemies);
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
    createHero(hname, hclass) {
        let hero;
        if (hclass === '1') {
            hero = new Warrior_1.default(dictionary_heroes_1.default.WARRIOR.atkSets, hname, dictionary_heroes_1.default.WARRIOR.hp, dictionary_heroes_1.default.WARRIOR.characterClass, dictionary_heroes_1.default.WARRIOR.characterType, dictionary_heroes_1.default.WARRIOR.atkPow);
            return hero;
        }
        else if (hclass === '2') {
            hero = new Archer_1.default(dictionary_heroes_1.default.ARCHER.atkSets, hname, dictionary_heroes_1.default.ARCHER.hp, dictionary_heroes_1.default.ARCHER.characterClass, dictionary_heroes_1.default.WARRIOR.characterType, dictionary_heroes_1.default.ARCHER.atkPow);
            return hero;
        }
        else if (hclass === '3') {
            hero = new Archer_1.default(dictionary_heroes_1.default.MAGE.atkSets, hname, dictionary_heroes_1.default.MAGE.hp, dictionary_heroes_1.default.MAGE.characterClass, dictionary_heroes_1.default.WARRIOR.characterType, dictionary_heroes_1.default.MAGE.atkPow);
            return hero;
        }
    }
    DisplayMenu() {
        //dteails to generate a battle
        let questions;
        let answers = [];
        questions = ["What's your hero name?",
            `What's your hero class? 1. Warrior, 2.Mage, 3.Archer`,
            "How many rounds for the battle?"];
        const ask = (index) => {
            console.log(questions[index]);
        };
        if (answers.length === 0) {
            ask(0);
        }
        process.stdin.on('data', (input) => {
            answers.push(input.toString().trim());
            if (answers.length < questions.length) {
                ask(answers.length);
            }
            else if (answers.length === questions.length) {
                if (answers[0] && answers[1] && answers[2]) {
                    let the_Hero = this.createHero(answers[0], answers[1]);
                    this.generateSessions(the_Hero, answers[2]);
                }
            }
        });
    }
}
exports.default = BattleManager;
//# sourceMappingURL=BattleManager.js.map