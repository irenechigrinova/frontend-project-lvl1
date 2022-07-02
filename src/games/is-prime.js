import { generateRandomNumber, checkIsEven } from '../helpers.js';

const checkIsPrime = (number) => {
  let isPrime = true;
  for (let i = 3; i < number; i += 2) {
    if (number % i === 0) {
      isPrime = false;
      break;
    }
  }
  return isPrime;
};

const generateQuestionData = () => {
  const number = generateRandomNumber(1, 100);
  if (number === 1 || checkIsEven(number)) {
    return {
      question: number,
      answer: 'no',
    };
  }

  return {
    question: number,
    answer: checkIsPrime(number) ? 'yes' : 'no',
  };
};

export default () => ({
  ruleText: 'Answer "yes" if given number is prime. Otherwise answer "no".',
  maxAttempts: 3,
  generateQuestionData,
});
