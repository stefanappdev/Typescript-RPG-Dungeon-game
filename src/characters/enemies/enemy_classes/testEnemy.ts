import Enemy from "./Enemy";
import dictionary_enemies from "../../../dictionaries/dictionary_enemies"



let orc=new Enemy('orc',dictionary_enemies.ORC.hp,dictionary_enemies.ORC.atkPow)
let mobgoblin=new Enemy("Mobgoblin",dictionary_enemies.GOBLIN.hp,dictionary_enemies.GOBLIN.atkPow);

orc.setEnemyInterface(
    dictionary_enemies.ORC.characterClass,
    dictionary_enemies.ORC.characterType,
    dictionary_enemies.ORC.isHero,
    dictionary_enemies.ORC.atkSets
)

mobgoblin.setEnemyInterface(
    dictionary_enemies.GOBLIN.characterClass,
    dictionary_enemies.GOBLIN.characterType,
    dictionary_enemies.GOBLIN.isHero,
    dictionary_enemies.GOBLIN.atkSets
)

if(mobgoblin.isAlive()){
    console.log(`${mobgoblin.getCharacterName()} is alive!`)
}

if(mobgoblin.isAHero()){
   console.log(`${mobgoblin.getCharacterName()} is a Hero!`)  
}



console.log(`what's your class?`,mobgoblin.getCharacterClass());
console.log(`your HP:`,mobgoblin.getCurrentHP())
console.log("Your abilities are?",mobgoblin.getRegularAtks(), mobgoblin.getSpecialAtks())


if(mobgoblin.isAlive()){
    console.log(`${mobgoblin.getCharacterName()} is alive!`)
}

if(mobgoblin.isAHero()){
   console.log(`${mobgoblin.getCharacterName()} is a Hero!`)  
}

mobgoblin.setEnemyHP(0)
if(mobgoblin.isDead()){
console.log(`The enemy ${mobgoblin.getCharacterName()} has fallen`)
}

console.log(`what's your class?`,orc.getCharacterClass());
console.log(`your HP:`,orc.getCurrentHP())
console.log("Your abilities are?",orc.getRegularAtks(), orc.getSpecialAtks())




