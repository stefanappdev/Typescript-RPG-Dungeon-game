import Enemy from "../characters/enemies/Enemy";
import Hero from "../characters/Heroes/Hero";
import sessionInterface from "../interfaces/sessionInterface";
declare class Session implements sessionInterface {
    private enemies;
    private numEnemies;
    achievedSessionVictory: boolean;
    player: Hero;
    nextSession: Session | null;
    constructor(achievedSessionVictory: boolean, enemies: Enemy[], numEnemies: number, player: Hero, nextSession: Session | null);
    GenerateEnemies(enemyType: string): Enemy | any;
    setNoSessionEnemies(): void;
    generateRandomEnemies(): void;
    GenerateHero(heroName: string, heroType: string): Hero | any;
}
export default Session;
//# sourceMappingURL=Session.d.ts.map