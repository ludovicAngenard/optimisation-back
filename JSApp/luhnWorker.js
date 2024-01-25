const { parentPort, workerData } = require("worker_threads");

var Luhn = require("luhn-js");

const dataSet = workerData;

const results = dataSet.map((data) => {
  return { result: luhnIsValid(data) };
});

parentPort.postMessage(results);

function luhnIsValid(data) {
  const isValid = Luhn.isValid(data.toString());

  return `Le numéro ${data} est ${isValid ? "valide" : "invalide"}`;
}
