"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const BattleManager_1 = __importDefault(require("../BattleManager/BattleManager"));
const generatorHero = require("../BattleManager/generators/generatorHero");
/**this function executes a Battle */
const BattleExecutor = async () => {
    let HERO = await generatorHero();
    let BM = new BattleManager_1.default(false, false, HERO);
    try {
        console.log(`The hero ${BM.getHero().getCharacterName()} was sucessfully generated`);
        await BM.createNewSession();
    }
    catch (err) {
        console.log(err);
        throw new Error('failed to start battle');
    }
};
exports.default = BattleExecutor;
//# sourceMappingURL=BattleExecutor.js.map