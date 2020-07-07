const hasCurrency = function(currency, drawer) {
  // if drawer has currency, returns its respective slot.
  let slot;

  for (let idx = 0; idx < drawer.length; idx++) {
    slot = drawer[idx];

    if (slot[0] === currency) {
      return slot;
    }
  }

  return false;
}

module.exports = hasCurrency;