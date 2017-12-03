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