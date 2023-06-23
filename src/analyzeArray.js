function analyzeArray(arr) {
  return {
    average: arr.length
      ? arr.reduce((item, total) => {
          return (total += item);
        }, 0) / arr.length
      : null,
    max: arr.length ? Math.max(...arr) : null,
    min: arr.length ? Math.min(...arr) : null,
    length: arr.length,
  };
}
export default analyzeArray;
