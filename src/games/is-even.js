import { generateRandomNumber } from '../helpers.js';

const generateQuestionData = () => {
  const number = generateRandomNumber(0, 100);
  return {
    question: number,
    answer: number % 2 === 0 ? 'yes' : 'no',
  };
};

export default () => ({
  ruleText: 'Answer "yes" if the number is even, otherwise answer "no".',
  maxAttempts: 3,
  generateQuestionData,
});
