function calcularTotal(precio, cantidad) {
  return precio * cantidad;
}

function aplicarDescuento(monto, porcentaje) {
  // Incidencia incluida deliberadamente para el taller.
  return monto - porcentaje;
}

module.exports = {
  calcularTotal,
  aplicarDescuento
};
