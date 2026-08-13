import Hero from "../characters/Heroes/hero_classes/Hero";
import Enemy from "../characters/enemies/enemy_classes/Enemy";
import EnemyInterface from "../interfaces/enemyInterface";
import HeroInterface from "../interfaces/heroInterface";
declare class Session {
    sessionHasStarted: boolean | undefined;
    sessionHasEnded: boolean | undefined;
    wonTheSession: boolean | undefined;
    lostTheSession: boolean | undefined;
    nextSession: Session | undefined;
    heroPlayer: Hero<HeroInterface> | undefined;
    sessionEnemies: Enemy<EnemyInterface>[] | undefined;
    constructor(heroPlayer?: Hero<HeroInterface>, sessionHasStarted?: boolean, sessionHasEnded?: boolean, wonTheSession?: boolean, lostTheSession?: boolean, nextSession?: Session, sessionEnemies?: Enemy<EnemyInterface>[]);
    generateSessionCombatants(): Promise<void>;
    setSessionEnemies(enemies: Enemy<EnemyInterface>[]): void;
    setWonTheSession(sessionState: boolean): void;
    setLostTheSession(sessionState: boolean): void;
    setNextSession(nxtSession: Session): void;
    setHeroPlayer(H: Hero<HeroInterface>): void;
    getHeroPlayer(): Hero<HeroInterface> | undefined;
    getSessionEnemies(): Enemy<EnemyInterface>[] | undefined;
    initateSessionCombat(): void;
    manageHeroPhase: () => Promise<void>;
    manageEnemyPhase(): Promise<void>;
    /**this function manages the execution of turns for hero and enemies */
    manageSessionTurns(): void;
}
export default Session;
//# sourceMappingURL=Session.d.ts.map