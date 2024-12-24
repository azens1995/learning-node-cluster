const express = require('express');
const fib = require('./fibonacci');
const PORT = 3000;

const app = express();

app.get('/', (req, res) => {
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
