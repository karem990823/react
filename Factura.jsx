import React, { useEffect } from "react";

const Factura = () => {
  const factura = {
    cliente: "Maria",
    productos: [
      { nombre: "Laptop", precio: 1200 },
      { nombre: "Mouse", precio: 20 }
    ]
  };

  // Calcular total
  const total = factura.productos.reduce(
    (acc, prod) => acc + prod.precio,
    0
  );

  // Mostrar en consola usando template string
  useEffect(() => {
    const productosTexto = factura.productos
      .map(p => `- ${p.nombre}: $${p.precio}`)
      .join("\n");

    const salida = `
Cliente: ${factura.cliente}

Productos:
${productosTexto}

Total: $${total}
    `;

    console.log(salida);
  }, []);

  return (
    <div style={{ fontFamily: "Arial", padding: "20px" }}>
      <h2>Resultado</h2>

      <p><strong>Cliente:</strong> {factura.cliente}</p>

      <div>
        <strong>Productos:</strong>
        <ul>
          {factura.productos.map((producto, index) => (
            <li key={index}>
              {producto.nombre}: ${producto.precio}
            </li>
          ))}
        </ul>
      </div>

      <p><strong>Total:</strong> ${total}</p>
    </div>
  );
};

export default Factura;