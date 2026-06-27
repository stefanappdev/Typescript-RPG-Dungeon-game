import Session from "./Session";
declare class BattleManager {
    battleStart: boolean | undefined;
    battleEnd: boolean | undefined;
    battleSessions: Session[] | undefined;
    constructor(battleStart?: boolean, battleEnd?: boolean, battleSessions?: Session[]);
    generateSessions(hero: any, rounds: string): void;
    StartBattle(): void;
    EndBattle(): void;
    createHero(hname: string, hclass: string): any;
    DisplayMenu(): void;
}
export default BattleManager;
//# sourceMappingURL=BattleManager.d.ts.map