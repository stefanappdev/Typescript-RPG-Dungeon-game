import Character from "../characters/Character";
declare class Session {
    sessionHasStarted: boolean | undefined;
    sessionHasEnded: boolean | undefined;
    wonTheSession: boolean | undefined;
    lostTheSession: boolean | undefined;
    nextSession: Session | undefined;
    heroPlayer: Character;
    constructor(heroPlayer: Character, sessionHasStarted?: boolean, sessionHasEnded?: boolean, wonTheSession?: boolean, lostTheSession?: boolean, nextSession?: Session);
}
export default Session;
//# sourceMappingURL=Session.d.ts.map