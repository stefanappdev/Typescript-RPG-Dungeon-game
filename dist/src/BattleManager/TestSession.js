"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Session_1 = __importDefault(require("./Session"));
const Hero_1 = __importDefault(require("../characters/Heroes/hero_classes/Hero"));
const dictionary_heroes_1 = __importDefault(require("../dictionaries/dictionary_heroes"));
let testSession = new Session_1.default();
let Mike = new Hero_1.default("Mike", dictionary_heroes_1.default.WARRIOR.hp, dictionary_heroes_1.default.WARRIOR.atkPow);
Mike.setHeroInterface(dictionary_heroes_1.default.WARRIOR.characterClass, dictionary_heroes_1.default.WARRIOR.isHero, dictionary_heroes_1.default.WARRIOR.atkSets);
testSession.setHeroPlayer(Mike);
testSession.generateEnemies();
testSession.initateSessionCombat();
//# sourceMappingURL=TestSession.js.map