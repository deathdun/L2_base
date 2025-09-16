function findMissing(list) {  
  const diff1 = list[1] - list[0];
  const diff2 = list[list.length - 1] - list[list.length - 2];

  const commonDiff = Math.abs(diff1) < Math.abs(diff2) ? diff1 : diff2;

  for (let i = 0; i < list.length - 1; i++) {
    if (list[i + 1] - list[i] !== commonDiff) {
      return list[i] + commonDiff;
    }
  }

  return null;
}