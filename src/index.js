module.exports = function reverse(num) {
  if (typeof num !== 'number') return 'enter number';

  const isNegative = num < 0;
  const reversed = Math.abs(num).toString().split('').reverse().join('');
  const result = parseInt(reversed, 10);

  return isNegative ? -(-result) : result;
};
