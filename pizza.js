let orderCount = 0;
let tax = 1.14;
const takeOrder = (topping, crustType) => {
  orderCount ++;
  console.log(`Order: ${crustType} crust pizza topped with ${topping}`);
};

const getSubTotal = (itemCount) => {
  return itemCount * 7.5;
};

const getTotal = (tax, subTotal) => {
  return tax * subTotal;
};

//getTotal = getTotal.toFixed(2);

takeOrder('cheese','thin');
takeOrder('peperoni','regular');
takeOrder('bacon double cheese','thick');
console.log(`Subtotal: $${getSubTotal(orderCount)}0`);
console.log('     Tax:    14%');
console.log(`   Total: $${getTotal(tax, getSubTotal(orderCount))}`);
