
import { attackTypes,attack,  } from "../types/types_attacks";



let goblinRegularAtks:attack[]=[

    {attackName:'goblin punch',
    attackType:attackTypes.REGULAR,
    description:'soft goblin punch' ,
    damage:5}, 

    ];

let goblinSpecialAtks:attack[]=[
    {attackName:'goblin spin kick',
    attackType:attackTypes.SPECIAL,
    description:'critical kick attack ',
    damage:15}
]


let orcRegularAtks:attack[]=[
{attackName:'orc sword slash',
attackType:attackTypes.REGULAR,
description:'light attack with sword',
damage:10},

]

let orcSpecialAtks:attack[]=[
{   attackName:'orc power slash',
    attackType:attackTypes.SPECIAL,
    description:'heavy attack with sword',
    damage:15},
]




let enemies={
    
    GOBLIN:{
        name:'Goblin',
        hp:10,
        characterClass:'GOBLIN',
        characterType:'enemy',
        isHero:false,
        atkSets:{regular:goblinRegularAtks,special:goblinSpecialAtks},
        atkPow:1,
    },
    
    ORC:{
        name:'Orc',
        hp:5,
        characterClass:'ORC',
        characterType:'enemy', 
        isHero:false,
        atkSets:{regular:orcRegularAtks,special:orcSpecialAtks},
        atkPow:3,
    },
   
};


export default enemies




