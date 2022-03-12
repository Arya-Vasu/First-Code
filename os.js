const os = require('os');
console.log("Total RAM available", os.totalmem());
console.log("Total RAM available in GBs", os.totalmem()/1024/1024/1024);
console.log("Total RAM available", os.totalmem()/Math.pow(1024, 3));

console.log("Free RAM", os.freemem()/Math.pow(1024, 3));
console.log("OS Version", os.version());
console.log("OS CPU", os.cpus());