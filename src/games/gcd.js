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

const setQuestionData = () => {
  const number1 = getRandomArbitrary(1, MAX_AVAILABLE_NUMBER);
  const number2 = getRandomArbitrary(1, MAX_AVAILABLE_NUMBER);
  const min = Math.min(number1, number2);
  const max = Math.max(number1, number2);

  let gcd = 1;
  for (let i = min; i >= 1; i -= 1) {
    if (number1 % i === 0 && number2 % i === 0) {
      gcd = i;
      break;
    }
  }
  return {
    text: `${min} ${max}`,
    result: gcd,
  };
};

const MAX_ATTEMPTS = 3;

export default () => {
  const userName = greeting();
  console.log('Find the greatest common divisor of given numbers.');

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
