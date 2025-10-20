import { Console } from '@woowacourse/mission-utils';

class App {
  async run() {
    try {
      const input = await Console.readLineAsync('덧셈할 문자열을 입력해 주세요.');

      Console.print(`입력값: ${input}`);
      Console.print('프로그램이 정상적으로 실행되었습니다.');
    } catch (error) {
      Console.print('[ERROR] 프로그램 실행 중 문제가 발생했습니다.');
    }
  }
}

export default App;
