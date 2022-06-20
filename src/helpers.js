import readlineSync from 'readline-sync';

export const GAME_TYPES = {
  even: 'even',
  calculator: 'calculator',
  gcd: 'gcd',
  progression: 'progression',
  prime: 'prime',
};

const MAX_AVAILABLE_NUMBER = 101;

export const generateNumber = (maxNumber) => {
  const number = Math.floor(Math.random() * maxNumber);
  const isEven = number % 2 === 0;

  return {
    number,
    isEven,
  };
};

const getRandomArbitrary = (min, max) => Math.floor(Math.random() * (max - min) + min);

const validateEvenAnswer = (question, answer) => {
  const isEvenValid = answer === 'yes' && question.isEven;
  const isNotEvenValid = answer === 'no' && !question.isEven;
  return isEvenValid || isNotEvenValid;
};

const validatePrimeAnswer = (question, answer) => {
  const isEvenValid = answer === 'yes' && question.isPrime;
  const isNotEvenValid = answer === 'no' && !question.isPrime;
  return isEvenValid || isNotEvenValid;
};

const validateCalcAnswer = (question, answer) => question.result === parseInt(answer, 10);

const generateAnswerFeedback = (gameType, question, answer) => {
  switch (gameType) {
    case GAME_TYPES.even:
    case GAME_TYPES.prime:
      return {
        correctAnswer: question.isEven || question.isPrime ? 'yes' : 'no',
        wrongAnswer: question.isEven || question.isPrime ? 'no' : 'yes',
      };
    case GAME_TYPES.calculator:
    case GAME_TYPES.gcd:
    case GAME_TYPES.progression:
      return {
        correctAnswer: question.result,
        wrongAnswer: answer,
      };
    default:
      return { wrongAnswer: '', correctAnswer: '' };
  }
};

const setEvenQuestionData = () => {
  const { number, isEven } = generateNumber(MAX_AVAILABLE_NUMBER);
  return {
    text: number,
    isEven,
  };
};

const generateOperation = () => {
  const operations = ['+', '-', '*'];
  const { number } = generateNumber(operations.length);
  return operations[number];
};

const calculateResult = (num1, num2, operation) => {
  switch (operation) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    default:
      return 0;
  }
};

const setCalcQuestionData = () => {
  const { number: number1 } = generateNumber(MAX_AVAILABLE_NUMBER);
  const { number: number2 } = generateNumber(MAX_AVAILABLE_NUMBER);
  const operation = generateOperation();
  const result = calculateResult(number1, number2, operation);
  return {
    text: `${number1} ${operation} ${number2}`,
    result,
  };
};

const setGcdQuestionData = () => {
  const { number: number1 } = generateNumber(MAX_AVAILABLE_NUMBER);
  const { number: number2 } = generateNumber(MAX_AVAILABLE_NUMBER);
  const min = Math.min(number1, number2);
  const max = Math.max(number1, number2);

  let gcd = 1;
  for (let i = min; i >= 1; i -= 1) {
    if (number1 % i === 0 && number2 % i === 0) {
      gcd = i;
      break;
    }
  }
  return {
    text: `${min} ${max}`,
    result: gcd,
  };
};

const setProgressionQuestionData = () => {
  const arrayLength = getRandomArbitrary(5, 10);
  const emptyNumber = getRandomArbitrary(0, arrayLength - 1);
  const progressionValue = getRandomArbitrary(1, 10);
  const startingNumber = getRandomArbitrary(1, 100);

  const result = [];
  let missingNumber;
  let currentValue = startingNumber;
  for (let i = 0; i < arrayLength; i += 1) {
    currentValue = i === 0 ? currentValue : currentValue + progressionValue;
    if (i === emptyNumber) {
      result.push('..');
      missingNumber = currentValue;
    } else {
      result.push(currentValue);
    }
  }

  return {
    text: result.join(' '),
    result: missingNumber,
  };
};

const setPrimeQuestionData = () => {
  const { number, isEven } = generateNumber(MAX_AVAILABLE_NUMBER);
  if (number === 1) {
    return {
      text: number,
      isPrime: false,
    };
  }
  if (isEven) {
    return {
      text: number,
      isPrime: false,
    };
  }
  let isPrime = true;
  for (let i = 3; i < number; i += 2) {
    if (number % i === 0) {
      isPrime = false;
      break;
    }
  }
  return {
    text: number,
    isPrime,
  };
};

export const showResult = (hasError, userName) => {
  if (hasError) {
    console.log(`Let's try again, ${userName}!`);
  } else {
    console.log(`Congratulations, ${userName}!`);
  }
};

export const showError = (gameType, question, answer) => {
  const { wrongAnswer, correctAnswer } = generateAnswerFeedback(gameType, question, answer);
  console.log(`"${wrongAnswer}" is wrong answer ;(. Correct answer is "${correctAnswer}"`);
};

export const getUserAnswer = () => readlineSync.question('Your answer: ');

export const generateRuleText = (gameType) => {
  switch (gameType) {
    case GAME_TYPES.even:
      return 'Answer "yes" if the number is even, otherwise answer "no".';
    case GAME_TYPES.calculator:
      return 'What is the result of the expression?';
    case GAME_TYPES.gcd:
      return 'Find the greatest common divisor of given numbers.';
    case GAME_TYPES.progression:
      return 'What number is missing in the progression?';
    case GAME_TYPES.prime:
      return 'Answer "yes" if given number is prime. Otherwise answer "no".';
    default:
      return '';
  }
};

export const getMaxAttempts = (gameType) => {
  switch (gameType) {
    case GAME_TYPES.even:
    case GAME_TYPES.calculator:
    case GAME_TYPES.gcd:
    case GAME_TYPES.progression:
    case GAME_TYPES.prime:
      return 3;
    default:
      return 0;
  }
};

export const generateQuestion = (gameType) => {
  let questionData;

  switch (gameType) {
    case GAME_TYPES.even:
      questionData = setEvenQuestionData();
      break;
    case GAME_TYPES.calculator:
      questionData = setCalcQuestionData();
      break;
    case GAME_TYPES.gcd:
      questionData = setGcdQuestionData();
      break;
    case GAME_TYPES.progression:
      questionData = setProgressionQuestionData();
      break;
    case GAME_TYPES.prime:
      questionData = setPrimeQuestionData();
      break;
    default:
      questionData = { text: '' };
      break;
  }

  console.log(`Question: ${questionData.text}`);
  return questionData;
};

export const validateAnswer = (gameType, question, answer) => {
  switch (gameType) {
    case GAME_TYPES.even:
      return validateEvenAnswer(question, answer);
    case GAME_TYPES.calculator:
    case GAME_TYPES.gcd:
    case GAME_TYPES.progression:
      return validateCalcAnswer(question, answer);
    case GAME_TYPES.prime:
      return validatePrimeAnswer(question, answer);
    default:
      return false;
  }
};
