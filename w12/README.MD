// Code along stuff from private repo
//Part 1:
// Async example:
// let pizza
// function orderPizza () {
//   console.log(`order pizza`)
//   setTimeout(() => {
//   pizza = `🍕`
//   console.log(`${pizza} is ready`)
//   }, 2000)
//   console.log(`pizza was ordered`)
// };

// orderPizza();
// console.log(`call Alan`)
// console.log(`eat ${pizza}`);

//Part 2:
//Async with callbacks
// function orderPizza(callback) {
//   console.log(`Just ordered the pizza!`)
//   setTimeout(() => {
//     const pizza = `🍕`
//     callback(pizza)
//   }, 2000)
// }

// function pizzaReady(pizza) {
//   console.log(`Eat the ${pizza}`)
// }
// orderPizza(pizzaReady)
// console.log(`call Alan`)

//Part 3:
//callback clicks on the dom
// window.addEventListener('click', callback)
//   function callback() {
//     console.log(`clicked`)
//   }

//part 4:
//Call back hell! 
// function thing1(callback) {
//   //call pizza shop
//   callback()
// }

// function thing2(callback) {
//   //order the pizza
//   callback()
// }

// function thing3(callback) {
//   //eat the pizza
//   callback()
// }

// // no logic here, very simple callback hell
// thing1(() => {
//   thing2(() => {
//     thing3()
//   })
// })