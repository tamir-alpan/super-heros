class Person {
    name;
    age;
    img ='./img/personImg.png'

    constructor(name,age){
        this.name = name    
        this.age = age
    }
}

class SuperHero extends Person {
    superPower;
    img ='./img/superheroImg.jpg'
    constructor(name,age,superPower){
        super(name,age);
        this.superPower = superPower
    }
} 

class AvianSuperHero extends SuperHero {
    FormOfFlight;
    img ='./img/avianSuperHeroimg.jpg'
    constructor (name,age,superPower,FormOfFlight){
        super(name,age,superPower)
        this.FormOfFlight = FormOfFlight
    }
    
}

class TerraSuperHero extends SuperHero {
    wayOfTransporting ;
    img ='./img/terraSuperHeroImg.png'
    constructor (name,age,superPower,wayOfTransporting){
        super(name,age,superPower,wayOfTransporting)
        this.wayOfTransporting = wayOfTransporting
    }
}
