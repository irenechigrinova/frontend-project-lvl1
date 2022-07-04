import { generateRandomNumber } from '../helpers.js';
import runGame from '../index.js';

const DESCRIPTION = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (n) => n % 2 === 0;

const generateQuestionData = () => {
  const number = generateRandomNumber(0, 100);
  return {
    question: String(number),
    answer: isEven(number) ? 'yes' : 'no',
  };
};

export default () => {
  runGame(DESCRIPTION, generateQuestionData);
};
