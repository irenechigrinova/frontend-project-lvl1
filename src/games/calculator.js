import helper from '../helpers.js';
import runGame from '../index.js';

const DESCRIPTION = 'What is the result of the expression?';
const OPERATIONS = ['+', '-', '*'];

const { generateRandomNumber } = helper;

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

const generateQuestionData = () => {
  const number1 = generateRandomNumber(0, 100);
  const number2 = generateRandomNumber(0, 100);
  const operation = OPERATIONS[generateRandomNumber(0, 2)];
  const result = calculate(number1, number2, operation);
  return {
    question: `${number1} ${operation} ${number2}`,
    answer: String(result),
  };
};

export default () => {
  runGame(DESCRIPTION, generateQuestionData);
};
