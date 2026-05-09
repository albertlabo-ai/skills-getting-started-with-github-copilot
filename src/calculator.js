#!/usr/bin/env node

// Node.js CLI calculator supporting the four basic math operations:
//   +  addition
//   -  subtraction
//   *  multiplication
//   /  division

const [,, leftArg, operator, rightArg] = process.argv;

function printUsage() {
  console.log('Usage: node src/calculator.js <left> <operator> <right>');
  console.log('Supported operators: +, -, *, /');
  console.log('Examples:');
  console.log('  node src/calculator.js 5 + 3');
  console.log('  node src/calculator.js 10 / 2');
}

function isValidNumber(value) {
  return !Number.isNaN(Number(value));
}

if (!leftArg || !operator || !rightArg) {
  console.error('Error: Missing argument(s).');
  printUsage();
  process.exit(1);
}

if (!isValidNumber(leftArg) || !isValidNumber(rightArg)) {
  console.error('Error: Both operands must be valid numbers.');
  printUsage();
  process.exit(1);
}

const left = Number(leftArg);
const right = Number(rightArg);
let result;

switch (operator) {
  case '+':
    result = left + right;
    break;
  case '-':
    result = left - right;
    break;
  case '*':
    result = left * right;
    break;
  case '/':
    if (right === 0) {
      console.error('Error: Division by zero is not allowed.');
      process.exit(1);
    }
    result = left / right;
    break;
  default:
    console.error(`Error: Unsupported operator '${operator}'.`);
    printUsage();
    process.exit(1);
}

console.log(result);
