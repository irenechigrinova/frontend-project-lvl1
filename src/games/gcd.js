import generateRandomNumber from '../helpers/generate-random-number.js';
import runGame from '../index.js';

const DESCRIPTION = 'Find the greatest common divisor of given numbers.';

const getGDC = (number1, number2) => {
  let gcd = 1;
  for (let i = number1; i >= 1; i -= 1) {
    if (number1 % i === 0 && number2 % i === 0) {
      gcd = i;
      break;
    }
  }
  return gcd;
};

const generateQuestionData = () => {
  const number1 = generateRandomNumber(1, 100);
  const number2 = generateRandomNumber(1, 100);
  const first = Math.min(number1, number2);
  const second = Math.max(number1, number2);

  return {
    question: `${first} ${second}`,
    answer: String(getGDC(first, second)),
  };
};

export default () => {
  runGame(DESCRIPTION, generateQuestionData);
};
