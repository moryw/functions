let orderCount = 0;
let tax = 1.14;
const takeOrder = (topping, crustType) => {
  orderCount ++;
  console.log(`Order: ${crustType} crust pizza topped with ${topping}`);
};

const getSubTotal = (itemCount) => {
  return itemCount * 7.5;
};

const getTax = () => {
  return getSubTotal(orderCount) * 0.06;
};

const getTotal = () => {
  return getSubTotal(orderCount) + getTax();
};

//getTotal = getTotal.toFixed(2);

takeOrder('cheese','thin');
takeOrder('peperoni','regular');
takeOrder('bacon double cheese','thick');
console.log(`Subtotal: $${getSubTotal(orderCount)}0`);
console.log('     Tax:    6%');
console.log(`   Total: $${getTotal()}`);
