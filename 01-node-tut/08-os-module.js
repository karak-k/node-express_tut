const os=require('os');

//info about current user 
const user =os.userInfo()
console.log(user);


//methos return the system uptime in seconds

console.log(`the uptime is: ${os.uptime()} seconds `)
 
const currnetOs={
    name:os.type(),
    release:os.release(),
    totalmem:os.totalmem(),
    freeMem:os.freemem(),
}

console.log(currnetOs)

console.log(os.homedir())