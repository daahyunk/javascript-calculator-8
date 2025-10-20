import { ERROR_MESSAGES } from '../constants/error.js';
import { DEFAULT_DELIMITERS, CUSTOM_DELIMITER_PREFIX } from '../constants/delimiters.js';

export const parseInput = (input) => {
  // 타입 검증
  if (typeof input !== 'string') {
    throw new Error(ERROR_MESSAGES.INVALID_TYPE);
  }

  // 공백 제거
  const trimmedInput = input.trim().replace(/\s+/g, '');

  // 빈 문자열 처리
  if (trimmedInput === '') return [0];

  // 숫자 존재 여부 확인
  if (!/[0-9]/.test(trimmedInput)) {
    throw new Error(ERROR_MESSAGES.NO_NUMBER_FOUND);
  }

  let numbers;

  // 커스텀 구분자 처리
  if (trimmedInput.startsWith(CUSTOM_DELIMITER_PREFIX)) {
    const match = trimmedInput.match(/^\/\/(.+?)(?:\\n|\n)(.*)$/);
    if (!match) throw new Error(ERROR_MESSAGES.INVALID_DELIMITER);

    const [, delimiter, rest] = match;
    if (!delimiter) throw new Error(ERROR_MESSAGES.INVALID_DELIMITER);

    numbers = rest.split(delimiter);
  } else {
    // 기본 구분자 처리
    numbers = trimmedInput.split(DEFAULT_DELIMITERS);
  }

  return numbers;
};

export default parseInput;
