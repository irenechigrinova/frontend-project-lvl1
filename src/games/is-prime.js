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

const setQuestionData = () => {
  const number = getRandomArbitrary(1, MAX_AVAILABLE_NUMBER);
  const isEven = number % 2 === 0;
  if (number === 1) {
    return {
      text: number,
      isPrime: false,
    };
  }
  if (isEven) {
    return {
      text: number,
      isPrime: false,
    };
  }
  let isPrime = true;
  for (let i = 3; i < number; i += 2) {
    if (number % i === 0) {
      isPrime = false;
      break;
    }
  }
  return {
    text: number,
    isPrime,
  };
};

const validateAnswer = (isPrime, answer) => {
  const isEvenValid = answer === 'yes' && isPrime;
  const isNotEvenValid = answer === 'no' && !isPrime;
  return isEvenValid || isNotEvenValid;
};

const MAX_ATTEMPTS = 3;

export default () => {
  const userName = greeting();
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

  let counter = MAX_ATTEMPTS;
  let hasError = false;

  while (counter) {
    counter -= 1;

    const { text, isPrime } = setQuestionData();
    showQuestion(text);

    const userAnswer = getUserAnswer();
    const answerIsValid = validateAnswer(isPrime, userAnswer);
    if (!answerIsValid) {
      showError(userAnswer, isPrime ? 'yes' : 'no');
      counter = 0;
      hasError = true;
    } else {
      showCorrect();
    }
  }

  showResult(hasError, userName);
};
