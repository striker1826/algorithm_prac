function solution(str1, str2) {
  let answer = "";
  for (let i = 0; i < str1.length; i++) {
    answer += str1[i];
    answer += str2[i];
  }
  return answer;
}

const str1 = "aaaaa";
const str2 = "bbbbb";

const answer = solution(str1, str2);
console.log(answer);
