const getMoneyValue = require('./getMoneyValue');

const collectChange = function(change, cid) {
  /*
  returns the amount of each currency needed 
  to return the change
  */

  let slot, currency;
  let sum = 0;
  let slotSum = 0;
  let moneyInSlot = 0; 
  let currencyValue = 0;                  // needs to match the change value
  let usedCurrencies = [];      // stores used currencies + their sum (same as the cid format, a 2D array)
  
  // iterate over each slot
  for (let idx = 0; idx < cid.length; idx++) {
    slot = cid[idx];
    currency = slot[0];
    moneyInSlot = slot[1];
    currencyValue = getMoneyValue(currency);

    // if enough money was collected, break loop
    if (sum === change) {
      break;
    }

    // get all the money in this specific slot until it's empty
    while (moneyInSlot > 0 && parseFloat((sum + currencyValue).toFixed(2)) <= change) {
      sum = parseFloat((sum + currencyValue).toFixed(2)); // sum checks when we reache the amount for the change
      slotSum = parseFloat((slotSum + currencyValue).toFixed(2));      // this value will be need for usedCurrencies
      cid[idx][1] = parseFloat((cid[idx][1] - currencyValue).toFixed(2));  // subtract value from cid
      moneyInSlot = slot[1];         // update money in slot value
    }

    // after collecting the amount, update the usedCurrencies array
    slotSum > 0 ? usedCurrencies.push([currency, slotSum]) : null;
    slotSum = 0;
  }
  
  return usedCurrencies;
}

module.exports = collectChange;
