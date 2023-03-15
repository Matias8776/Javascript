alert('Bienvenido a RX Gaming!')

const comprarItem = () => {
    let item = ''
    let cantidad = 0
    let precio = 0
    let subtotal = 0
    let continuarCompra = false

    do {
        item = parseInt(prompt('¿Quiere comprar: 1 - RX 6600, 2 - RX 6600 XT o 3 - RX 6650 XT?', 'ej: 1' ))
        cantidad = parseInt(prompt('¿Cuántos queres comprar?'))

        let cantidadValidada = validarCantidad(cantidad)

        switch (item) {
            case 1:
                precio = 140000
                break
            case 2:
                precio = 200000
                break
            case 3:
                precio = 250000
                break
            default:
                alert('Ingrese datos válidos!')
                precio = 0
                cantidadValidada = 0
                break
        }

        subtotal += precio * cantidadValidada

        continuarCompra = confirm('¿Quiere seguir comprando?')
    } while (continuarCompra)

    return subtotal
}

const validarCantidad = (cantidad) => {
    while (Number.isNaN(cantidad) || cantidad === 0) {
        alert('Ingrese una cantidad válida!')
        cantidad = parseInt(prompt('¿Cuántos quieres comprar?'))
    }

    return cantidad
};

const aplicarDescuento = (subtotal) => {
    const descuento = 0.90

    if (subtotal >= 500000) {
        alert('Por su compra mayor a 500000 tiene un descuento del 10% sobre el total')
        return subtotal * descuento
    } else {
        return subtotal
    }
};

const calcularEnvio = (subtotal) => {
    const quiereEnvio = confirm('¿Quiere envío a domicilio? (si el total de su compra es mayor a 150000 el envío es gratis)')

    if (quiereEnvio && subtotal >= 150000) {
        alert('Tienes envio gratis. El total de la compra es: $'+subtotal)
    } else if (quiereEnvio && subtotal < 150000) {
        subtotal += 5000
        alert('El envío cuesta $5000. El total con envío es: $'+subtotal)
    } else {
        alert('El total de su compra es: $'+subtotal)
    }

    return subtotal
};

const DetalleDeCompra = (precioFinal) => {
    alert('El total a pagar es de  $'+precioFinal+'. Gracias por su compra!')
};

const subtotal = comprarItem()

const subtotalConDescuento = aplicarDescuento(subtotal)

const precioFinal = calcularEnvio(subtotalConDescuento)

DetalleDeCompra(precioFinal)