'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(`Here is your pasta with ${ing1}, ${ing2}, ${ing3}`);
  },
};

/*
//Distructuring assignment
const arr = [2, 3, 4];
const [a, b, c, d] = arr;
console.log(a, b);

let [main, , secondary] = restaurant.categories;
console.log(main, secondary);

// const temp = main;
// main = secondary;
// secondary = temp;
// console.log(main);

[main, secondary] = [secondary, main];

restaurant.order(2, 0);

const nested = [2, 4, [5, 6]];
const [i, , j] = nested;
console.log(i, j);
const [i1, , [j1, k]] = nested;
console.log(i1, j1, k);

const ingredients = [
  prompt(`Let\'s make pasta! Ingredient 1?`),
  prompt(`Let\'s make pasta! Ingredient 2?`),
  prompt(`Let\'s make pasta! Ingredient 3?`),
];

//spread operator
restaurant.orderPasta(...ingredients);

//REST
const [a2, b2, ...others] = [1, 2, 3, 4, 5];
console.log(a2, b2, others);

const add = function (...numbers) {
  console.log(numbers);
  let sum = 0;
  for (let index = 0; index < numbers.length; index++) {
    sum += numbers[index];
    console.log(sum);
  }
};

add(2, 3);
add(5, 7, 4, 9);
*/
/*
const ordersSet = new Set(['Pasta', 'Pizza', 'Pasta', 'Bread', 'Bread']);

console.log(ordersSet);
console.log(ordersSet.size);
console.log(ordersSet.has('Pizza'));
ordersSet.add('Bread');
ordersSet.delete('Pasta');
ordersSet.clear();
console.log(ordersSet);

const rest = new Map();
rest.set('name', 'Classico Italiano');
rest.set(1, 'Firenze Italy');
console.log(rest.set(2, 'Lisbon, Portugal'));

rest
  .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
  .set('open', 11)
  .set('close', 23)
  .set(true, 'open')
  .set(false, 'close');

console.log(rest.get('name'));
console.log(rest.get(true));
console.log(rest.get(1));

const time = 21;
console.log(rest.get(time > rest.get('open') && time < rest.get('close')));
console.log(rest.has('categories'));
rest.delete(2);

console.log(rest);
console.log(rest.size);
rest.clear();

rest.set([1, 2], 'Test');
console.log(rest);
console.log(rest.get([1, 2])); //undefined because it is not the same array
rest.clear();

const arr = [1, 2];
rest.set(arr, 'Test');
console.log(rest);
console.log(rest.get(arr)); //undefined because it is not the same array
rest.clear();

const rest2 = new Map([
  ['categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic']],
  ['open', 11],
  ['close', 23],
  [true, 'open'],
  [false, 'close'],
]);

console.log(rest2);
*/

/*
//String
const airLine = 'TAP Air Portugal';
const plane = 'A320';

console.log(plane[0]);
console.log('8737'[0]);
console.log(airLine.length);
console.log('8737'.length);
console.log(airLine.indexOf('r'));
console.log(airLine.lastIndexOf('r'));
console.log(airLine.indexOf('portugal')); //-1 Case sensitive
console.log(airLine.indexOf('Portugal'));

console.log(airLine.slice(4));

const announcement = 'My door is the closest door to you :)';
console.log(announcement.replaceAll('door', 'gate'));
*/
