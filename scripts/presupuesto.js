function calcularPresupuesto() {
    // Obtener las opciones seleccionadas
    const producto = document.getElementById('producto').value;
    const plazo = parseInt(document.getElementById('plazo').value, 10);
    const extras = document.querySelectorAll('input[name="extras"]:checked');
    

    // Precios de los productos
    const precios = {
        "producto1": 350,
        "producto2": 50,
        "producto3": 50
    };

    // Incremento por plazo
    let descuento = 0;
    if (plazo >= 6 && plazo <= 12) {
        descuento = 0.05;  // 5% de incremento
    } else if (plazo > 12) {
        descuento = 0.10; // 10% de incremento
    }

    // Precio base del producto
    let precioFinal = precios[producto];

    // Sumar el precio de los extras seleccionados
    let extrasTotal = 0;
    extras.forEach(extra => {
        if (extra.value === "extra1") extrasTotal += 150;
        if (extra.value === "extra2") extrasTotal += 10;
        if (extra.value === "extra3") extrasTotal += 10;
    });

    // Calcular el precio con el descuento
    let precioConDescuento = precioFinal + (precioFinal * descuento);
    precioFinal = precioConDescuento + extrasTotal;

    
    document.getElementById('presupuestoFinal').textContent = `Presupuesto Final: $${precioFinal.toFixed(2)}`;


    document.getElementById('presupuestoForm').addEventListener('submit', function(e) {
        e.preventDefault();
        alert("El presupuesto ha sido enviado correctamente.");
    });
   
}