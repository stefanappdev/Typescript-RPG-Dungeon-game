"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Session {
    constructor(heroPlayer, sessionHasStarted, sessionHasEnded, wonTheSession, lostTheSession, nextSession) {
        this.lostTheSession = lostTheSession;
        this.sessionHasEnded = sessionHasEnded;
        this.wonTheSession = wonTheSession;
        this.heroPlayer = heroPlayer;
        this.sessionHasStarted = sessionHasStarted;
        this.nextSession = nextSession;
    }
}
exports.default = Session;
//# sourceMappingURL=Session.js.map