import { ERROR_MESSAGES, ERROR_PREFIX } from '../constants/error.js';

const INTEGER_PATTERN = /^[+-]?\d+$/;

export const convertToNumbers = (values) => {
  if (!Array.isArray(values)) {
    throw new Error(`${ERROR_PREFIX} ${ERROR_MESSAGES.INVALID_TYPE}`);
  }

  const numbers = values.map((value) => {
    if (!INTEGER_PATTERN.test(String(value))) {
      throw new Error(`${ERROR_PREFIX} ${ERROR_MESSAGES.INVALID_NUMBER_FORMAT}`);
    }

    const num = Number(value);

    if (Number.isNaN(num)) {
      throw new Error(`${ERROR_PREFIX} ${ERROR_MESSAGES.INVALID_NUMBER_FORMAT}`);
    }

    if (num < 0) {
      throw new Error(`${ERROR_PREFIX} ${ERROR_MESSAGES.NEGATIVE_NUMBER}`);
    }

    if (num > Number.MAX_SAFE_INTEGER) {
      throw new Error(`${ERROR_PREFIX} ${ERROR_MESSAGES.NUMBER_TOO_LARGE}`);
    }

    return num;
  });

  return numbers;
};

export const sumNumbers = (numbers) => {
  if (!Array.isArray(numbers)) {
    throw new Error(`${ERROR_PREFIX} ${ERROR_MESSAGES.INVALID_TYPE}`);
  }

  const sum = numbers.reduce((acc, cur) => acc + cur, 0);

  if (Number.isNaN(sum) || !Number.isFinite(sum) || !Number.isSafeInteger(sum)) {
    throw new Error(`${ERROR_PREFIX} ${ERROR_MESSAGES.INVALID_RESULT}`);
  }

  return sum;
};
