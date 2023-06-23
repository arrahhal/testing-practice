function calcShift(shift) {
  while (shift > 26) {
    shift -= 26;
  }
  while (shift < 0) {
    shift += 26;
  }
  return shift;
}

function shiftedLetter(letter, shift) {
  let letterCode = letter.charCodeAt(0);
  if (
    letterCode < 65 ||
    letterCode > 122 ||
    (letterCode > 90 && letterCode < 97)
  )
    return String.fromCharCode(letterCode);

  let shiftedCode = letterCode + shift;
  if (shiftedCode > 122 || (shiftedCode > 90 && shiftedCode < 97))
    shiftedCode -= 26;
  return String.fromCharCode(shiftedCode);
}

function caesarCipher(string = '', shift) {
  shift = calcShift(shift);
  return string
    .split('')
    .map((letter, index) => (letter = shiftedLetter(letter, shift)))
    .join('');
}

export default caesarCipher;
