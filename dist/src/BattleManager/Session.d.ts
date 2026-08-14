import Hero from "../characters/Heroes/hero_classes/Hero";
import Enemy from "../characters/enemies/enemy_classes/Enemy";
import EnemyInterface from "../interfaces/enemyInterface";
import HeroInterface from "../interfaces/heroInterface";
declare class Session {
    sessionHasStarted: boolean | undefined;
    sessionHasEnded: boolean | undefined;
    wonTheSession: boolean | undefined;
    nextSession: Session | undefined;
    heroPlayer: Hero<HeroInterface>;
    sessionEnemies: Enemy<EnemyInterface>[];
    constructor(heroPlayer: Hero<HeroInterface>, sessionEnemies: Enemy<EnemyInterface>[], sessionHasStarted?: boolean, sessionHasEnded?: boolean, wonTheSession?: boolean, nextSession?: Session);
    setSessionEnemies(enemies: Enemy<EnemyInterface>[]): void;
    setWonTheSession(sessionState: boolean): void;
    setNextSession(nxtSession: Session): void;
    setHeroPlayer(H: Hero<HeroInterface>): void;
    getHeroPlayer(): Hero<HeroInterface>;
    getSessionEnemies(): Enemy<EnemyInterface>[];
    initateSessionCombat(): void;
    manageHeroPhase: () => Promise<void>;
    manageEnemyPhase(): Promise<void>;
    /**this function manages the execution of turns for hero and enemies
     * This function should keep excuting until either victory or loss conditons are met
     * Loss: If hero dies before enemies are defeated (game over)
     * victory:hero defeats all enemies
     */
    manageSessionTurns(): Promise<void>;
}
export default Session;
//# sourceMappingURL=Session.d.ts.map