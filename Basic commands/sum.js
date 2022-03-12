// function sum(a,b) {
//     return a+b;
// }

// console.log(sum(4,5));

const sum = (a,b) => a+b;

// console.log(sum(41,51));

console.log(sum(parseInt(process.argv[2]), parseInt(process.argv[3])));