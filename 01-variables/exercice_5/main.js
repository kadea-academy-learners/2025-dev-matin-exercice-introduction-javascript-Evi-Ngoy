// ecrire le code de conversion ici
let celsius;
celsius = 30;

// Conversion Celsius à Fahrenheit
function celsiusToFahrenheit(celsius) {
  // ecrire le code de conversion ici
  let fahrenheit;
  fahrenheit = (celsius * 9/5) + 32;
  console.log(`${celsius}°C vaut : ${fahrenheit}°F`)
  // la ligne suivante ne doit pas être modifiée
  return fahrenheit;
}

// les lignes suivantes ne sont pas à modifier
module.exports = { celsiusToFahrenheit };
