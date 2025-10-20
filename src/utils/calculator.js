import { ERROR_MESSAGES } from '../constants/error.js';

export const convertToNumbers = (values) => {
  if (!Array.isArray(values)) throw new Error(ERROR_MESSAGES.INVALID_TYPE);

  const numbers = values.map((value) => {
    const num = Number(value);
    if (Number.isNaN(num)) throw new Error(ERROR_MESSAGES.NOT_A_NUMBER);
    return num;
  });

  return numbers;
};

export const sumNumbers = (numbers) => {
  if (!Array.isArray(numbers)) throw new Error(ERROR_MESSAGES.INVALID_TYPE);

  const sum = numbers.reduce((acc, cur) => acc + cur, 0);
  if (Number.isNaN(sum)) throw new Error(ERROR_MESSAGES.INVALID_RESULT);

  return sum;
};
