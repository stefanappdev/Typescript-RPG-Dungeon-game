"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const types_attacks_1 = require("../types/types_attacks");
let mageRegularAtks = [
    { attackName: 'fireball',
        attackType: types_attacks_1.attackTypes.REGULAR,
        description: 'magic fireball attack',
        damage: 10 },
    { attackName: 'staff poke',
        attackType: types_attacks_1.attackTypes.REGULAR,
        description: 'weak staff poke',
        damage: 2 },
];
let mageSpecialAtks = [
    { attackName: 'inferno',
        attackType: types_attacks_1.attackTypes.SPECIAL,
        description: 'critical attack Fire apell',
        damage: 15 }
];
let warriorRegularAtks = [
    { attackName: 'sword slash',
        attackType: types_attacks_1.attackTypes.REGULAR,
        description: 'light attack with sword',
        damage: 10 },
];
let warriorSpecialAtks = [
    { attackName: 'power strike',
        attackType: types_attacks_1.attackTypes.SPECIAL,
        description: 'deals heavy damage with sword',
        damage: 15 },
];
let archerRegularAtks = [{ attackName: 'bow strike',
        attackType: types_attacks_1.attackTypes.REGULAR,
        description: 'hit with arrow attack',
        damage: 10 }
];
let archerSpecialAtks = [
    { attackName: 'critical shot',
        attackType: types_attacks_1.attackTypes.SPECIAL,
        description: 'deals heavy ranged damaged with arrows',
        damage: 15 }
];
let heroes = {
    MAGE: { characterClass: 'mage',
        characterType: 'hero',
        atkSets: {
            regular: mageRegularAtks,
            special: mageSpecialAtks
        },
        hp: 55,
        atkPow: 30
    },
    WARRIOR: { characterClass: 'warrior',
        characterType: 'hero',
        atkSets: {
            regular: warriorRegularAtks,
            special: warriorSpecialAtks
        },
        hp: 100,
        atkPow: 25
    },
    ARCHER: { characterClass: 'archer',
        characterType: 'hero',
        atkSets: { regular: archerRegularAtks,
            special: archerSpecialAtks
        },
        hp: 75,
        atkPow: 20 }
};
exports.default = heroes;
//# sourceMappingURL=dictionary_heroes.js.map