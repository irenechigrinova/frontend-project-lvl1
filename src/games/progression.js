import generateRandomNumber from '../helpers/generate-random-number.js';
import runGame from '../index.js';

const DESCRIPTION = 'What number is missing in the progression?';

const generateProgression = (start, length, step) => {
  const result = [];
  for (let i = 0; i < length; i += 1) {
    result[i] = start + (step * i);
  }
  return result;
};

const generateGameData = () => {
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

export default () => {
  runGame(DESCRIPTION, generateGameData);
};
