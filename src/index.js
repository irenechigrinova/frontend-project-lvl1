import readlineSync from 'readline-sync';

const MAX_ATTEMPTS_COUNT = 3;

export default (description, generateQuestionData) => {
  console.log('Welcome to the Brain Games!');

  const userName = readlineSync.question('May I have your name? ');

  console.log(`Hello, ${userName}!`);
  console.log(description);

  for (let i = MAX_ATTEMPTS_COUNT; i > 0; i -= 1) {
    try {
      const { question, answer } = generateQuestionData();
      console.log(`Question: ${question}`);

      const userAnswer = readlineSync.question('Your answer: ');
      if (userAnswer !== answer) {
        console.log(`"${userAnswer}" is wrong answer ;(. Correct answer is "${answer}"`);
        console.log(`Let's try again, ${userName}!`);
        return;
      }
      console.log('Correct');
    } catch (error) {
      console.log(`Oops, we've got an error: ${error.message}. Please, restart the game.`);
      return;
    }
  }

  console.log(`Congratulations, ${userName}!`);
};
