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
    constructor(heroPlayer?: Hero<HeroInterface> | undefined, sessionHasStarted?: boolean, sessionHasEnded?: boolean, wonTheSession?: boolean, lostTheSession?: boolean, nextSession?: Session, sessionEnemies?: Enemy<EnemyInterface>[]);
    generateEnemies(numEnemies?: number): void;
}
export default Session;
//# sourceMappingURL=Session.d.ts.map