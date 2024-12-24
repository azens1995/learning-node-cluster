class Fibonacci {
  constructor() {}

  calculateFibonacci(position) {
    if (position == 1) return 0;

    // Return value for n = 2
    if (position == 2) return 1;

    // Recursive call
    return (
      this.calculateFibonacci(position - 1) +
      this.calculateFibonacci(position - 2)
    );
  }
}

module.exports = new Fibonacci();
