
const fruits = [{name: "apple", color: "red", calories: 95}, 
                {name: "orange", color: "orange", calories: 45}, 
                {name: "banana", color: "yellow", calories: 105}, 
                {name: "coconut", color: "white", calories: 159}, 
                {name: "pineapple", color: "yellow", calories: 37}];

// console.log(fruits[1].calories);

//* push array

// fruits.push({name: "grapes", color: "purple", calories: 62});

// console.log(fruits);

//* pop

// fruits.pop();

// console.log(fruits);

//* splice

// fruits.splice(1, 2);

// console.log(fruits);

//* -------- forEach() --------

// fruits.forEach(fruit => console.log(fruit.calories));

//* -------- map() --------

// const fruitNames = fruits.map(fruit => fruit.name);
// const fruitColors = fruits.map(fruit => fruit.color);
// const fruitCalories = fruits.map(fruit => fruit.calories);

// console.log(fruitNames);
// console.log(fruitColors);
// console.log(fruitCalories);

//* -------- filter() --------

// const yellowFruits = fruits.filter(fruit => fruit.color === "yellow");
// const lowCalFruits = fruits.filter(fruit => fruit.calories < 100);
// const highCalFruits = fruits.filter(fruit => fruit.calories >= 100);

// console.log(yellowFruits);
// console.log(lowCalFruits);
// console.log(highCalFruits);

//* -------- reduce() --------

const maxFruit = fruits.reduce( (max, fruit) => 
                                fruit.calories > max.calories ?
                                fruit : max);

const minFruit = fruits.reduce( (min, fruit) => 
                                fruit.calories < min.calories ?
                                fruit : min);

console.log(maxFruit);
console.log(minFruit);