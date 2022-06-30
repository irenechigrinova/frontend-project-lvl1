import greeting from '../cli.js';
import {
  getUserAnswer,
  showResult,
  getRandomArbitrary,
  validateCalcAnswer,
  showCorrect,
  showError,
} from '../helpers.js';
import {
  MAX_AVAILABLE_NUMBER,
} from '../consts.js';

const MAX_ATTEMPTS = 3;

const generateOperation = () => {
  const operations = ['+', '-', '*'];
  const number = getRandomArbitrary(0, operations.length);
  return operations[number];
};

const calculateResult = (num1, num2, operation) => {
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

const setQuestionData = () => {
  const number1 = getRandomArbitrary(0, MAX_AVAILABLE_NUMBER);
  const number2 = getRandomArbitrary(0, MAX_AVAILABLE_NUMBER);
  const operation = generateOperation();
  const result = calculateResult(number1, number2, operation);
  return {
    text: `${number1} ${operation} ${number2}`,
    result,
  };
};

export default () => {
  const userName = greeting();
  console.log('What is the result of the expression?');

  let counter = MAX_ATTEMPTS;
  let hasError = false;

  while (counter) {
    counter -= 1;

    const { text, result } = setQuestionData();
    console.log(text);

    const userAnswer = getUserAnswer();
    const answerIsValid = validateCalcAnswer(result, userAnswer);
    if (!answerIsValid) {
      showError(userAnswer, result);
      counter = 0;
      hasError = true;
    } else {
      showCorrect();
    }
  }

  showResult(hasError, userName);
};
