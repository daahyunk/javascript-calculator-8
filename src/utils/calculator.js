import { ERROR_MESSAGES } from '../constants/error.js';

const INTEGER_PATTERN = /^[+-]?\d+$/;

export const convertToNumbers = (values) => {
  if (!Array.isArray(values)) throw new Error(ERROR_MESSAGES.INVALID_TYPE);

  const numbers = values.map((value) => {
    // 숫자 형식이 맞는지 선검증
    if (!INTEGER_PATTERN.test(String(value))) {
      throw new Error(ERROR_MESSAGES.INVALID_NUMBER_FORMAT);
    }

    const num = Number(value);

    // NaN 방지 (이론상 위 정규식 통과하면 NaN일 수 없지만 수비적으로 검사)
    if (Number.isNaN(num)) {
      throw new Error(ERROR_MESSAGES.INVALID_NUMBER_FORMAT);
    }

    // 음수 금지
    if (num < 0) {
      throw new Error(ERROR_MESSAGES.NEGATIVE_NUMBER);
    }

    // 너무 큰 수 금지
    if (num > Number.MAX_SAFE_INTEGER) {
      throw new Error(ERROR_MESSAGES.NUMBER_TOO_LARGE);
    }

    return num;
  });

  return numbers;
};

export const sumNumbers = (numbers) => {
  if (!Array.isArray(numbers)) throw new Error(ERROR_MESSAGES.INVALID_TYPE);

  const sum = numbers.reduce((acc, cur) => acc + cur, 0);

  // 계산 결과 NaN
  if (Number.isNaN(sum)) {
    throw new Error(ERROR_MESSAGES.INVALID_NUMBER_FORMAT);
  }

  return sum;
};
