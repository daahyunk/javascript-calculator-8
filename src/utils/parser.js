export const parseInput = (input) => {
  if (!input) return [0];

  // 기본 구분자(, :) 처리
  const numbers = input.split(/,|:/);
  return numbers;
};

export default parseInput;
