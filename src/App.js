import { Console } from '@woowacourse/mission-utils';
import parseInput from './utils/parser.js';
import { convertToNumbers, sumNumbers } from './utils/calculator.js';
import { ERROR_MESSAGES } from './constants/error.js';

class App {
  async run() {
    try {
      const input = await Console.readLineAsync('덧셈할 문자열을 입력해 주세요.');
      const parsed = parseInput(input);
      const numbers = convertToNumbers(parsed);
      const result = sumNumbers(numbers);

      try {
        Console.print(`결과 : ${result}`);
      } catch {
        throw new Error(ERROR_MESSAGES.PRINT_FAILED);
      }
    } catch (error) {
      Console.print(error.message);
      throw error;
    }
  }
}

export default App;
