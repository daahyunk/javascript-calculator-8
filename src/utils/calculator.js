import { ERROR_MESSAGES } from '../constants/error.js';

const convertToNumbers = (values) => {
  // 값이 배열이 아닐 경우 에러
  if (!Array.isArray(values)) {
    throw new Error(ERROR_MESSAGES.INVALID_TYPE);
  }

  const numbers = values.map((value) => {
    const num = Number(value);

    // 숫자가 아닌 경우
    if (Number.isNaN(num)) throw new Error(ERROR_MESSAGES.NOT_A_NUMBER);

    return num;
  });

  return numbers;
};

export default convertToNumbers;
