import parseInput from '../src/utils/parser.js';
import { ERROR_MESSAGES } from '../src/constants/error.js';

describe('parseInput', () => {
  test('빈 문자열이면 [0] 반환', () => {
    expect(parseInput('')).toEqual([0]);
  });

  test('기본 구분자(, :) 처리', () => {
    expect(parseInput('1,2:3')).toEqual(['1', '2', '3']);
  });

  test('커스텀 구분자 처리', () => {
    expect(parseInput('//;\\n1;2;3')).toEqual(['1', '2', '3']);
  });

  test('잘못된 커스텀 구분자 형식', () => {
    expect(() => parseInput('//;\\n')).toThrow(ERROR_MESSAGES.NO_NUMBER_FOUND);
  });

  test('연속된 구분자', () => {
    expect(() => parseInput('1,,2')).toThrow(ERROR_MESSAGES.MISSING_NUMBER_BETWEEN_DELIMITERS);
  });

  test('허용되지 않은 특수문자 구분자', () => {
    expect(() => parseInput('//@\\n1@2')).toThrow(ERROR_MESSAGES.INVALID_CUSTOM_DELIMITER);
  });
});
