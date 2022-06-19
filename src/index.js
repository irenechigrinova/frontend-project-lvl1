import greeting from './cli.js';
import {
  generateRuleText,
  getUserAnswer,
  generateQuestion,
  validateAnswer,
  getMaxAttempts,
  showError,
  showResult,
} from './helpers.js';

export default (gameType) => {
  const userName = greeting();
  const maxAttempts = getMaxAttempts(gameType);
  console.log(generateRuleText(gameType));

  let hasError = false;
  let needBreak = false;
  let counter = 0;

  while (!hasError && !needBreak) {
    counter += 1;

    const question = generateQuestion(gameType);
    const userAnswer = getUserAnswer();
    const answerIsValid = validateAnswer(gameType, question, userAnswer);
    if (!answerIsValid) {
      showError(gameType, question, userAnswer);
      hasError = true;
    } else {
      console.log('Correct!');
    }
    if (maxAttempts && counter === maxAttempts) needBreak = true;
  }

  showResult(hasError, userName);
};
