function convertTemperature() {
  // Get input values
  const temperature = parseFloat(document.getElementById('temperature').value);
  const fromUnit = document.getElementById('from').value;
  const toUnit = document.getElementById('to').value;

  // Perform conversion
  let result;
  if (fromUnit === 'celsius' && toUnit === 'fahrenheit') {
      result = (temperature * 9/5) + 32;
  } else if (fromUnit === 'celsius' && toUnit === 'kelvin') {
      result = temperature + 273.15;
  } else if (fromUnit === 'fahrenheit' && toUnit === 'celsius') {
      result = (temperature - 32) * 5/9;
  } else if (fromUnit === 'fahrenheit' && toUnit === 'kelvin') {
      result = (temperature - 32) * 5/9 + 273.15;
  } else if (fromUnit === 'kelvin' && toUnit === 'celsius') {
      result = temperature - 273.15;
  } else if (fromUnit === 'kelvin' && toUnit === 'fahrenheit') {
      result = (temperature - 273.15) * 9/5 + 32;
  } else {
      result = temperature; // If same units selected
  }

  // Display result
  document.getElementById('result').innerHTML = `${temperature} ${fromUnit} is ${result.toFixed(2)} ${toUnit}`;
  document.getElementById('result').style.display = 'block';
}
// Get the button element
let convertButton = document.getElementById('convert');
convertButton.addEventListener('click', function() {
window.scrollTo({
  top: 0,
  behavior: "smooth"
});
});