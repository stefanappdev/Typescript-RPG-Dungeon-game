"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const InputManagerAttacks_1 = __importDefault(require("./InputManager/InputManagerAttacks"));
const InputManagerSelectEnemy_1 = __importDefault(require("./InputManager/InputManagerSelectEnemy"));
class Session {
    constructor(heroPlayer, sessionEnemies, wonTheSession, LostTheSession, sessionHasStarted, sessionHasEnded, nextSession) {
        this.manageHeroPhase = async () => {
            /*Allow player to manage hero actions */
            let Hero = this.getHeroPlayer();
            await this.delay(2000);
            console.log(`Its your turn\n`);
            console.log(`Your HP:${Hero.getCurrentHP()}/${Hero.getMaxHP()}`);
            //attack menu options for hero
            //implement attack function of hero and enemy
            try {
                let choosenAtk = await (0, InputManagerAttacks_1.default)(Hero);
                let enemies = this.getSessionEnemies();
                if (enemies.length > 0 && choosenAtk) {
                    /*hero selects a enemy to attack from set of enemies */
                    let index = await (0, InputManagerSelectEnemy_1.default)(enemies);
                    //hero executes attack on enemy
                    Hero.attackEnemy(enemies[index], choosenAtk);
                    enemies[index]?.recvDMG(choosenAtk.damage, Hero);
                    /*
                    updates status of enemies in session,
                    to ensure info on all living enemies*/
                    if (enemies[index]?.isAlive() === false) {
                        console.log(`${Hero.getCharacterName()} defeated the ${enemies[index]?.getCharacterName()}`);
                    }
                    let enemiesAlive = enemies.filter(enemy => enemy.isAlive());
                    this.setSessionEnemies(enemiesAlive);
                }
                else {
                    throw new Error("error occured in attack selection");
                }
            }
            catch (Err) {
                if (Err instanceof Error) {
                    console.log(Err);
                }
                await this.delay(2000);
                console.log("+++++END OF HERO PHASE+++++\n");
            }
        };
        this.sessionHasEnded = sessionHasEnded;
        this.wonTheSession = wonTheSession;
        this.LostTheSession = LostTheSession;
        this.heroPlayer = heroPlayer;
        this.sessionHasStarted = sessionHasStarted;
        this.nextSession = nextSession;
        this.sessionEnemies = sessionEnemies;
    }
    setSessionEnemies(enemies) {
        /*set the enemies for a session */
        this.sessionEnemies = enemies;
    }
    setSessionStarted(sessionState) {
        /**Set start of session */
        this.sessionHasStarted = sessionState;
    }
    setSessionEnded(sessionState) {
        /**Set start of session */
        this.sessionHasEnded = sessionState;
    }
    setWonTheSession(sessionState) {
        /*this is set if a player wins the session */
        this.wonTheSession = sessionState;
    }
    setLostTheSession(sessionState) {
        /*this is set if a player wins the session */
        this.LostTheSession = sessionState;
    }
    setNextSession(nxtSession) {
        /*Sets the next session of applicable */
        this.nextSession = nxtSession;
    }
    setHeroPlayer(H) {
        /**set the hero to be used for a session */
        this.heroPlayer = H;
    }
    getHeroPlayer() {
        try {
            return this.heroPlayer;
        }
        catch (err) {
            throw new Error("An error occured in fetching Hero Data");
        }
    }
    getSessionEnemies() {
        try {
            return this.sessionEnemies;
        }
        catch (err) {
            throw new Error("An error occur in generating seesion enemies");
        }
    }
    getWonTheSession() {
        return this.wonTheSession;
    }
    getLostTheSession() {
        return this.LostTheSession;
    }
    getSessionHasEnded() {
        return this.sessionHasEnded;
    }
    getSessionHasStarted() {
        return this.sessionHasStarted;
    }
    async initateSessionCombat() {
        /*Start the combat session */
        this.setLostTheSession(false);
        this.setWonTheSession(false);
        this.setSessionStarted(true);
        /*manages session turns */
        await this.manageSessionTurns();
    }
    delay(ms) {
        return new Promise((resolve) => {
            setTimeout(resolve, ms);
        });
    }
    async manageEnemyPhase() {
        /*Excutes enemy phase */
        const startOfPhaseNotifier = async () => {
            await this.delay(3000);
            console.log("===START OF ENEMY PHASE====");
        };
        await startOfPhaseNotifier();
        let ENEMIES = this.getSessionEnemies();
        let HERO = this.getHeroPlayer();
        const executeAtk = async (Enemies) => {
            for (let x = 0; x < Enemies.length; x++) {
                let randomAtk = Enemies[x]?.chooseRandomAtk();
                if (randomAtk) {
                    Enemies[x]?.attackHero(HERO, randomAtk);
                    HERO.recvDMG(randomAtk.damage);
                }
            }
        };
        await executeAtk(ENEMIES);
        //update hero status after enemy attack
        this.setHeroPlayer(HERO);
        const endOfPhaseNotifier = async () => {
            await this.delay(3000);
            console.log("===END OF ENEMY PHASE====");
        };
        await endOfPhaseNotifier();
    }
    /**this function manages the execution of turns for hero and enemies
     * This function should keep excuting until either victory or loss conditons are met
     * Loss: If hero dies before enemies are defeated (game over)
     * victory:hero defeats all enemies
     */
    async manageSessionTurns() {
        const runWinSequence = async () => {
            this.setSessionEnded(true);
            this.setSessionStarted(false);
            await this.delay(1000);
            console.log('All enemies defeated');
            await this.delay(1000);
            console.log("Congrats,you won the round!");
        };
        const runLossSequence = async () => {
            this.setSessionEnded(true);
            this.setSessionStarted(false);
            console.log("You lost the round,game over");
        };
        let isEnemyPhase = false;
        let isHeroPhase = false;
        /*finish session manager*/
        const isStartOfSession = () => {
            if (this.getSessionHasStarted()) {
                return true;
            }
            else {
                return false;
            }
        };
        if (this.getWonTheSession() === false && this.getLostTheSession() === false) {
            while (isStartOfSession()) {
                isHeroPhase = true;
                await this.manageHeroPhase();
                isHeroPhase = false;
                //check if hero is alive and enemies defeated
                if (this.getHeroPlayer().isAlive() === true && this.getSessionEnemies().length === 0) {
                    this.setLostTheSession(false);
                    this.setWonTheSession(true);
                    await runWinSequence();
                    break;
                }
                isEnemyPhase = true;
                await this.manageEnemyPhase();
                isEnemyPhase = false;
                //check if enemies alive and hero defeated
                if (this.getHeroPlayer().isAlive() === false && this.getSessionEnemies().length > 0) {
                    this.setLostTheSession(true);
                    this.setWonTheSession(false);
                    await runLossSequence();
                    break;
                }
            }
        }
    }
}
exports.default = Session;
//# sourceMappingURL=Session.js.map