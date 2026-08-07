class Item{
    constructor(name, imgSrc, desc){
        this.name = name;
        this.imgSrc = imgSrc;
        this.desc = desc
    }
    use(){
        console.log("No item");
    }
}

class Weapon extends Item{
    constructor(name, imgSrc, desc, damage, durability){
        super(name, imgSrc, desc);
        this.damage = damage; 
        this.durability = durability;
    }

    // override
    use(target){
        target.hp -= this.damage;
    }
}

class Heal extends Item{
    constructor(name, imgSrc, desc, healAmount){
        super(name, imgSrc, desc);
        this.healAmount = healAmount;
    }

    use(player){
        if (player.hp < 100){
            player.hp += this.healAmount;
        }
        else{
            return "You have full HP! Cannot heal!";
        }
    }
}

class Potion extends Item{
    constructor(name, imgSrc, desc, effect){
        super(name, imgSrc, desc);
        this.effect = effect;
    }  
}

class DebuffPotion extends Potion{
    constructor(name, imgSrc, desc, effect){
        super(name, imgSrc, desc, effect);
    }

    use(){
        console.log("This does nothing for now");
    }
}

class BuffPotion extends Potion{
    constructor(name, imgSrc, desc, effect){
        super(name, imgSrc, desc, effect);
    }
    use(target){
        target.damage += this.effect;
    }
} 


const rock = new Weapon("Rock", "./assets/items/rock.png", ". . . It's a rock what did you expect?", 10, Infinity);
const sword = new Weapon("Sword", "./assets/items/sword.png", "It's a sword, not the best out there, but you don't have a choice do you?", 20, 3);
const potion = new BuffPotion("Potion", "./assets/items/potion.png", "It has a red liquid inside it, you are kinda curious what would happen if you drink it.", 10);
const waterBottle = new DebuffPotion("Water", "./assets/items/water_bottle.png", "What would you even do with a water bottle spray?", 3);
const bread = new Heal("Bread", "./assets/items/bread.png", "It's a little bit stale but still, not moldy or poisoned (you hope so anyway).", 20);