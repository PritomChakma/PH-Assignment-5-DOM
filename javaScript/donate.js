// noakhali Donate
document.getElementById("donate-1").addEventListener("click", function () {
  // input Money
  const inputDonate1 = document.getElementById("input-donate-1").value;
  const donateMoney1 = parseFloat(inputDonate1);

  // account balance
  const myBalance = document.getElementById("account-balance").innerText;
  const accountBalance = parseFloat(myBalance);
  // donate money amount
  const donateAmount1 = document.getElementById("donate-amount-1").innerText;
  const donateAmountMoney1 = parseFloat(donateAmount1);

  //   count balance
  const recentBalance = accountBalance - donateMoney1;
  const newBalance = donateAmountMoney1 + donateMoney1;
  //   inNaN validation on addMoney
  if (isNaN(donateMoney1)) {
    alert("faield to add Money");
    return;
  } else if (0 <= recentBalance) {
    document.getElementById("account-balance").innerText = recentBalance;
    document.getElementById("donate-amount-1").innerText = newBalance;
  } else {
    alert("No enough money");
  }

  // added money
});
