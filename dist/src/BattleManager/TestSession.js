"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Session_1 = __importDefault(require("./Session"));
const Hero_1 = __importDefault(require("../characters/Heroes/hero_classes/Hero"));
const Enemy_1 = __importDefault(require("../characters/enemies/enemy_classes/Enemy"));
const dictionary_heroes_1 = __importDefault(require("../dictionaries/dictionary_heroes"));
const dictionary_enemies_1 = __importDefault(require("../dictionaries/dictionary_enemies"));
let testSession = new Session_1.default();
let orc = new Enemy_1.default('orc', dictionary_enemies_1.default.ORC.hp, dictionary_enemies_1.default.ORC.atkPow);
let Mike = new Hero_1.default("Mike", dictionary_heroes_1.default.WARRIOR.hp, dictionary_heroes_1.default.WARRIOR.atkPow);
Mike.setHeroInterface(dictionary_heroes_1.default.WARRIOR.characterClass, dictionary_heroes_1.default.WARRIOR.isHero, dictionary_heroes_1.default.WARRIOR.atkSets);
let rokya = new Hero_1.default("rokya", dictionary_heroes_1.default.MAGE.hp, dictionary_heroes_1.default.MAGE.atkPow);
rokya.setHeroInterface(dictionary_heroes_1.default.MAGE.characterClass, dictionary_heroes_1.default.MAGE.isHero, dictionary_heroes_1.default.MAGE.atkSets);
let ajax = new Hero_1.default("ajax", dictionary_heroes_1.default.ARCHER.hp, dictionary_heroes_1.default.ARCHER.atkPow);
ajax.setHeroInterface(dictionary_heroes_1.default.ARCHER.characterClass, dictionary_heroes_1.default.ARCHER.isHero, dictionary_heroes_1.default.ARCHER.atkSets);
orc.setEnemyInterface(dictionary_enemies_1.default.ORC.characterClass, dictionary_enemies_1.default.ORC.characterType, dictionary_enemies_1.default.ORC.isHero, dictionary_enemies_1.default.ORC.atkSets);
//testSession.setHeroPlayer(ajax);
//testSession.setHeroPlayer(Mike);
testSession.setHeroPlayer(rokya);
testSession.generateEnemies();
let Enemies = testSession?.getSessionEnemies();
if (Enemies) {
    testSession.setSessionQ(rokya, Enemies);
}
testSession.initateSessionCombat();
//# sourceMappingURL=TestSession.js.map