export function twoDecimals(number) {
  return parseFloat(number.toString().match(/^-?\d+(?:\.\d{0,2})?/)[0]);
}

export function clamp(number, min, max){
  return (
    number < min
      ? min
      : (
        number > max
          ? max
          : number
      )
  );
}

export function addDot(number) {
  let dotted = number.toString().split('').reverse();
  dotted.splice(3, 0, '.');
  return dotted.reverse();
}

export function pad(num, size) {
  let s = num+"";
  while (s.length < size) s = "0" + s;
  return s;
}