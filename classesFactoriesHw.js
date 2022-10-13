class Hamster {
    constructor (name){
        this.owner = ''
        this.name = name
        this.price= 15
    }
    wheelRun () {
        console.log("squeak squeak")
    }
    eatFood () {
        console.log("nibble nibble")
    }
    getPrice() { //getPrice(price)
        // console.log(price)
        return this.price
    }

}

const broski = new Hamster("Broski the Third")
//broski.wheelRun()
//broski.eatFood()
console.log(broski.getPrice())

class Person {
    constructor (name) {
        this.name = name
        this.age = 0
        this.height = 0 
        this.weight = 0
        this.mood = 0 
        this.hamsters = []
        this.bankAccount = 0
    }
    getName (name) {
        return name
    }
    getAge() {
        return this.age
    }
    getWeight() {
        return this.weight
    }
    greet (person) {
        console.log(`Hey there ${person}`)
    }
    eat () {
        this.weight++
        this.mood++
    }
    exercise () {
        this.weight--
    }
    ageUp () {
        this.age++
        this.height++
        this.weight++
        this.mood--
        this.bankAccount+=10
    }
    buyHamster(hamster){
        this.hamsters.push(hamster)
        this.mood +=10
        this.bankAccount -= hamster.getPrice()
    }

}
//1)===================
const timmy = new Person("Timmy")
//console.log(timmy)
//2)================
timmy.ageUp()
timmy.ageUp()
timmy.ageUp()
timmy.ageUp()
timmy.ageUp()
//console.log(timmy)
//3)=================
timmy.eat()
timmy.eat()
timmy.eat()
timmy.eat()
timmy.eat()
//console.log(timmy)
//4)===============
timmy.exercise()
timmy.exercise()
timmy.exercise()
timmy.exercise()
timmy.exercise()
//console.log(timmy)
//5)=================
timmy.ageUp()
timmy.ageUp()
timmy.ageUp()
timmy.ageUp()
timmy.ageUp()
timmy.ageUp()
timmy.ageUp()
timmy.ageUp()
timmy.ageUp()
//console.log(timmy)
//6)=============
const gus = new Hamster("Gus")
//7)==============
gus.owner = "Timmy"
//console.log(gus.owner)
//8)===============
timmy.buyHamster(gus)
//console.log(timmy)
//9)================
timmy.ageUp()
timmy.ageUp()
timmy.ageUp()
timmy.ageUp()
timmy.ageUp()
timmy.ageUp()
timmy.ageUp()
timmy.ageUp()
timmy.ageUp()
timmy.ageUp()
timmy.ageUp()
timmy.ageUp()
timmy.ageUp()
timmy.ageUp()
//console.log(timmy)
//10)===========
timmy.eat()
timmy.eat()
//console.log(timmy)
//11)=============
timmy.exercise()
timmy.exercise()
//console.log(timmy)


class Dinner {
    constructor(appParam,entreeParam,dessertParam) {
        this.appetizer = appParam
        this.entree = entreeParam
        this.dessert = dessertParam
    }

}

class Chef {
    constructor (name) {
        this.name =name
        this.dinners = []
    }
        createDinner (appParm,entreeParam,dessertParam) {
        const newDinner = new Dinner(appParm,entreeParam,dessertParam)
        this.dinners.push(newDinner)

    }

}
const bro = new Chef ("brobro")

bro.createDinner("Wing","Steak","Carrot Cake")
bro.createDinner("Baked Potato","Rotisserie Chicken","Tres Leche")
bro.createDinner("Spring Rolls","Alfredo pasta","Tiramisu")
console.log(bro)

// static createDinner (meal,meal1,meal2) {
//     console.log(new Dinner(meal,meal1,meal2))
  

// }