import Character from "../characters/Character";
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
    sessionQ: any;
    sessionEnemies: Enemy<EnemyInterface>[] | undefined;
    constructor(heroPlayer?: Hero<HeroInterface>, sessionQ?: any, sessionHasStarted?: boolean, sessionHasEnded?: boolean, wonTheSession?: boolean, lostTheSession?: boolean, nextSession?: Session, sessionEnemies?: Enemy<EnemyInterface>[]);
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
    /** this function adds the hero and enemies as characters for the session */
    setSessionQ: (H: Hero<HeroInterface>, Enemies: Enemy<EnemyInterface>[]) => void;
    getSessionQ(): Character[] | undefined;
    /**this function manages the execution of turns for hero and enemies */
    manageSessionTurns(): void;
}
export default Session;
//# sourceMappingURL=Session.d.ts.map