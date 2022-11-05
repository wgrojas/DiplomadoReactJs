cantidad = parseInt(window.prompt("ingresa la cantidad de llantas a cambiar"));
valorLLanta = parseInt(window.prompt("ingresa el valor de la llanta"));
valorCambioLLanta = parseInt(
  window.prompt("ingresa el valor de la mano de obra")
);

valorTotal = cantidad * (valorLLanta + valorCambioLLanta);

alert(
  "El valor total  a pagar por cambiar " +
    cantidad +
    " llantas es: $" +
    valorTotal
);

document.write("Valor llanta : $" + valorLLanta);

document.write("\n  Valor mano de obra : $" + valorCambioLLanta);

document.write(
  " \n Valor total  a pagar por cambiar " + cantidad + " llantas es: $" + valorTotal
);
