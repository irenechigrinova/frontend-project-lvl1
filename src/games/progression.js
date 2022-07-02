import { generateRandomNumber } from '../helpers.js';

const generateProgression = (start, length, step) => {
  const result = [];
  let currentValue = start;
  for (let i = 0; i < length; i += 1) {
    currentValue = i === 0 ? currentValue : currentValue + step;
    result.push(currentValue);
  }
  return result;
};

const generateQuestionData = () => {
  const progressionLength = generateRandomNumber(5, 10);
  const progressionMissingIndex = generateRandomNumber(0, progressionLength - 1);
  const progressionStep = generateRandomNumber(1, 10);
  const progressionStart = generateRandomNumber(1, 100);

  const progression = generateProgression(progressionStart, progressionLength, progressionStep);
  const progressionMissingValue = progression[progressionMissingIndex];
  progression[progressionMissingIndex] = '..';

  return {
    question: progression.join(' '),
    answer: String(progressionMissingValue),
  };
};

export default () => ({
  ruleText: 'What number is missing in the progression?',
  maxAttempts: 3,
  generateQuestionData,
});
