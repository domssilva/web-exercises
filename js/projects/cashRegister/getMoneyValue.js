getMoneyValue = function(name) {
    let money = {
      "ONE HUNDRED": 100,
      "TWENTY": 20,
      "TEN": 10,
      "FIVE": 5,
      "ONE": 1,
      "QUARTER": 0.25,
      "DIME": 0.1,
      "NICKEL": 0.05,
      "PENNY": 0.01,
  }

  for (let currency in money) {
    if (currency === name) {
      return money[name];
    }
  }

  return false;

}

module.exports = getMoneyValue;
