const hasCurrency = require('./hasCurrency');

  const updateCid = function(cid, change) {
    let slot, moneyInSlot, currency, changeSlot;
    // iterate over each slot in cid
    for (let idx = 0; idx < cid.length; idx++) {
      slot = cid[idx];
      currency = slot[0];
      moneyInSlot = slot[1];
      changeSlot = hasCurrency(currency, change);
      // verify if this slot's currency is present in change
      if (changeSlot) {
        cid[idx][1] = Math.abs(parseFloat((moneyInSlot - changeSlot[1]).toFixed(2)));
      }

      // if false: go to next slot
    }

    return cid;

  }

module.exports = updateCid;
