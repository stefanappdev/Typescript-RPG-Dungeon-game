"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Enemy_1 = __importDefault(require("../characters/enemies/enemy_classes/Enemy"));
const dictionary_enemies_1 = __importDefault(require("../dictionaries/dictionary_enemies"));
const readLineSync = require('readline-sync');
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
                console.log(enemy.getCharacterName());
            });
        }
    }
    initateSessionCombat() {
        const manageHeroPhase = async () => {
            /*Allow player to manage hero actions */
            try {
                let hero = this.getHeroPlayer();
                if (hero) {
                    console.log('---HERO PHASE---');
                    console.log('----Attack Options Menu---');
                    let heroClass = hero.getCharacterClass();
                    console.log(`Regular Attacks:`);
                    console.log(`${hero.getRegularAtks().map(atk => console.log(atk.attackName))}`);
                    console.log(`Special Attacks:`);
                    console.log(`${hero.getSpecialAtks().map(atk => console.log(atk.attackName))}`);
                    console.log('input some data here:');
                    const testprocess = async () => {
                        process.stdin.on('data', (input) => {
                            if (input) {
                                console.log(input.toString().trim());
                                async () => {
                                    await process.stdin.on('end', () => {
                                        console.log('destroying process...');
                                        process.stdin.destroy();
                                    });
                                };
                            }
                            else
                                process.stdin.on('error', (err) => {
                                    if (err instanceof Error) {
                                        err.message = 'There was aproblem reading input';
                                        console.log(err);
                                    }
                                });
                        });
                    };
                    testprocess();
                    console.log('Rest of program after porcess');
                }
                else {
                    throw new Error('Error occured in retreiving Hero');
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