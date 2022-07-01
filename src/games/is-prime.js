import { generateRandomNumber } from '../helpers.js';

const generateQuestionData = () => {
  const number = generateRandomNumber(1, 100);
  const isEven = number % 2 === 0;
  if (number === 1 || isEven) {
    return {
      question: number,
      answer: 'no',
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
    question: number,
    answer: isPrime ? 'yes' : 'no',
  };
};

export default () => ({
  ruleText: 'Answer "yes" if given number is prime. Otherwise answer "no".',
  maxAttempts: 3,
  generateQuestionData,
});
