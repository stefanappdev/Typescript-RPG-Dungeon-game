import Hero from "../../characters/Heroes/hero_classes/Hero";
import dictionary_heroes from "../../dictionaries/dictionary_heroes"

let Mike=new Hero("Mike",dictionary_heroes.WARRIOR.hp,dictionary_heroes.WARRIOR.hp,dictionary_heroes.WARRIOR.atkPow);
let Jarcher=new Hero("John",dictionary_heroes.ARCHER.hp,dictionary_heroes.ARCHER.hp,dictionary_heroes.ARCHER.atkPow);

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


/**unit tests--check if Hero HP and recvdmg() is functioning properly*/
//test#1 hero current hp should be less than max HP after receiving dmg
test('current HP should be less than max HP after taking DMG',()=>{
Jarcher.recvDMG(20)    
expect(Jarcher.getCurrentHP()).toBeLessThan(Jarcher.getMaxHP())
})


/**unit test--check to ensure currentHP is at correct value   */
test('check if Enemy is alive at zero HP ==> should be false',()=>{
    Mike.setHeroCurrentHP(15)
    expect(Mike.getCurrentHP()).toBe(15);
        
    })

/**unit test--check to ensure currentHP cant be negative  */
test('Hero Hp should be non-negative',()=>{
    Mike.setHeroCurrentHP(-1)
    expect(Mike.getCurrentHP()).toBeGreaterThanOrEqual(0);
        
    })

/**unit test--check if hero is actually a hero  */
test('Test if a new hero is a hero not an enemy',async():Promise<void>=>{
    expect(Mike.isAHero()).toBe(true)
})



/**unit test--check living state of an hero  */
test('check if hero is alive at zero HP ==> should be false',()=>{
    Mike.setHeroCurrentHP(0)
    expect(Mike.isAlive()).toBe(false);
        
    })