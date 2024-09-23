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
