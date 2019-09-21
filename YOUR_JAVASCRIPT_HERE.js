// Write your JS here
const  hero = { 
    name : 'Superman',
    heroic : true,
    inventory : [],
    health : 10,
    weapon : {
        type : 'sword',
        damage : 2
    }
}

const weaponLike = {}

const heroLike = { inventory : [] }

function rest(hero) {
    if (hero.health===10){
        alert('health already has the value 10')
    }
    hero.health = 10
    return hero
}

function pickUpItem(heroLike, weaponLike) {

    addDagger()
    heroLike.inventory.push(weaponLike)
    hero.inventory.push(weaponLike)
}

function addDagger() {
    weaponLike.type = 'dagger'
    weaponLike.damage = 2
}

function equipWeapon(heroLike) {
    if (heroLike.inventory.length === 0){
        return null
    }
   heroLike.weapon = heroLike.inventory[0]
   hero.weapon = hero.inventory[0]
    
}

