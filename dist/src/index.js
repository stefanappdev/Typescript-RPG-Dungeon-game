"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const BattleManager_1 = __importDefault(require("./BattleManager/BattleManager"));
let mainBatlleManager = new BattleManager_1.default();
mainBatlleManager.GetBattleDetails();
mainBatlleManager.StartBattle();
mainBatlleManager.EndBattle();
//# sourceMappingURL=index.js.map