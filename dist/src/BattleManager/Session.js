"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const readLine = require('readline/promises');
class Session {
    constructor(heroPlayer, sessionEnemies, sessionHasStarted, sessionHasEnded, wonTheSession, lostTheSession, nextSession) {
        this.manageHeroPhase = async () => {
            /*Allow player to manage hero actions */
            const RLI = readLine.createInterface({
                input: process.stdin,
                output: process.stdout,
            });
            let Hero = this.getHeroPlayer();
            console.log(`Its your turn\n`);
            try {
                if (Hero) {
                    //attack menu options for hero
                    let choosenAtk;
                    console.log(`Choose an attack for ${Hero.getCharacterName()}\n`);
                    console.log(`======Hero Attack Menu======\n\n`);
                    if (Hero.getCharacterClass() === 'archer') {
                        const archerAttackHandler = async () => {
                            const archerAttackType = await RLI.question("choose your attack type: 1.Regular or 2.Special\n>");
                            if (archerAttackType === '1') {
                                console.log("=====Regular Attacks====");
                                console.log(`1.bow strike\n`);
                                const attack = await RLI.question('choose your attack:\n>');
                                if (attack === '1') {
                                    choosenAtk = Hero.getRegularAtks()[0];
                                }
                                else {
                                    console.log("Invalid attack move Selection, Please try Again.");
                                    while (true) {
                                        const reconfirmAttack = await RLI.question('choose your attack:\n>');
                                        if (reconfirmAttack === '1') {
                                            choosenAtk = Hero.getRegularAtks()[0];
                                            break;
                                        }
                                        else {
                                            console.log("Invalid attack move Selection, Please try Again.");
                                        }
                                    }
                                }
                            }
                            else if (archerAttackType === '2') {
                                console.log("=====Special Attacks====");
                                console.log(`1.critical shot\n`);
                                const attack = await RLI.question('choose your attack:\n>');
                                if (attack === '1') {
                                    choosenAtk = Hero.getSpecialAtks()[0];
                                }
                                else {
                                    console.log("Invalid attack move Selection, Please try Again.");
                                    while (true) {
                                        const reconfirmAttack = await RLI.question('choose your attack:\n>');
                                        if (reconfirmAttack === '1') {
                                            choosenAtk = Hero.getSpecialAtks()[0];
                                            break;
                                        }
                                        else {
                                            console.log("Invalid attack move Selection, Please try Again.");
                                        }
                                    }
                                }
                            }
                            else {
                                console.log("Invalid attack type Selection, Please try Again.");
                                await archerAttackHandler();
                            }
                        };
                        await archerAttackHandler();
                    }
                    else if (Hero.getCharacterClass() === 'mage') {
                        const mageAttackHandler = async () => {
                            const mageAttackType = await RLI.question("choose your attack type: 1.Regular or 2.Special\n>");
                            if (mageAttackType === '1') {
                                console.log("=====Regular Attacks====\n");
                                console.log(`1.fireball\n`);
                                console.log(`2. staff poke\n`);
                                const attack = await RLI.question('choose your attack:\n>');
                                if (attack === '1') {
                                    choosenAtk = Hero.getRegularAtks()[0];
                                }
                                else if (attack === '2') {
                                    choosenAtk = Hero.getRegularAtks()[1];
                                }
                                else {
                                    console.log("Invalid attack move Selection, Please try Again.");
                                    while (true) {
                                        const reconfirmAttack = await RLI.question('choose your attack:\n>');
                                        if (reconfirmAttack === '1') {
                                            choosenAtk = Hero.getRegularAtks()[0];
                                            break;
                                        }
                                        else if (reconfirmAttack === '2') {
                                            choosenAtk = Hero.getRegularAtks()[1];
                                            break;
                                        }
                                        else {
                                            console.log("Invalid attack move Selection, Please try Again.");
                                        }
                                    }
                                }
                            }
                            else if (mageAttackType === '2') {
                                console.log("=====Special Attacks====");
                                console.log(`1.inferno\n`);
                                const attack = await RLI.question('choose your attack:\n>');
                                if (attack === '1') {
                                    choosenAtk = Hero.getSpecialAtks()[0];
                                }
                                else {
                                    console.log("Invalid attack move Selection, Please try Again.");
                                    while (true) {
                                        const reconfirmAttack = await RLI.question('choose your attack:\n>');
                                        if (reconfirmAttack === '1') {
                                            choosenAtk = Hero.getSpecialAtks()[0];
                                            break;
                                        }
                                        else {
                                            console.log("Invalid attack move Selection, Please try Again.");
                                        }
                                    }
                                }
                            }
                            else {
                                console.log("Invalid attack type Selection, Please try Again.");
                                await mageAttackHandler();
                            }
                        };
                        await mageAttackHandler();
                    }
                    else if (Hero.getCharacterClass() === 'warrior') {
                        const warriorAttackHandler = async () => {
                            const warriorAttackType = await RLI.question("choose your attack type: 1.Regular or 2.Special\n>");
                            if (warriorAttackType === '1') {
                                console.log("=====Regular Attacks====");
                                console.log(`1.sword strike\n`);
                                const attack = await RLI.question('choose your attack:\n>');
                                if (attack === '1') {
                                    choosenAtk = Hero.getRegularAtks()[0];
                                }
                                else {
                                    console.log("Invalid attack move Selection, Please try Again.");
                                    while (true) {
                                        const reconfirmAttack = await RLI.question('choose your attack:\n>');
                                        if (reconfirmAttack === '1') {
                                            choosenAtk = Hero.getRegularAtks()[0];
                                            break;
                                        }
                                        else {
                                            console.log("Invalid attack move Selection, Please try Again.");
                                        }
                                    }
                                }
                            }
                            else if (warriorAttackType === '2') {
                                console.log("=====Special Attacks====");
                                console.log(`1.power strike\n`);
                                const attack = await RLI.question('choose your attack:\n>');
                                if (attack === '1') {
                                    choosenAtk = Hero.getSpecialAtks()[0];
                                }
                                else {
                                    console.log("Invalid attack move Selection, Please try Again.");
                                    while (true) {
                                        const reconfirmAttack = await RLI.question('choose your attack:\n>');
                                        if (reconfirmAttack === '1') {
                                            choosenAtk = Hero.getSpecialAtks()[0];
                                            break;
                                        }
                                        else {
                                            console.log("Invalid attack move Selection, Please try Again.");
                                        }
                                    }
                                }
                            }
                            else {
                                console.log("Invalid attack type Selection, Please try Again.");
                                await warriorAttackHandler();
                            }
                        };
                        await warriorAttackHandler();
                    }
                    //implement attack function of hero and enemy
                    try {
                        let enemies = this.getSessionEnemies();
                        if (enemies) {
                            if (enemies.length > 0) {
                                /*hero selects a enemy to attack from set of enemies */
                                if (choosenAtk) {
                                    console.log('===Enemies===');
                                    console.log("Remaining Enemies:", enemies.length);
                                    for (let x = 0; x < enemies.length; x++) {
                                        let enemy = enemies[x];
                                        let option = x + 1;
                                        console.log(`${option}: ${enemy?.getCharacterName()}`);
                                    }
                                    const enemyChoice = await RLI.question("choose an enemy to attack:\n>");
                                    let index = parseInt(enemyChoice) - 1;
                                    while (index > enemies.length || index < 0) {
                                        console.log("Invalid choice, please try again");
                                        const reconfirmEnemyChoice = await RLI.question("choose an enemy to attack:\n>");
                                        let reconfirmIndex = parseInt(reconfirmEnemyChoice) - 1;
                                        if (reconfirmIndex < enemies.length && reconfirmIndex >= 0) {
                                            index = reconfirmIndex;
                                            break;
                                        }
                                    }
                                    //hero executes attack on enemy
                                    Hero.attackEnemy(enemies[index], choosenAtk);
                                    enemies[index]?.recvDMG(choosenAtk.damage, Hero);
                                    /*
                                    updates status of enemies in session,
                                    to ensure info on all living enemies*/
                                    if (enemies[index]?.isDead()) {
                                        console.log(`${Hero.getCharacterName()} defeated the ${enemies[index]?.getCharacterName()}`);
                                    }
                                    let enemiesAlive = enemies.filter(enemy => enemy.isAlive());
                                    this.setSessionEnemies(enemiesAlive);
                                }
                            }
                            else {
                                throw new Error("error occured in attack selection");
                            }
                        }
                    }
                    catch (Err) {
                        if (Err instanceof Error) {
                            console.log(Err);
                        }
                    }
                    console.log("+++++END OF HERO PHASE+++++\n");
                }
                else {
                    throw new Error("The hero does not exist");
                }
            }
            catch (err) {
                if (err instanceof Error) {
                    console.log(err.message);
                }
            }
        };
        this.lostTheSession = lostTheSession;
        this.sessionHasEnded = sessionHasEnded;
        this.wonTheSession = wonTheSession;
        this.heroPlayer = heroPlayer;
        this.sessionHasStarted = sessionHasStarted;
        this.nextSession = nextSession;
        this.sessionEnemies = sessionEnemies;
    }
    setSessionEnemies(enemies) {
        /*set the enemies for a session */
        this.sessionEnemies = enemies;
    }
    setWonTheSession(sessionState) {
        /*this is set if a player wins the session */
        this.wonTheSession = sessionState;
    }
    setLostTheSession(sessionState) {
        /*this is set if a player loses the session */
        this.lostTheSession = sessionState;
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
    initateSessionCombat() {
        /*Start the combat session */
        this.manageSessionTurns();
    }
    async manageEnemyPhase() {
        let enemies = this.getSessionEnemies();
        let H = this.getHeroPlayer();
    }
    /**this function manages the execution of turns for hero and enemies */
    manageSessionTurns() {
        this.manageHeroPhase();
    }
}
exports.default = Session;
//# sourceMappingURL=Session.js.map