import helper from '../helpers.js';
import runGame from '../index.js';

const DESCRIPTION = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const { generateRandomNumber } = helper;

const isPrime = (number) => {
  if (number === 1 || number % 2 === 0) return false;

  for (let i = 3; i < number; i += 2) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

const generateQuestionData = () => {
  const number = generateRandomNumber(1, 100);
  return {
    question: String(number),
    answer: isPrime(number) ? 'yes' : 'no',
  };
};

export default () => {
  runGame(DESCRIPTION, generateQuestionData);
};
