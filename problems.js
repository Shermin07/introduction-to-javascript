var fruits = ["Apple", "Banana" , "Orange"];
var positionIndex = fruits.indexOf("Banana");
console.log(positionIndex);
fruits[1] = "Mango";
console.log(fruits);

var fruits = ["Apple", "Banana" , "Orange"];
fruits.pop("Orange");
fruits.push("Watermelon");
console.log(fruits);
