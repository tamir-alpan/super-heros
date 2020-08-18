//question
var q1 = new Question("what is your favorite color?", 1, 2,"img/Magician.png")
var q2 = new Question("what is your name?", 2, 2,"img/Magician2.png")

//answers
var a1 = new Answer("blue", 2, 1)
var a2 = new Answer("green", 3, 1)
var a3 = new Answer("yellow", 4, 1)
var a4 = new Answer("gal", 5, 2)
var a5 = new Answer("tamir", 5, 2)
var a6 = new Answer("yosi", 5, 2)
var a7 = new Answer("dani", 5, 2)

//characters
var person = new Person("gal", 37)
var superHero = new SuperHero("ben", 22, "ice cream control")
var terraSuperHero = new TerraSuperHero("jerry", 55, "melting")
var avianSuperHero = new AvianSuperHero("avi", 35, "ars")

// grouping
var questions = [q1, q2]
var answers = [a1, a2, a3, a4, a5, a6, a7]
var instances = [person, superHero, terraSuperHero, avianSuperHero]
