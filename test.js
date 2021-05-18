// const obj = {
//     name: 10,
//     size: 20,
//     data: {
//         x: 10,
//         y: 20
//     },
//     sum(){
//       return this.data.x + this.data.y  
//     }
// }
// let {x} = obj.data
// // let x = obj.data.x
// console.log(obj.sum())

class Enemy {
    constructor(hp, damage, speed, color) {
        this.hp = hp;
        this.damage = damage;
        this.speed = speed;
        this.color = color;
    }
    attack(target) {
        target.hp = target.hp - this.damage
    }
}
class Zombie extends Enemy {
    constructor(hp, damage, speed, color) {
        super(hp, damage, speed, color)
    }
}
const zombie = new Zombie(100, 10, 5, "green")
const zombie1 = new Zombie(100, 10, 5, "green")
zombie.attack(zombie1)
zombie1.attack(zombie)
zombie.attack(zombie1)
console.log(zombie1.hp)


// function square(x){
//     return Math.pow(x, 2)
// }
square = (x, y) => { Math.random() * x; return Math.pow(x, y) }

console.log(square(2, 2))
