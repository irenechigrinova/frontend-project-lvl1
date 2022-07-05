import generateRandomNumber from '../helpers/generate-random-number.js';
import runGame from '../index.js';

const DESCRIPTION = 'What is the result of the expression?';
const OPERATIONS = ['+', '-', '*'];

const calculate = (num1, num2, operation) => {
  switch (operation) {
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    case '+':
      return num1 + num2;
    default:
      throw new Error(`Unknown operation: '${operation}'!`);
  }
};

const generateGameData = () => {
  const number1 = generateRandomNumber(0, 100);
  const number2 = generateRandomNumber(0, 100);
  const operation = OPERATIONS[generateRandomNumber(0, OPERATIONS.length - 1)];
  const result = calculate(number1, number2, operation);
  return {
    question: `${number1} ${operation} ${number2}`,
    answer: String(result),
  };
};

export default () => {
  runGame(DESCRIPTION, generateGameData);
};
