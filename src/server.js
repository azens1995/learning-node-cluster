const express = require('express');
const cluster = require('cluster');
const os = require('os');

const fib = require('./fibonacci');

const PORT = 3000;
const app = express();

const cpuCount = os.cpus().length;

if (cluster.isMaster) {
  console.log(`Total Number of CPU count is ${cpuCount}`);

  for (let i = 0; i < cpuCount; i++) {
    cluster.fork();
  }

  cluster.on('online', (worker) => {
    console.log(`Worker ID is ${worker.id} and PID is ${worker.process.pid}`);
  });

  cluster.on('exit', (worker) => {
    console.log(`Worker ID is ${worker.id} and PID is ${worker.process.pid}`);
    console.log(`Let's fork new cluster.`);
    cluster.fork();
  });
} else {
  app.get('/', (req, res) => {
    console.log(
      `Worker process ID: ${cluster.worker.process.pid} has accepted the requrest.`
    );
    const reqNumber = req.query.number;
    const position = Number.parseInt(reqNumber);

    if (!position) {
      res.send(`<h1>Error parsing the number. Please provide valid number<h1>`);
    }

    const startTime = performance.now();
    const result = fib.calculateFibonacci(position);
    const endTime = performance.now();

    const processingTime = endTime - startTime;

    const msg = `It took ${processingTime} ms to get ${position} Fibonacci Number.`;

    res.send(`<h1>${result}</h1> </br> <p>${msg}</p>`);
  });

  app.listen(PORT, () => {
    console.log(`Server is started and listening on PORT ${PORT}`);
  });
}
