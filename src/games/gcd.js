import { generateRandomNumber } from '../helpers.js';

const generateQuestionData = () => {
  const number1 = generateRandomNumber(1, 100);
  const number2 = generateRandomNumber(1, 100);
  const min = Math.min(number1, number2);
  const max = Math.max(number1, number2);

  let gcd = 1;
  for (let i = min; i >= 1; i -= 1) {
    if (number1 % i === 0 && number2 % i === 0) {
      gcd = i;
      break;
    }
  }
  return {
    question: `${min} ${max}`,
    answer: String(gcd),
  };
};

export default () => ({
  ruleText: 'Find the greatest common divisor of given numbers.',
  maxAttempts: 3,
  generateQuestionData,
});
