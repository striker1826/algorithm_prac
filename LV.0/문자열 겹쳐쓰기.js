function solution(my_string, overwrite_string, s) {
  const str_array = [...my_string];
  str_array.splice(s, overwrite_string.length, overwrite_string);
  const answer = str_array.join("");
  return answer;
}
