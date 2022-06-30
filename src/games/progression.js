import greeting from '../cli.js';
import {
  getUserAnswer,
  showResult,
  getRandomArbitrary,
  validateCalcAnswer,
  showCorrect,
  showError,
} from '../helpers.js';

const setQuestionData = () => {
  const arrayLength = getRandomArbitrary(5, 10);
  const emptyNumber = getRandomArbitrary(0, arrayLength - 1);
  const progressionValue = getRandomArbitrary(1, 10);
  const startingNumber = getRandomArbitrary(1, 100);

  const result = [];
  let missingNumber;
  let currentValue = startingNumber;
  for (let i = 0; i < arrayLength; i += 1) {
    currentValue = i === 0 ? currentValue : currentValue + progressionValue;
    if (i === emptyNumber) {
      result.push('..');
      missingNumber = currentValue;
    } else {
      result.push(currentValue);
    }
  }

  return {
    text: result.join(' '),
    result: missingNumber,
  };
};

const MAX_ATTEMPTS = 3;

export default () => {
  const userName = greeting();
  console.log('What number is missing in the progression?');

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
