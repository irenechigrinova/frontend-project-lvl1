import readlineSync from 'readline-sync';

const MAX_ATTEMPTS = 3;

export default (description, generateQuestionData) => {
  console.log('Welcome to the Brain Games!');

  const userName = readlineSync.question('May I have your name? ');

  console.log(`Hello, ${userName}!`);
  console.log(description);

  for (let i = MAX_ATTEMPTS; i > 0; i -= 1) {
    const { question, answer, error } = generateQuestionData();
    if (error) {
      console.log(`Oops, we've got an error: ${error.message}. Please, restart the game.`);
      process.exit();
    }

    console.log(`Question: ${question}`);

    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer !== answer) {
      console.log(`"${userAnswer}" is wrong answer ;(. Correct answer is "${answer}"`);
      console.log(`Let's try again, ${userName}!`);
      process.exit();
    } else {
      console.log('Correct');
    }
  }

  console.log(`Congratulations, ${userName}!`);
};
