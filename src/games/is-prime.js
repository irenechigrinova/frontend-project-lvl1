import generateRandomNumber from '../helpers/generate-random-number.js';
import runGame from '../index.js';

const DESCRIPTION = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (number) => {
  if (number === 1 || number % 2 === 0) return false;

  for (let i = 3; i < Math.floor(number / 2) + 1; i += 2) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

const generateGameData = () => {
  const number = generateRandomNumber(1, 100);
  return {
    question: String(number),
    answer: isPrime(number) ? 'yes' : 'no',
  };
};

export default () => {
  runGame(DESCRIPTION, generateGameData);
};
