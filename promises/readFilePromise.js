const fs= require("fs");
let readFilePromise = fs.promises.readFile("1.txt", "utf-8");

console.log(readFilePromise);

readFilePromise.then(function(data){
    console.log(readFilePromise);
    console.log("I ran second");
    return "hello";
})
console.log("I ran first");


readFilePromise.then(function(data){
    console.log("I ran last");
})
