
import { attackTypes,attack,  } from "../types/types_attacks";



let mageRegularAtks:attack[]=[

    {attackName:'fireball',
    attackType:attackTypes.REGULAR,
    description:'magic fireball attack',
    damage:10}, 
    {attackName:'staff poke',
    attackType:attackTypes.REGULAR,
    description:'weak staff poke',
    damage:2},
    ];

let mageSpecialAtks:attack[]=[
    {attackName:'inferno',
    attackType:attackTypes.SPECIAL,
    description:'critical attack Fire apell',
    damage:15}
]


let warriorRegularAtks:attack[]=[
{attackName:'sword slash',
attackType:attackTypes.REGULAR,
description:'light attack with sword',
damage:10},

]

let warriorSpecialAtks:attack[]=[
{attackName:'power strike',
attackType:attackTypes.SPECIAL,
description:'deals heavy damage with sword',
damage:15},
]


let archerRegularAtks:attack[]=[{attackName:'bow strike',
                                    attackType:attackTypes.REGULAR,
                                    description:'hit with arrow attack',
                                    damage:10}
                                ]

let archerSpecialAtks:attack[]=[
                                    {attackName:'critical shot',
                                        attackType:attackTypes.SPECIAL,
                                        description:'deals heavy ranged damaged with arrows',
                                    damage:15}]



let heroes={
    MAGE:{characterClass:'mage',
          isHero:true,
        atkSets:{
            regular:mageRegularAtks,
            special:mageSpecialAtks
        },
        hp:45,
        atkPow:30
    },

    WARRIOR:{characterClass:'warrior',
        isHero:true,
        atkSets:{
        regular:warriorRegularAtks,
        special:warriorSpecialAtks
        },
        hp:100,
        atkPow:25
    },

    ARCHER:{characterClass:'archer',
        isHero:true,
        characterType:'hero',
        atkSets:{regular:archerRegularAtks,
        special:archerSpecialAtks
        },
        hp:75,
        atkPow:20}
};


 


export default heroes