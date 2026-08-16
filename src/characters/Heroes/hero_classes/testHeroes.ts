import Hero from "./Hero";
import dictionary_heroes from "../../../dictionaries/dictionary_heroes"


let Jarcher=new Hero("John",dictionary_heroes.ARCHER.hp,dictionary_heroes.ARCHER.hp,dictionary_heroes.ARCHER.atkPow);
let Mike=new Hero("Mike",dictionary_heroes.WARRIOR.hp,dictionary_heroes.WARRIOR.hp,dictionary_heroes.WARRIOR.atkPow);

Mike.setHeroInterface(
    dictionary_heroes.WARRIOR.characterClass,
    dictionary_heroes.WARRIOR.isHero,
    dictionary_heroes.WARRIOR.atkSets
)

Jarcher.setHeroInterface(
    dictionary_heroes.ARCHER.characterClass,
    dictionary_heroes.ARCHER.isHero,
    dictionary_heroes.ARCHER.atkSets
)

if(Jarcher.isAlive()){
    console.log(`${Jarcher.getCharacterName()} is alive!`)
}

if(Jarcher.isAHero()){
   console.log(`${Jarcher.getCharacterName()} is a Hero!`)  
}



console.log(`what's your class?`,Mike.getCharacterClass());
console.log(`your HP:`,Mike.getCurrentHP())
console.log("Your abilities are?",Mike.getRegularAtks(), Mike.getSpecialAtks())


if(Mike.isAlive()){
    console.log(`${Mike.getCharacterName()} is alive!`)
}

if(Mike.isAHero()){
   console.log(`${Mike.getCharacterName()} is a Hero!`)  
}

Mike.setHeroCurrentHP(0)


console.log(`what's your class?`,Mike.getCharacterClass());
console.log(`your HP:`,Mike.getCurrentHP())
console.log("Your abilities are?",Mike.getRegularAtks(), Mike.getSpecialAtks())

if(Mike.isAlive()===false){
console.log(`The Hero ${Mike.getCharacterName()} has fallen`)
}


