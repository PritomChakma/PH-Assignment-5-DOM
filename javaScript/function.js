// for number value

function inputValueById(id) {
  const inpiutValue = document.getElementById(id).value;
  const inputNumber = parseFloat(inpiutValue);
  return inputNumber;
}

// for text inner text

function getTextValuedById(id) {
  const textValue = document.getElementById(id).innerText;
  const textNumber = parseFloat(textValue);
  return textNumber;
}

function showSectionById(id) {
  // hide all the section
  document.getElementById("donation-section").classList.add("hidden");
  document.getElementById("history-section").classList.add("hidden");

  // show the section with the provide id as parameter
  document.getElementById(id).classList.remove("hidden");
}

function makeColor(id) {
  document.getElementById("donation-section").classList.add("hidden");
  document.getElementById("donation-button").style.backgroundColor = "#b4f461";
  document.getElementById("history-button").style.backgroundColor = "#b4f461";
}

function newTab(id) {
  window.location.href = id;
}
