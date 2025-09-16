function expandedForm(num) {
  const digits = String(num).split('');
  const length = digits.length;
  const parts = [];

  for (let i = 0; i < length; i++) {
    if (digits[i] !== '0') {
      const zeros = length - i - 1;
      parts.push(digits[i] + '0'.repeat(zeros));
    }
  }

  return parts.join(' + ');
}