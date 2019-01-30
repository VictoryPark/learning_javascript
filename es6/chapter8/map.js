//214페이지
// const cart = [{name:"Widget", price: 9.95}, {name:"Gadget", price: 22.95}];
// const names = cart.map(x => x.name);
// const prices = cart.map(x => x.price);
// const discountPrices = prices.map(x =>x*0.8);

// console.log(cart);
// console.log(names);
// console.log(prices);
// console.log(discountPrices);

const items = ["Widget", "Gadget"];
const prices = [9.95, 22.95];
const cart = items.map((x,i) => ({name: x, price: prices[i]}));

console.log(cart);