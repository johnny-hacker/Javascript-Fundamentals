


function love_generator() {
    var n = Math.random();
   n = Math.floor(n * 100 + 1);
    return n
}

var name1 = prompt("Name 1 :");
var name2 = prompt("Name 2 :");

var percentage = love_generator();

console.log(name1 + name2 + " are " + percentage + "in love");