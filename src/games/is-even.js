import greeting from '../cli.js';
import {
  getUserAnswer,
  showResult,
  getRandomArbitrary,
  showCorrect,
  showError,
  showQuestion,
} from '../helpers.js';
import {
  MAX_AVAILABLE_NUMBER,
} from '../consts.js';

const validateAnswer = (isEven, answer) => {
  const isEvenValid = answer === 'yes' && isEven;
  const isNotEvenValid = answer === 'no' && !isEven;
  return isEvenValid || isNotEvenValid;
};

const MAX_ATTEMPTS = 3;

export default () => {
  const userName = greeting();
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  let counter = MAX_ATTEMPTS;
  let hasError = false;

  while (counter) {
    counter -= 1;

    const number = getRandomArbitrary(0, MAX_AVAILABLE_NUMBER);
    const isEven = number % 2 === 0;
    showQuestion(number);

    const userAnswer = getUserAnswer();
    const answerIsValid = validateAnswer(isEven, userAnswer);
    if (!answerIsValid) {
      showError(userAnswer, isEven ? 'yes' : 'no');
      counter = 0;
      hasError = true;
    } else {
      showCorrect();
    }
  }

  showResult(hasError, userName);
};
