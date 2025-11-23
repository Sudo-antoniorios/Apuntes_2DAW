function esFinDeSemana(fecha) {
  // Convertimos la entrada a objeto Date
  let f = new Date(fecha);

  // getDay(): 0 = domingo, 6 = sábado
  let dia = f.getDay();

  if (dia === 0 || dia === 6) {
    return "Es fin de semana";
  } else {
    return "No es fin de semana";
  }
}

// Ejemplos de uso:
console.log(esFinDeSemana("2025-11-23")); // domingo
console.log(esFinDeSemana("2025-11-25")); // martes
