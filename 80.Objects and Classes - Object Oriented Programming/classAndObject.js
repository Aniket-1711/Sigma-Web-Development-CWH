class Animal{
    constructor(name){
        this.name=name
        console.log("New Animal instance created: ", this.name)
    }

    eats(){
        console.log("Am eating")
    }

    sleeps(){
        console.log("Am sleeping")
    }

    //! Note that we don't use the keyword function to create a function inside a class
    //! Just like python we don't have to specify the or declare the variable before hand, like here we use this.name =name
    //*this.name (name wasn't declared)
}

let dog=new Animal("Ganesh")
dog.eats()
dog.sleeps()

//SYNTAX let's now create a new class named lion and it will inherit the class animal by using extends keyword and also called it's parents constructure using the super keyword
//! Key demonstrations - super and extends keyword
//*This is same as we do it in the java inheritance

class Lion extends Animal{
    constructor(name){
        super(name)
        console.log("Am extending animal and am lion.......")
    }

    roars(){
        console.log("kwaaahrrrr")
    }

    //!Here we will override the method of Animal class, we don't requrie any override annotation as in java to overide a method
    eats(){
        //*i can also call the super class eats method using super.eats()
        super.eats()
        console.log("Lion is eating! Careful don't disturb")
    }
}

let lion=new Lion("shera")
lion.eats()
lion.sleeps()
lion.roars()

dog.eats()

//? There is a operator that is used to check if the object belongs to a particular class or not
//!Note that the object of a class which extends other class will also give true for both the classes
//*Checking using instanceOf operator

console.log(lion instanceof Animal)
console.log(lion instanceof Lion)
console.log(dog instanceof Animal)
console.log(dog instanceof Lion)