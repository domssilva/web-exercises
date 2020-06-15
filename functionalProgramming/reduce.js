let orders = [
  { amount: 250 },
  { amount: 249 },
  { amount: 248 },
  { amount: 247 }
];


let totalAmount = orders.reduce(function(sum, order) {
  return sum + order.amount;
}, 0);

/*
let totalAmount = 0;
for (let i = 0; i < orders.length; i++) {
  totalAmount += orders[i].amount;
}
*/

totalAmount;