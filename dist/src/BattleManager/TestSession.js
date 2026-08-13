"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Session_1 = __importDefault(require("./Session"));
const generatorHero_1 = __importDefault(require("./generators/generatorHero"));
const generatorEnemies_1 = __importDefault(require("./generators/generatorEnemies"));
async function executeSession() {
    let HERO = await (0, generatorHero_1.default)();
    let ENEMIES = await (0, generatorEnemies_1.default)();
    let testSession = new Session_1.default(HERO, ENEMIES);
    testSession.initateSessionCombat();
}
executeSession();
//need to implement a ansync function to wait for hero to generate
//currently this throws an error because the hero does not genearate
//# sourceMappingURL=TestSession.js.map