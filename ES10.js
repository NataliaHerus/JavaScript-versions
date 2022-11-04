                                     /////////////// ES10 ////////////////////

// trimStart(), trimEnd()

const string = ' ES2019!  ';
string.trimStart();
// "ES2019!  "
string.trimEnd();
// " ES2019!"


// fromEntries

console.log("FromEntries: ")
const entries = [ ["student", "PMI-35"] ];
const object = Object.fromEntries(entries);
console.log(object)

console.log("---------------------------------------------------------------------")


//JSON.stringify();
console.log(JSON.stringify('\uD83D'));

//Separator symbols
let separatorText = "\u2029";
console.log(separatorText + "me" + separatorText);

console.log("---------------------------------------------------------------------")

//function.toString()

function /* a comment */ foo() {}

//before 2019
// 'function foo() {}'

console.log(foo.toString())

//Optional catch Binding
//Flat and flatMap, Sort