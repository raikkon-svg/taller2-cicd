const test = require('node:test');
const assert = require('node:assert');
const {
  calcularTotal,
  aplicarDescuento
} = require('../src/calculadora');

test('calcula correctamente el total de una compra', () => {
  const resultado = calcularTotal(1000, 3);
  assert.strictEqual(resultado, 3000);
});

test('aplica correctamente un descuento', () => {
  const resultado = aplicarDescuento(1000, 10);
  assert.strictEqual(resultado, 900);
});
