import { generateRandomNumber } from '../helpers.js';

const generateQuestionData = () => {
  const progressionLength = generateRandomNumber(5, 10);
  const progressionMissingValue = generateRandomNumber(0, progressionLength - 1);
  const progressionStep = generateRandomNumber(1, 10);
  const progressionStart = generateRandomNumber(1, 100);

  const result = [];
  let missingNumber;
  let currentValue = progressionStart;
  for (let i = 0; i < progressionLength; i += 1) {
    currentValue = i === 0 ? currentValue : currentValue + progressionStep;
    if (i === progressionMissingValue) {
      result.push('..');
      missingNumber = currentValue;
    } else {
      result.push(currentValue);
    }
  }

  return {
    question: result.join(' '),
    answer: String(missingNumber),
  };
};

export default () => ({
  ruleText: 'What number is missing in the progression?',
  maxAttempts: 3,
  generateQuestionData,
});
