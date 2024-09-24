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
}

function newTab(id) {
  window.location.href = id;
  return;
}

// date and time
function formatDateTime(date) {
  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const day = date.getDate().toString().padStart(2, "0");
  const hours = date.getHours().toString().padStart(2, "0");
  const minutes = date.getMinutes().toString().padStart(2, "0");
  const seconds = date.getSeconds().toString().padStart(2, "0");
  const timeZoneOffset = -date.getTimezoneOffset() / 60;
  const timeZone = `UTC${timeZoneOffset >= 0 ? "+" : ""}${timeZoneOffset}`;

  return `${year}-${month}-${day} ${hours}:${minutes}:${seconds} (${timeZone})`;
}
