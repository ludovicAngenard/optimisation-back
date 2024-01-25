const dataSet = require("../dataSet.json");

var Luhn = require("luhn-js");

dataSet.forEach((data) => {
  const isValid = luhnIsValid(data);

  console.log(`Le numéro ${data} est ${isValid ? "valide" : "invalide"}`);
});

function luhnIsValid(data) {
  const isValid = Luhn.isValid(data.toString());

  return isValid;
}
