class Zombie{
    isHungry=true;
    infectionRate='100%';
    weakness='fire';
    constructor(hp, attack, speed, perception){
        this.hp = hp;
        this.attack = attack;
        this.speed = speed;
        this.perception=perception;
    }
    bite(){
        console.log('om nom nom');
    }
    follow(){
        console.log('its getting closer')
     }
}

class MegaZombie extends Zombie{
    size='Giant!'

    constructor( attack, speed, perception,armorLevel){
        super(hp, attack, speed, perception);
        this.hp= 10000;
        this.armorLevel = armorLevel
    }
    bite(){
        console.log('one hit kill!');
    }
}

let zombie1 = new Zombie(100,25,3,'low');
let zombie2= new MegaZombie(1000,20,30,'mid',200);
zombie2.bite();