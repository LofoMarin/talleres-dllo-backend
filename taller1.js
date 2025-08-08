function convertidorTemp(tempCelsius) {
  return tempCelsius*9/5 + 32
}

function resolvedor(a, b, c, signo) {
  // signo es +1 para positivo o -1 para negativo
  return (-b + signo*(b**2 - 4*a*c)**0.5)/(2*a)
}

function mejorParidad(num) {
  return !(num % 2)
}

function peorParidad(n) {
  if (n == 0) return true;
  if (n == 1) return false;
  if (n == 2) return true;
  if (n == 3) return false;
  if (n == 4) return true;
  if (n == 5) return false;
  if (n == 6) return true;
  if (n == 7) return false;
  if (n == 8) return true;
  if (n == 9) return false;
  if (n == 10) return true;
  return null;
}