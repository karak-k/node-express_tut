//CommonJs ,every file is module(by default)
// These are user defined modules
//Modules- Encapsulated code (only share minimum)

const names=require("./04-names");
const sayHii=require("./05-utils");
const data=require("./06-alternative-flavor");

// here we are just using this module 

require("./07_mind_grenade");
// console.log(data.tryy);

// sayHii('Karan');
// sayHii(names.Yash);
// sayHii(names.Ankush);