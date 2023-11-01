// Creating a simple object in javascript
var HouseKeeper = {
    name: "Gloria",
    years_experience: 10,
    cleans: "kitchens",
};

console.log("")
console.log(HouseKeeper.name);
console.log(HouseKeeper.years_experience);
console.log(HouseKeeper.cleans);

// now using a constructor function
function HouseKeepers(name, years_experience, cleans) {
    this.name = name;
    this.years_experience = years_experience;
    this.cleans = cleans;
}

var HouseKeeper1 = new HouseKeepers("John", 2, "living rooms");
var HouseKeeper2 = new HouseKeepers("Jane", 5, "Bedrooms");

console.log("")
console.log(HouseKeeper1.name);
console.log(HouseKeeper1.years_experience);
console.log(HouseKeeper1.cleans);

console.log("")
console.log(HouseKeeper2.name);
console.log(HouseKeeper2.years_experience);
console.log(HouseKeeper2.cleans);


// now using a traditional class and constructor notation
class BellBoy {
    constructor(name, years_experience, age) {
        this.name = name;
        this.years_experience = years_experience;
        this.age = age;
    }
}

var BellBoy1 = new BellBoy("Jimmy", 2, 19)
console.log("")
console.log(BellBoy1.name);
console.log(BellBoy1.years_experience);
console.log(BellBoy1.age);

