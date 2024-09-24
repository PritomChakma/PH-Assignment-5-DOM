// **********  Noakhali Donate **************
document.getElementById("donate-1").addEventListener("click", function () {
  const inputDonate1 = inputValueById("input-donate-1");
  const inputDonateMoney1 = getTextValuedById("donate-amount-1");
  const myBalance = getTextValuedById("account-balance");

  const recentBalance = myBalance - inputDonate1;
  const newBalance = inputDonate1 + inputDonateMoney1;
  if (isNaN(inputDonate1)) {
    alert("Failed to Transfer");
    return;
  } else if (0 <= inputDonate1 && 0 <= recentBalance) {
    document.getElementById("account-balance").innerText = recentBalance;
    document.getElementById("donate-amount-1").innerText = newBalance;

    // tranjection History
    const p = document.createElement("p");
    p.innerHTML = `
<div  class="alert shadow-lg mt-5">
  <div>
   <div class="text-xl ">
    <div>${inputDonate1} Tk Donated For Food ai Noakhali , Bangladesh</div>
    <div>${new Date().toLocaleString()}</div>
    <div></div>
    </div>
</div>
    `;

    // should be common function
    document.getElementById("tranjection-container").appendChild(p);

    // **********

    // **********
  } else {
    alert("failed");
  }
});

// **********  Feni Donate **************
document.getElementById("donate-2").addEventListener("click", function () {
  const inputDonate2 = inputValueById("input-donate-2");
  const inputDonateMoney2 = getTextValuedById("donate-amount-2");
  const myBalance2 = getTextValuedById("account-balance");

  const recentBalance2 = myBalance2 - inputDonate2;
  const newBalance2 = inputDonate2 + inputDonateMoney2;
  if (isNaN(inputDonate2)) {
    alert("Failed to Transfer");
    return;
  } else if (0 <= inputDonate2 && 0 <= recentBalance2) {
    document.getElementById("account-balance").innerText = recentBalance2;
    document.getElementById("donate-amount-2").innerText = newBalance2;

    // ***** tranjection History *******
    const p = document.createElement("p");
    p.innerHTML = `<div  class="alert shadow-lg mt-5">
  <div>
   <div class="text-xl">
    <div>${inputDonate2} Tk Donated For Food ai Feni , Bangladesh</div>
        <div>${new Date().toLocaleString()}</div>
    <div></div>
    </div>
</div>
    `;

    // should be common function
    document.getElementById("tranjection-container").appendChild(p);
  } else {
    alert("failed");
  }
});

// ******* Aid for Injured in the Quota Movement *********
document.getElementById("donate-3").addEventListener("click", function () {
  const inputDonate3 = inputValueById("input-donate-3");
  const inputDonateMoney3 = getTextValuedById("donate-amount-3");
  const myBalance3 = getTextValuedById("account-balance");

  const recentBalance3 = myBalance3 - inputDonate3;
  const newBalance3 = inputDonate3 + inputDonateMoney3;
  if (isNaN(inputDonate3)) {
    alert("Failed to Transfer");
    return;
  } else if (0 <= inputDonate3 && 0 <= recentBalance3) {
    document.getElementById("account-balance").innerText = recentBalance3;
    document.getElementById("donate-amount-3").innerText = newBalance3;

    // tranjection History
    const p = document.createElement("p");
    p.innerHTML = `
    <div  class="alert shadow-lg mt-5">
  <div>
   <div class="text-xl">
    <div>${inputDonate3} Tk Donated For injure Student in the Quota Movement </div>
        <div>${new Date().toLocaleString()}</div>
    <div></div>
    </div>
</div>
    `;

    // should be common function
    document.getElementById("tranjection-container").appendChild(p);
  } else {
    alert("failed");
  }
});
