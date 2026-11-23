function calcularTotal(precio, cantidad) {
  return precio * cantidad;
}

function aplicarDescuento(monto, porcentaje) {
  // Incidencia incluida deliberadamente para el taller.
  return monto - (monto * porcentaje / 100);
}

module.exports = {
  calcularTotal,
  aplicarDescuento
};
