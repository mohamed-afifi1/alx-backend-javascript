function calculateNumber(arg, a, b) {
  if (arg === 'SUM') {
    return Math.round(a) + Math.round(b);
  }
  if (arg === 'SUBTRACT') {
    return Math.round(a) - Math.round(b);
  }
  if (arg === 'MULTIPLY') {
    return Math.round(a) * Math.round(b);
  }
  if (arg === 'DIVIDE') {
    if (Math.round(b) === 0) {
      return 'Error';
    }
    return Math.round(a) / Math.round(b);
  }
}

module.exports = calculateNumber;
