                                            /////////////// ES6 ////////////////////

// Variable declarations with const and let

//ES6
const name = "Tom"
let position = "Junior Dev"

// Arrow functions

console.log("Arrow functions: ")
const numbers = [1, 2, 3]

let result1 = numbers.map(function(number) {
    return 2*number;
})
console.log(result1)

//ES6
let result2 = numbers.map(number => 2*number)
console.log(result2)

console.log("---------------------------------------------------------------------")


//The Spread (...) Operator

console.log("The Spread (...) Operator: ")
const buyInSupermarket = ["Milk", "Tomato", "Apple"];
const buyInService = ["Hammer", "Nails"];

const toBuy = [...buyInSupermarket, ...buyInService];
console.log(toBuy)

console.log("---------------------------------------------------------------------")

//Function Rest Parameter

console.log("Function Rest Parameter: ")
function VallidateShoppingList(...items){
    if(items.indexOf('milk') < 0) {
        return ['milk', ...items];
    }
    return items
}

console.log(VallidateShoppingList('bread', 'potato', 'fish'))

console.log("---------------------------------------------------------------------")


 //The For...Of Loop

console.log("The For..Of Loop: ")
const fruits = ["banana", "orange", "tea"];
let text = "To buy: ";

for (let x of fruits) {
    text += x + " ";
}
console.log(text)

console.log("---------------------------------------------------------------------")

//Classes

//Up to ES6
function Hero1(options) {
    this.name = options.name;
    this.strength = options.strength;
    this.speed = options.speed;
}

Hero1.prototype.powerUp = function() {
    return this.strength += 5;
}

function SuperHero1(options) {
    Hero1.call(this, options)
    this.superPower = options.superPower;
}

//Indicate that the prototype of the SuperHero1 class is the prototype of the Hero1 class.
SuperHero1.prototype = Object.create(Hero1.prototype);
// Specify that the constructor of the SuperHero1 class prototype is the SuperHero1 function.
SuperHero1.prototype.constructor = SuperHero1;

SuperHero1.prototype.speak = function() {
    return 'I am a super hero!!';
}


var superHero1 = new SuperHero1({name: "Mark", strength: 50, speed: 50, superPower: "fly"})

superHero1.powerUp();
superHero1.speak();


//ES6

console.log("Classes: ")
class Hero2{
    constructor(name, strength, speed){
        this._name = name;
        this._strength = strength;
        this._speed = speed;
    }

    powerUp() {
        this._strength += 5;
    }
}

class SuperHero2 extends Hero2 {
    constructor(name, strength, speed, superPower) {
        super(name, strength, speed);
        this._superPower = superPower
    }

    speak(){
        return 'I am a super hero!!';
    }
}
const superHeroDetails = ["Mark", 50, 50,  "fly"];
let superHero2 = new SuperHero2(...superHeroDetails);
console.log(superHero2);

superHero2.powerUp();
console.log(superHero2._strength)
console.log(superHero2.speak());

console.log("---------------------------------------------------------------------")

//Map Objects

console.log("Map Objects: ")
let keyFunction = ()=>{
    return "I am key";
}

let myFriends = new Map();
myFriends.set("Bob", "Luckas");
const lastName = myFriends.get("Bob");
console.log(lastName);

myFriends.set(keyFunction, "I just used a function as a key");
const value = myFriends.get(keyFunction);
console.log(value);

// size property
console.log(myFriends.size)

//also new feature for arrays in ES6 and for objects in ES8
console.log(myFriends.entries())

console.log("---------------------------------------------------------------------")

//Set Objects

console.log("Set Objects: ")
let employeeSet = new Set();

employeeSet.add({
    name: `Jane`,
    position: `CTO`,
    age: `48 years`
})

employeeSet.add({
    name: `Jane`,
    position: `CTO`,
    age: `48 years`
})
console.log(employeeSet)

const obj = {
    name: `Lora`,
    position: `Dev`,
    age: `37 years`
}

let obj1 = obj
employeeSet.add(obj)
employeeSet.add(obj1)

console.log(employeeSet)

console.log("---------------------------------------------------------------------")

//Symbol

//Up to ES5
// -Boolean
// -null
// -undefined
// -Number
// -String
// -Object

console.log("strings: ")
console.log(String(`a`) === String(`a`));
console.log("numbers: ")
console.log(Number(2) === Number(2));
console.log("objects: ")
console.log({} === {});
console.log("undefined: ")
console.log( undefined === undefined);

// THe point... to avoid name collision.
console.log("Symbols: ")
console.log(Symbol()===Symbol())


const car = {
    carColor: "red",
    carModel: "BMW",
};

let price = Symbol('price');
car[price] = 260000000;
console.log(car[price])
console.log(car.price)

console.log("---------------------------------------------------------------------")


//Promises

console.log("Promises: ")
const myPromise = new Promise((myResolve, myReject) => {
    setTimeout(()=> {
        myResolve();
    }, 3000);
});

myPromise
    .then(() => console.log("Finally finished!"))
    .then(() => console.log("I was also run!"))
    .catch(() => console.log("Something went wrong"));

