import Enemy from "../characters/enemies/Enemy";
import Hero from "../characters/Heroes/Hero";
import sessionInterface from "../interfaces/sessionInterface";
declare class Session implements sessionInterface {
    private enemies;
    private numEnemies;
    achievedSessionVictory: boolean | undefined;
    sessionInProgress: boolean | undefined;
    player: Hero;
    nextSession: Session | null;
    constructor(achievedSessionVictory: boolean | undefined, enemies: Enemy[], numEnemies: number, player: Hero, nextSession: Session | null, sessionInProgress: boolean | undefined);
    GenerateEnemies(enemyType: string): Enemy | any;
    setSessionInProgress(state: boolean): void;
    setAchievedSessionVictory(state: boolean): void;
    getAchievedSessionVictory(): boolean | undefined;
    getSessionInProgress(): boolean | undefined;
    setNoSessionEnemies(): void;
    generateRandomEnemies(): void;
    GenerateHero(heroName: string, heroType: string): Hero | any;
    turnManager(hero: Hero, enemies: Enemy[]): void;
}
export default Session;
//# sourceMappingURL=Session.d.ts.map