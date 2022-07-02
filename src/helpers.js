// eslint-disable-next-line import/prefer-default-export
export const generateRandomNumber = (min, max) => Math.floor(Math.random() * (max + 1 - min) + min);

export const checkIsEven = (n) => n % 2 === 0;
