function longest(arr, n) {
  const mapped = arr.map((str, idx) => ({ str, length: str.length, idx }));

  mapped.sort((a, b) => {
    if (b.length !== a.length) {
      return b.length - a.length;
    }
    return a.idx - b.idx; 
  });

  return mapped[n - 1].str;
}