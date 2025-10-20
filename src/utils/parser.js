import { ERROR_MESSAGES } from '../constants/error.js';
import { DEFAULT_DELIMITERS, CUSTOM_DELIMITER_PREFIX } from '../constants/delimiters.js';

export const parseInput = (input) => {
  if (!input) return [0];

  let numbers;

  if (input.startsWith(CUSTOM_DELIMITER_PREFIX)) {
    const match = input.match(/^\/\/(.+)(?:\\n|\n)(.*)$/);
    if (!match) throw new Error(ERROR_MESSAGES.INVALID_DELIMITER);

    const [, delimiter, rest] = match;
    if (!delimiter) throw new Error(ERROR_MESSAGES.INVALID_DELIMITER);

    numbers = rest.split(delimiter);
  } else {
    numbers = input.split(DEFAULT_DELIMITERS);
  }

  return numbers;
};

export default parseInput;
