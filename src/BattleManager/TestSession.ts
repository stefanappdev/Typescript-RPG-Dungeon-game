
import Session from "./Session";
import Hero from "../characters/Heroes/hero_classes/Hero";
import Enemy from "../characters/enemies/enemy_classes/Enemy";
import dictionary_heroes from "../dictionaries/dictionary_heroes";
import dictionary_enemies from "../dictionaries/dictionary_enemies"
import test from "node:test";

let testSession:Session=new Session()



let orc=new Enemy('orc',dictionary_enemies.ORC.hp,dictionary_enemies.ORC.atkPow)

let Mike=new Hero("Mike",dictionary_heroes.WARRIOR.hp,dictionary_heroes.WARRIOR.atkPow);

Mike.setHeroInterface(
    dictionary_heroes.WARRIOR.characterClass,
    dictionary_heroes.WARRIOR.isHero,
    dictionary_heroes.WARRIOR.atkSets
)


let rokya=new Hero("rokya",dictionary_heroes.MAGE.hp,dictionary_heroes.MAGE.atkPow);

rokya.setHeroInterface(
    dictionary_heroes.MAGE.characterClass,
    dictionary_heroes.MAGE.isHero,
    dictionary_heroes.MAGE.atkSets
)



let ajax=new Hero("ajax",dictionary_heroes.ARCHER.hp,dictionary_heroes.ARCHER.atkPow);

ajax.setHeroInterface(
    dictionary_heroes.ARCHER.characterClass,
    dictionary_heroes.ARCHER.isHero,
    dictionary_heroes.ARCHER.atkSets
)


orc.setEnemyInterface(
    dictionary_enemies.ORC.characterClass,
    dictionary_enemies.ORC.characterType,
    dictionary_enemies.ORC.isHero,
    dictionary_enemies.ORC.atkSets
)

//testSession.setHeroPlayer(ajax);
//testSession.setHeroPlayer(Mike);
testSession.setHeroPlayer(rokya)
testSession.generateEnemies();
let Enemies=testSession?.getSessionEnemies();
if(Enemies){
    testSession.setSessionQ(rokya,Enemies)
}

testSession.initateSessionCombat()
