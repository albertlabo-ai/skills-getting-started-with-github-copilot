#!/usr/bin/env node

// Node.js CLI calculator supporting the four basic math operations:
//   +  addition
//   -  subtraction
//   *  multiplication
//   /  division

function add(left, right) {
  return left + right;
}

function subtract(left, right) {
  return left - right;
}

function multiply(left, right) {
  return left * right;
}

function divide(left, right) {
  if (right === 0) {
    throw new Error('Division by zero is not allowed.');
  }
  return left / right;
}

function isValidNumber(value) {
  return !Number.isNaN(Number(value));
}

function parseOperand(value) {
  if (!isValidNumber(value)) {
    throw new Error(`Invalid number: ${value}`);
  }
  return Number(value);
}

function calculate(left, right, operator) {
  switch (operator) {
    case '+':
      return add(left, right);
    case '-':
      return subtract(left, right);
    case '*':
      return multiply(left, right);
    case '/':
      return divide(left, right);
    default:
      throw new Error(`Unsupported operator '${operator}'.`);
  }
}

function printUsage() {
  console.log('Usage: node src/calculator.js <left> <operator> <right>');
  console.log('Supported operators: +, -, *, /');
  console.log('Examples:');
  console.log('  node src/calculator.js 5 + 3');
  console.log('  node src/calculator.js 10 / 2');
}

function runCLI(argv) {
  const [, , leftArg, operator, rightArg] = argv;

  if (!leftArg || !operator || !rightArg) {
    throw new Error('Missing argument(s).');
  }

  const left = parseOperand(leftArg);
  const right = parseOperand(rightArg);

  return calculate(left, right, operator);
}

if (require.main === module) {
  try {
    const result = runCLI(process.argv);
    console.log(result);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    printUsage();
    process.exit(1);
  }
}

module.exports = {
  add,
  subtract,
  multiply,
  divide,
  calculate,
  parseOperand,
  runCLI,
};
