
import Session from "./Session";
import Hero from "../characters/Heroes/hero_classes/Hero";
import dictionary_heroes from "../dictionaries/dictionary_heroes";

let testSession:Session=new Session()

let Mike=new Hero("Mike",dictionary_heroes.WARRIOR.hp,dictionary_heroes.WARRIOR.atkPow);

Mike.setHeroInterface(
    dictionary_heroes.WARRIOR.characterClass,
    dictionary_heroes.WARRIOR.isHero,
    dictionary_heroes.WARRIOR.atkSets
)

testSession.setHeroPlayer(Mike);
testSession.generateEnemies();
testSession.initateSessionCombat()


