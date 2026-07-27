"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const types_attacks_1 = require("../types/types_attacks");
let goblinRegularAtks = [
    { attackName: 'goblin punch',
        attackType: types_attacks_1.attackTypes.REGULAR,
        description: 'soft goblin punch',
        damage: 5 },
];
let goblinSpecialAtks = [
    { attackName: 'goblin spin kick',
        attackType: types_attacks_1.attackTypes.SPECIAL,
        description: 'critical kick attack ',
        damage: 15 }
];
let orcRegularAtks = [
    { attackName: 'orc sword slash',
        attackType: types_attacks_1.attackTypes.REGULAR,
        description: 'light attack with sword',
        damage: 10 },
];
let orcSpecialAtks = [
    { attackName: 'orc power slash',
        attackType: types_attacks_1.attackTypes.SPECIAL,
        description: 'heavy attack with sword',
        damage: 15 },
];
let enemies = {
    GOBLIN: {
        name: 'Goblin',
        hp: 60,
        characterClass: 'GOBLIN',
        characterType: 'enemy',
        isHero: false,
        atkSets: { regular: goblinRegularAtks, special: goblinSpecialAtks },
        atkPow: 15,
    },
    ORC: {
        name: 'Orc',
        hp: 75,
        characterClass: 'ORC',
        characterType: 'enemy',
        isHero: false,
        atkSets: { regular: orcRegularAtks, special: orcSpecialAtks },
        atkPow: 25,
    },
};
exports.default = enemies;
//# sourceMappingURL=dictionary_enemies.js.map