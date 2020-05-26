const collectChange = require('./collectChange');
const updateCid = require('./updateCid');

function checkCashRegister(price, cash, cid) {
  let slot, dueChange;
  let sumPossibilities = 0;
  let possibilities = [];
  let change = cash - price;
  cid = cid.reverse();

  // iterate over each slot in the drawer
  for (let idx = 0; idx < cid.length; idx++) {
    slot = cid[idx];
    // is the money in this slot < change ?
    if (getMoneyValue(slot[0]) < change) {
      sumPossibilities += slot[1];
      possibilities.push(slot);
    }
  }
  
  sumPossibilities = sumPossibilities.toFixed(2);
  
  // is there enough cash in the drawer to give the rest?
  if (sumPossibilities < change) {
    return {status: 'INSUFFICIENT_FUNDS', change: []};
  }
  
  // fetch all required currencies
  dueChange = collectChange(change, possibilities);

  //Do we still have money in the drawer?
  let checksum = 0;
  for (let idx = 0; idx < cid.length; idx++) {
    checksum += cid[idx][1];
  }

  // after collecting the change, do we still have money in the drawer?
  return checksum === 0 ? 
  {status: 'CLOSED', change: updateCid(cid, dueChange).reverse()} :
  {status: 'OPEN', change: dueChange };

}

checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]);
checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);
checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);
checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]);