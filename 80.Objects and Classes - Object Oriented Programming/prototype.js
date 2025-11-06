//*Let's now create a object and let's make it extend another object so that the extending object can also access the properties of the other object

let animal={
    eats:true
}

let dog={
    smells:true
}

console.log(animal)
console.log(animal.eats)
console.log(dog)
console.log(dog.smells)

dog.__proto__=animal  //! Kind of extending an object

console.log(dog.eats)
console.log(dog.smells)
//*Now the dog object is able to access the properties of animal also

