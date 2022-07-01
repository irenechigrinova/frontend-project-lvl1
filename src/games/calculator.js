import { generateRandomNumber } from '../helpers.js';

const generateOperation = () => {
  const operations = ['+', '-', '*'];
  const number = generateRandomNumber(0, operations.length - 1);
  return operations[number];
};

const calculate = (num1, num2, operation) => {
  switch (operation) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    default:
      return 0;
  }
};

const generateQuestionData = () => {
  const number1 = generateRandomNumber(0, 100);
  const number2 = generateRandomNumber(0, 100);
  const operation = generateOperation();
  const result = calculate(number1, number2, operation);
  return {
    question: `${number1} ${operation} ${number2}`,
    answer: String(result),
  };
};

export default () => ({
  ruleText: 'What is the result of the expression?',
  maxAttempts: 3,
  generateQuestionData,
});
