"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const generatorEnemies = require("./generators/generatorEnemies");
const Session_1 = __importDefault(require("./Session"));
class BattleManager {
    constructor(startBattle, endBattle, theHero) {
        this.startBattle = startBattle;
        this.endBattle = endBattle;
        this.theHero = theHero;
    }
    setStartOfBattle(state) {
        /*sets the start of a battle*/
        this.startBattle = state;
    }
    setEndOfBattle(state) {
        /*sets the end of a battle*/
        this.endBattle = state;
    }
    getEndOfBattle() {
        /*returns the end of battle state*/
        return this.endBattle;
    }
    getStartOfBattle() {
        /*returns the start of battle state*/
        return this.startBattle;
    }
    getHero() {
        return this.theHero;
    }
    async createNewSession() {
        /**creates a new Session  */
        let ENEMIES = await generatorEnemies();
        let HERO = this.getHero();
        let newSession = new Session_1.default(HERO, ENEMIES, false, false, false, false);
        newSession.initateSessionCombat();
    }
}
exports.default = BattleManager;
//# sourceMappingURL=BattleManager.js.map