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
    // // 다음에 구분자와 \n이 반드시 존재해야 함
    const match = trimmedInput.match(/^\/\/(.+?)(?:\\n|\n)(.*)$/);
    if (!match) throw new Error(ERROR_MESSAGES.INVALID_DELIMITER);

    const [, delimiter, rest] = match;
    if (!delimiter || !rest) throw new Error(ERROR_MESSAGES.INVALID_DELIMITER);

    // 여러 구분자(기본 , : + 커스텀 구분자)를 모두 인식하도록 처리
    const mixedDelimiterRegex = new RegExp(`${delimiter}|,|:`);
    numbers = rest.split(mixedDelimiterRegex);
  } else {
    // 기본 구분자 처리
    numbers = trimmedInput.split(DEFAULT_DELIMITERS);
  }

  return numbers;
};

export default parseInput;
