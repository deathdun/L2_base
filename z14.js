function isCircleSorted( arr ){
  let drops = 0;
  const n = arr.length;

  for (let i = 0; i < n; i++) {
    
    if (arr[i] > arr[(i + 1) % n]) {
      drops++;
      if (drops > 1) return false;
    }
  }

  return true;
}