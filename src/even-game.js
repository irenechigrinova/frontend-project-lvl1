import readlineSync from 'readline-sync';

import greeting from './cli.js';

const MAX_ATTEMPTS = 3;
const MAX_NUMBER = 101;

const generateNumber = () => {
  const number = Math.floor(Math.random() * MAX_NUMBER);
  const isEven = number % 2 === 0;

  return {
    number,
    isEven,
  };
};

const validateAnswer = (answer, isEven) => {
  const isEvenValid = answer === 'yes' && isEven;
  const isNotEvenValid = answer === 'no' && !isEven;
  return isEvenValid || isNotEvenValid;
};

const setAnswers = (isEven) => ({
  correctAnswer: isEven ? 'yes' : 'no',
  wrongAnswer: isEven ? 'no' : 'yes',
});

const showError = (isEven) => {
  const { correctAnswer, wrongAnswer } = setAnswers(isEven);
  console.log(`"${wrongAnswer}" is wrong answer ;(. Correct answer is "${correctAnswer}"`);
};

const showResult = (hasError, userName) => {
  if (hasError) {
    console.log(`Let's try again, ${userName}`);
  } else {
    console.log(`Congratulations, ${userName}!`);
  }
};

export default () => {
  const userName = greeting();
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  let hasError = false;

  for (let i = 0; i < MAX_ATTEMPTS; i += 1) {
    const { number, isEven } = generateNumber();
    console.log(`Question: ${number}`);
    const userAnswer = readlineSync.question('Your answer: ');
    const answerIsValid = validateAnswer(userAnswer.toLowerCase(), isEven);
    if (!answerIsValid) {
      showError(isEven);
      hasError = true;
      break;
    } else {
      console.log('Correct!');
    }
  }

  showResult(hasError, userName);
};
