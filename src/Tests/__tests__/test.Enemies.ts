
import Enemy from "../../characters/enemies/enemy_classes/Enemy";
import dictionary_enemies from "../../dictionaries/dictionary_enemies"
import EnemyInterface from "../../interfaces/enemyInterface";

const generatorEnemies=require('../../../src/BattleManager/generators/generatorEnemies');



let mobgoblin=new Enemy(
    "Mobgoblin",
    dictionary_enemies.GOBLIN.hp,
    dictionary_enemies.GOBLIN.hp,
    dictionary_enemies.GOBLIN.atkPow
);

mobgoblin.setEnemyInterface(
    dictionary_enemies.GOBLIN.characterClass,
    dictionary_enemies.GOBLIN.characterType,
    dictionary_enemies.GOBLIN.isHero,
    dictionary_enemies.GOBLIN.atkSets
)




/**unit test for generation of enemies  */

test('check of enemies created are of enemies and not heroes',async():Promise<void>=>{
    let enemies:Enemy<EnemyInterface>[]=await generatorEnemies();
    expect(enemies.every(enemy=>enemy.isAHero())).toBe(false)
})

/**unit test--check to ensure currentHP is at correct value   */
test('check if Enemy is alive at zero HP ==> should be false',()=>{
    mobgoblin.setEnemyCurrentHP(15)
    expect(mobgoblin.getCurrentHP()).toBe(15);
        
    })

/**unit test--check to ensure currentHP cant be negative  */
test('Enemy Hp should be non-negative',()=>{
    mobgoblin.setEnemyCurrentHP(-1)
    expect(mobgoblin.getCurrentHP()).toBeGreaterThanOrEqual(0);
        
    })

/**unit test--check living state of an enemy  */

test('check if Enemy is alive at zero HP',()=>{
    mobgoblin.setEnemyCurrentHP(0)
    expect(mobgoblin.isAlive()).toBe(false);
        
    })
    


/**unit test--check if hero is actually a hero  */
test('Test if a new hero is a hero not an enemy',async():Promise<void>=>{
    expect(mobgoblin.isAHero()).toBe(false)
})



