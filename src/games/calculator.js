import { generateRandomNumber } from '../helpers.js';

const calculate = (num1, num2, operation) => {
  switch (operation) {
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    case '+':
    default:
      return num1 + num2;
  }
};

const generateQuestionData = () => {
  const number1 = generateRandomNumber(0, 100);
  const number2 = generateRandomNumber(0, 100);
  const operation = ['+', '-', '*'][generateRandomNumber(0, 2)];
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
