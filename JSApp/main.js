const { Worker, isMainThread } = require("worker_threads");
const dataSet = require("../dataSet.json");

if (isMainThread) {
  const numWorkers = 4;
  const chunkSize = Math.ceil(dataSet.length / numWorkers);
  const workers = [];

  for (let i = 0; i < numWorkers; i++) {
    const start = i * chunkSize;
    const end = start + chunkSize;
    const worker = new Worker("./luhnWorker.js", {
      workerData: dataSet.slice(start, end),
    });
    workers.push(worker);

    worker.on("message", (message) => {
      console.log(message);
    });

    worker.on("exit", () => {
      console.log(`Worker ${i} terminé.`);
    });
  }
} else {
}
