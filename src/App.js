import { Console } from '@woowacourse/mission-utils';
import parseInput from './utils/parser.js';

class App {
  async run() {
    try {
      const input = await Console.readLineAsync('덧셈할 문자열을 입력해 주세요.');
      const numbers = parseInput(input);
      Console.print(`입력값: ${numbers}`);
    } catch (error) {
      Console.print(`[ERROR] ${error.message}`);
    }
  }
}

export default App;
