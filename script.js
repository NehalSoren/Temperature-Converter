const button = document.getElementById('convert');

const inputNum = document.getElementById('inputNum');
const inputTemp = document.getElementById('tempInput');

const celsiusResult = document.getElementById('celsius');
const fahrenResult = document.getElementById('fahren');
const kelvinResult = document.getElementById('kelvin');

function convert() {
  const tempNum = parseFloat(inputNum.value);
  const temp = inputTemp.value;
  
  if (temp === 'Celsius') {
    celsius = tempNum;
    fahren = (tempNum * 9/5) + 32;
    kelvin = tempNum + 273.15;
  } else if (temp === 'Fahrenheit') {
    celsius = (tempNum - 32) * 5/9;
    fahren = tempNum;
    kelvin = (tempNum - 32) * 5/9 + 273.15;
  } else if (temp === 'Kelvin') {
    celsius = tempNum - 273.15;
    fahren = (tempNum - 273.15) * 9/5 + 32;
    kelvin = tempNum;
  }
  
  celsiusResult.innerHTML = celsius.toFixed(2);
  fahrenResult.innerHTML = fahren.toFixed(2);
  kelvinResult.innerHTML = kelvin.toFixed(2);
}

button.addEventListener('click', convert);