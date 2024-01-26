const { Worker, isMainThread } = require("worker_threads");
const fs = require("fs");

var Luhn = require("luhn-js");

const dataSetPath = "../dataSet.csv";

fs.readFile(dataSetPath, (err, data) => {
  if (err) {
    console.error(err);
    return;
  }

  // enlever la virgule à la fin de chaque ligne
  const dataSetArray = data
    .toString()
    .split("\n")
    .map((row) => row.split(","));

  if (isMainThread) {
    const numWorkers = 4;
    const chunkSize = Math.ceil(dataSetArray.length / numWorkers);
    const workers = [];

    for (let i = 0; i < numWorkers; i++) {
      const start = i * chunkSize;
      const end = start + chunkSize;
      const worker = new Worker("./luhnWorkerCSV.js", {
        workerData: dataSetArray.slice(start, end),
      });
      workers.push(worker);

      worker.on("message", (message) => {
        console.log(message);
      });

      worker.on("exit", () => {
        console.log(`Worker ${i} terminé.`);
      });

      worker.on("error", (err) => {
        console.log(err);
      });
    }
  } else {
  }
});
