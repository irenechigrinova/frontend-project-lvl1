import readlineSync from 'readline-sync';

export const getUserAnswer = () => readlineSync.question('Your answer: ');

export const validateCalcAnswer = (result, answer) => result === parseInt(answer, 10);

export const showResult = (hasError, userName) => {
  if (hasError) {
    console.log(`Let's try again, ${userName}!`);
  } else {
    console.log(`Congratulations, ${userName}!`);
  }
};

export const getRandomArbitrary = (min, max) => Math.floor(Math.random() * (max - min) + min);

export const showCorrect = () => {
  console.log('Correct');
};

export const showError = (wrongAnswer, correctAnswer) => {
  console.log(`"${wrongAnswer}" is wrong answer ;(. Correct answer is "${correctAnswer}"`);
};
