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
    constructor(heroPlayer, sessionHasStarted, sessionHasEnded, wonTheSession, lostTheSession, nextSession, sessionEnemies) {
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
        try {
            if (this.sessionEnemies) {
                return this.sessionEnemies;
            }
            else {
                throw new Error('Hmm...not finding any enemies for this session');
            }
        }
        catch (err) {
            if (err instanceof Error) {
                console.log(err.message);
            }
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
        console.log("enemies generated for this session:");
        if (this.sessionEnemies) {
            this.sessionEnemies.forEach(enemy => {
                console.log(`${enemy.getCharacterName()} \n`);
            });
        }
    }
    initateSessionCombat() {
        const manageHeroPhase = async () => {
            /*Allow player to manage hero actions */
            let Hero = this.getHeroPlayer();
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
                    let enemies = this.getSessionEnemies();
                    //implement attack function of hero and enemy
                    try {
                        if (enemies && choosenAtk) 
                        /*hero selects a random enemy to attack from set of enemies */
                        {
                            let randIndex = Math.floor(Math.random() * enemies.length);
                            Hero.attackEnemy(enemies[randIndex], choosenAtk);
                            enemies[randIndex]?.recvDMG(choosenAtk.damage, Hero);
                        }
                        else {
                            throw new Error("error occured in attack selection");
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
        manageHeroPhase();
        ///console.log(TurnQ)
        ///console.log(TurnQ[1])
        /*
        character at front of turnQ goes first attacks an enemy.
        if the character is alive after their turn remove from front of turnQ and
        place at back. Repeat until either all enemies die or the hero dies.
        If hero dies => session is lost,
        if the hero slays all enemies=> session is won and should proceed to the next session.
        */
        /*let currentPlayer=TurnQ.shift();
        if(currentPlayer===hero){

            //hero attacks sets
            let heroSpecialAttacks:attack[]=hero.getSpecialAttacks()
            let heroRegularAttacks:attack[]=hero.getRegularAttacks();
            
            //pick random atk regular or special from attack set for hero to use
            let heroAtks:attack[]=heroRegularAttacks.concat(heroSpecialAttacks);
            let randAtk:attack|undefined=heroAtks[Math.floor(Math.random()*heroAtks.length+1)]
            
            //random chooses an enemy for the hero to attack
            
            let randEnemyIndex=Math.floor(Math.random()*(foes.length+1))
            
            if (randEnemyIndex===0){
               while(true){
                    randEnemyIndex=Math.floor(Math.random()*(foes.length+1))

                    if (randEnemyIndex>0){
                        break
                    }
               }
              
            }


           // console.log(randEnemyIndex)

            let foe=foes[randEnemyIndex]


            //displays damage taken by attack used by hero and dmg take zenemy

            hero.attack(randAtk,foe);
            foe.takesDamage(randAtk?.damage);

            //removes dead enemy from array
            if(foe.isDead()){
                let pos=TurnQ[1].indexOf(foe);
                TurnQ[1].splice(pos,1)
            }

            //pushes hero back into array
            TurnQ.push(currentPlayer)

            currentPlayer=TurnQ.shift();


            
        }*/
    }
}
exports.default = Session;
//# sourceMappingURL=Session.js.map