import Session from "./Session";
declare class BattleManager {
    battleStart: boolean | undefined;
    battleEnd: boolean | undefined;
    battleSessions: Session[] | undefined;
    constructor(battleStart?: boolean, battleEnd?: boolean, battleSessions?: Session[]);
    StartBattle(): void;
    EndBattle(): void;
}
export default BattleManager;
//# sourceMappingURL=BattleManager.d.ts.map