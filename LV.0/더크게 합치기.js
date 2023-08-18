function solution(a, b) {
  const case1 = `${a}${b}`;
  const case2 = `${b}${a}`;
  let answer;
  case1 > case2 ? (answer = case1) : (answer = case2);
  return answer;
}
