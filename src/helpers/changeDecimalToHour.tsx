export const decimalToHoursMinutes = (decimalNumber: number): string => {
  // Verificar si el número es negativo
  const isNegative = decimalNumber < 0;
  const absoluteValue = Math.abs(decimalNumber);

  // Obtener la parte entera y decimal del número
  const hours = Math.floor(absoluteValue);
  const minutesDecimal = (absoluteValue - hours) * 60;
  const minutes = Math.round(minutesDecimal);

  // Formatear el resultado
  const formattedHours =
    (hours < 10 ? "0" : "") + (isNegative ? `-${hours}` : `${hours}`);
  const formattedMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;

  return `${formattedHours}:${formattedMinutes}hs`;
};
