import { generateRandomNumber } from '../helpers.js';
import runGame from '../index.js';

const DESCRIPTION = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (number) => {
  if (number === 1 || number % 2 === 0) return false;

  let result = true;
  for (let i = 3; i < number; i += 2) {
    if (number % i === 0) {
      result = false;
      break;
    }
  }
  return result;
};

const generateQuestionData = () => {
  const number = generateRandomNumber(1, 100);
  return {
    question: String(number),
    answer: isPrime(number) ? 'yes' : 'no',
    error: null,
  };
};

export default () => {
  runGame(DESCRIPTION, generateQuestionData);
};
