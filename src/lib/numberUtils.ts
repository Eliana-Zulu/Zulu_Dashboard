export function parseEuroNumber(value: string | number): number {
  if (typeof value === "number") return value;
  if (!value) return 0;
  
  // Elimina puntos de miles, reemplaza la coma decimal por punto
  const normalized = value.replace(/\./g, '').replace(',', '.');
  const parsed = parseFloat(normalized);
  return isNaN(parsed) ? 0 : parsed;
}
