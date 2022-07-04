module.exports = function reverse (n) {
  const intArr = Math.abs(n).toString(10).split('').reverse().map(intNumer => parseInt(intNumer, 10)).join('');
  return intArr;
}
