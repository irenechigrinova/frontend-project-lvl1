import readlineSync from 'readline-sync';

export default (generateGameData) => {
  const {
    ruleText, maxAttempts, generateQuestionData,
  } = generateGameData();

  console.log('Welcome to the Brain Games!');

  const userName = readlineSync.question('May I have your name? ');

  console.log(`Hello, ${userName}!`);
  console.log(ruleText);

  let i = maxAttempts;

  for (i; i > 0; i -= 1) {
    const { question, answer } = generateQuestionData();

    console.log(`Question: ${question}`);

    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer !== answer) {
      console.log(`"${userAnswer}" is wrong answer ;(. Correct answer is "${answer}"`);
      break;
    } else {
      console.log('Correct');
    }
  }

  console.log(i === 0 ? `Congratulations, ${userName}!` : `Let's try again, ${userName}!`);
};
