function findMax(array) {
  let me = array[0];
  for (let i = 1; i < array.length; i++) {
    if (array[i] > me) me = array[i];
  }
  return me;
}

function includes(array, num) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === num) return true;
  }
  return false;
}

function sum(array) {
  let s = 0;
  for (let i = 0; i < array.length; i++) s += array[i];
  return s;
}

function missingNumbers(array) {
  // hallar min y max sin Math.min/Math.max
  let min = array[0];
  let max = array[0];
  for (let i = 1; i < array.length; i++) {
    if (array[i] < min) min = array[i];
    if (array[i] > max) max = array[i];
  }
  // números faltantes entre min y max usando nuestra includes
  const missing = [];
  for (let n = min + 1; n < max; n++) {
    if (!includes(array, n)) missing.push(n);
  }
  return missing;
}