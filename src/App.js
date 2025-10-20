import { Console } from '@woowacourse/mission-utils';
import parseInput from './utils/parser.js';
import { convertToNumbers, sumNumbers } from './utils/calculator.js';
import { ERROR_PREFIX } from './constants/error.js';

class App {
  async run() {
    try {
      const input = await Console.readLineAsync('덧셈할 문자열을 입력해 주세요.');
      const parsed = parseInput(input);
      const numbers = convertToNumbers(parsed);
      const result = sumNumbers(numbers);

      Console.print(`결과: ${result}`);
    } catch (error) {
      Console.print(`${ERROR_PREFIX} ${error.message}`);
    }
  }
}

export default App;
