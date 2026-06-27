import Character from "../characters/Character";
declare class Session {
    sessionHasStarted: boolean | undefined;
    sessionHasEnded: boolean | undefined;
    wonTheSession: boolean | undefined;
    lostTheSession: boolean | undefined;
    nextSession: Session | undefined;
    heroPlayer: Character;
    constructor(heroPlayer: Character, sessionHasStarted?: boolean, sessionHasEnded?: boolean, wonTheSession?: boolean, lostTheSession?: boolean, nextSession?: Session);
    generateEnemies(): any[] | null;
    initateSessionCombat(hero: any, enemies: any): void;
    setStartTheSession(state: boolean): void;
    setEndTheSession(state: boolean): void;
    EndTheSession(): void;
    startTheSession(): void;
}
export default Session;
//# sourceMappingURL=Session.d.ts.map