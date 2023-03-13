function getInputFieldValueById(inputFieldId) {
  const inputField = document.getElementById(inputFieldId);
  const inputFieldValueString = inputField.value;
  const inputFieldValue = parseFloat(inputFieldValueString);
  if (inputFieldValue < 0)
  {
    alert('Give a valid number');
    return;
  }
  inputField.value = "";
  return inputFieldValue;
}

function getTextElementValueById(elementId) {
  const textElement = document.getElementById(elementId);
  const textElementValueString = textElement.innerText;
  const textElementValue = parseFloat(textElementValueString);
  return textElementValue;
}

function setTextElementValueById(elementId, newValue) {
  if (isNaN(newValue))
  {
    return;
  }
  const textElement = document.getElementById(elementId);
  textElement.innerText = '';
  textElement.innerText = newValue;
}
