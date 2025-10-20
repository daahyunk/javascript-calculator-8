import { convertToNumbers, sumNumbers } from '../src/utils/calculator.js';
import { ERROR_MESSAGES } from '../src/constants/error.js';

describe('convertToNumbers', () => {
  test('정상 숫자 변환', () => {
    expect(convertToNumbers(['1', '2', '3'])).toEqual([1, 2, 3]);
  });

  test('숫자가 아닌 값 포함', () => {
    expect(() => convertToNumbers(['1', 'a'])).toThrow(ERROR_MESSAGES.INVALID_NUMBER_FORMAT);
  });

  test('음수 포함 시 에러', () => {
    expect(() => convertToNumbers(['-1', '2'])).toThrow(ERROR_MESSAGES.NEGATIVE_NUMBER);
  });

  test('매우 큰 수 포함 시 에러', () => {
    const tooLarge = String(Number.MAX_SAFE_INTEGER + 1);
    expect(() => convertToNumbers(['1', tooLarge])).toThrow(ERROR_MESSAGES.NUMBER_TOO_LARGE);
  });
});

describe('sumNumbers', () => {
  test('정상 합산', () => {
    expect(sumNumbers([1, 2, 3])).toBe(6);
  });

  test('NaN 결과 시 에러', () => {
    expect(() => sumNumbers([1, NaN])).toThrow(ERROR_MESSAGES.INVALID_RESULT);
  });

  test('Infinity 결과 시 에러', () => {
    expect(() =>
      sumNumbers([Number.MAX_SAFE_INTEGER, Number.MAX_SAFE_INTEGER]),
    ).toThrow(ERROR_MESSAGES.INVALID_RESULT);
  });
});
