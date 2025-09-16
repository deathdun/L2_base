function solution(str){
   const result = [];
  for (let i = 0; i < str.length; i += 2) {
    
    if (i + 1 < str.length) {
      result.push(str[i] + str[i + 1]);
    } else {
      result.push(str[i] + '_');
    }
  }
  return result;
}