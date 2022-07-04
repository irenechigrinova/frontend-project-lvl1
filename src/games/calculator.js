import { generateRandomNumber } from '../helpers.js';
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
      return new Error(`Unknown operation: '${operation}'!`);
  }
};

const generateQuestionData = () => {
  const number1 = generateRandomNumber(0, 100);
  const number2 = generateRandomNumber(0, 100);
  const operation = OPERATIONS[generateRandomNumber(0, 2)];
  const result = calculate(number1, number2, operation);
  return {
    question: `${number1} ${operation} ${number2}`,
    answer: String(result),
    error: typeof result === 'object' ? result : {},
  };
};

export default () => {
  runGame(DESCRIPTION, generateQuestionData);
};
