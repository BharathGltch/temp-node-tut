const os=require('os');

//get the user info

const user=os.userInfo();
console.log(user);
// gety the uptime

console.log(`The system uptime is ${os.type()} seconds`);