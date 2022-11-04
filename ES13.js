                                /////////////// ES13 ////////////////////

//Class

class User {
    name;

    //private field
    #password;

    get #password(){
        return #password;
    }

    //private method
    #clear(){
        this.name = null;
        this.#password = null;
    }

    //static field
    static position ="admin";

    //static method
    static get name(){
        return name;
    }

    //check if this private field is in method
    static hasPassword(obj){
        return #password in obj;
    }
}


//Class Initialization Static Blocks
class User1 {
    static roles;
    name;
    #password;
}

try {
    User1.roles = getRolesFromDb();
} catch {
    User1.roles = getRolesFromBackup();
}
console.log(User1.roles)


//Top-level await

import {getUser} from ''

let user = await getUser();

//in ES12
//SyntaxError: await is only valid in async function


//Available Object.prototype.hasOwnProperty ()

//up to ES12
const obj1 = { foo: 'start' }
let hasFoo1 = Object.prototype.hasOwnProperty.call(obj1, 'foo');
console.log(hasFoo1); //true

//ES13
const obj2 = { foo: 'start' }
let hasFoo2 = Object.hasOwn(obj2, 'foo');
console.log(hasFoo2); //true


//at() method
const array = [0,1,2,3,4,5];

console.log(array[array.length-1]); // 5
console.log(array.at(-1)); //5

console.log(array[array.lenght-2]); // 4
console.log(array.at(-2)); //4