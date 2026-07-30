"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Enemy_1 = __importDefault(require("../characters/enemies/enemy_classes/Enemy"));
const dictionary_enemies_1 = __importDefault(require("../dictionaries/dictionary_enemies"));
const readLine = require('readline/promises');
const RLI = readLine.createInterface({
    input: process.stdin,
    output: process.stdout,
});
class Session {
    constructor(heroPlayer, sessionQ, sessionHasStarted, sessionHasEnded, wonTheSession, lostTheSession, nextSession, sessionEnemies) {
        this.manageHeroPhase = async () => {
            /*Allow player to manage hero actions */
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
                                    Hero.attackEnemy(enemies[index], choosenAtk);
                                    enemies[index]?.recvDMG(1200, Hero);
                                    if (enemies[index]?.isDead()) {
                                        console.log(`${Hero.getCharacterName()} defeated the ${enemies[index]?.getCharacterName()}`);
                                    }
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
        /** this function adds the hero and enemies as characters for the session */
        this.setSessionQ = (H, Enemies) => {
            try {
                if (this.sessionQ === undefined) {
                    this.sessionQ = [H, ...Enemies];
                }
                else {
                    throw Error("An error occured in generating the characters for this session");
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
        this.sessionQ = sessionQ;
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
            if (this.heroPlayer) {
                return this.heroPlayer;
            }
            else {
                throw new Error("This hero does not exist");
            }
        }
        catch (err) {
            if (err instanceof Error) {
                console.log(err.message);
            }
        }
    }
    getSessionEnemies() {
        if (this.sessionEnemies) {
            return this.sessionEnemies;
        }
    }
    generateEnemies() {
        ///creates a predetermined set of enemies for a session
        //generates a random enemy
        const createRandomEnemy = () => {
            let foes = Object.values(dictionary_enemies_1.default);
            let randIndex = Math.floor(Math.random() * foes.length);
            let foe = foes[randIndex];
            let generatedFoe = new Enemy_1.default(foe.name, foe.hp, foe.atkPow);
            generatedFoe.setEnemyInterface(foe.characterClass, foe.characterType, foe.isHero, foe.atkSets);
            try {
                if (generatedFoe === undefined) {
                    throw new Error('Something went wrong in enemy creation...');
                }
            }
            catch (error) {
                if (error instanceof Error) {
                    console.log(error.message);
                }
            }
            return generatedFoe;
        };
        ///generates a fixed number of enemies randomly 
        const genRandNum = () => {
            let maxEnemies = 5;
            let randnum = Math.floor(Math.random() * maxEnemies);
            while (randnum < 1) {
                randnum = Math.floor(Math.random() * maxEnemies);
                if (randnum >= 1) {
                    break;
                }
            }
            return randnum;
        };
        let randnum = genRandNum();
        let sessionEnemies = [];
        for (let x = 0; x < randnum; x++) {
            ///tests if enemy generation works
            let theRandEnemy = createRandomEnemy();
            sessionEnemies.push(theRandEnemy);
        }
        this.setSessionEnemies(sessionEnemies);
    }
    initateSessionCombat() {
        /*Start the combat session */
        this.manageSessionTurns();
    }
    getSessionQ() {
        try {
            if (this.sessionQ) {
                return this.sessionQ;
            }
            else {
                throw Error("An error occured in retrieving the characters for this session");
            }
        }
        catch (err) {
            if (err instanceof Error) {
                console.log(err.message);
            }
        }
    }
    /**this function manages the execution of turns for hero and enemies */
    manageSessionTurns() {
        let sessionQ = this.getSessionQ() ? this.getSessionQ() : undefined;
        if (sessionQ === undefined) {
            throw new Error("Error occured in retrieving characters for this session");
        }
        else {
            let currentPlayer = sessionQ.shift();
            if (currentPlayer.isAlive()) {
                /*if hero is currentPlayer,check if he is alive, execute turn, push to end of Q
                check if all enemies dead or alive,then switch to enemy turn if any enemies are alive*/
                if (currentPlayer.isAHero()) {
                    this.manageHeroPhase();
                    //check on health of enemies and check for possible victory
                    sessionQ.push(currentPlayer);
                    currentPlayer = sessionQ.shift();
                }
            }
        }
    }
}
exports.default = Session;
//# sourceMappingURL=Session.js.map