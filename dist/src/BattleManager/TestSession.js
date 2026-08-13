"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Session_1 = __importDefault(require("./Session"));
let testSession = new Session_1.default();
async function executeSession() {
    await testSession.generateSessionCombatants();
    let Enemies = testSession?.getSessionEnemies();
    let Player = testSession.getHeroPlayer();
    testSession.initateSessionCombat();
}
executeSession();
//need to implement a ansync function to wait for hero to generate
//currently this throws an error because the hero does not genearate
//# sourceMappingURL=TestSession.js.map