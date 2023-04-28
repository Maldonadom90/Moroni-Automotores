


const reserva = []


//funcion  para reservar autos//
function agregarAReserva(id) {
    let resultado = autos.find(auto => auto.codigo === parseInt(id))
        if (resultado === undefined){
            alert("🙀El código ingresado no se encuentra disponible🙀")
            } else {
                reserva.push(resultado)
                return `<ul>
                        <li>${resultado.marca} ${resultado.tipo}</li>
                        <li>Modelo: ${resultado.modelo}</li>
                        <li>KM: ${resultado.kilometros} kms</li>
                        <li>Precio: $${resultado.precio}</li>
                        <button class="botones" id=${resultado.codigo}>Reservar</button>
                        <button class="botones">Eliminar</button>
                        </ul>`
                /*alert (`${resultado.marca} ${resultado.tipo} tiene un valor de $ ${resultado.precio}.`)
                let agregarAReserva = confirm ("Quiere reservar algún otro auto?")
                    if (agregarAReserva){
                        registrarReserva(reserva)
                    } else {
                        let confirmarReserva = confirm ("Si desea confirmar la reserva, por favor confirme la operación.")
                            if (confirmarReserva){
                                finalizarReserva()
                            }else {
                                reserva.length = 0
                                alert ("Hasta la próxima ❤")
                            }
                    }*/
            }
}

// funcion de registro en storage//
function registrarReserva(reserva) {
    if (reserva.length > 0) {
        localStorage.setItem("vehiculosReservados", JSON.stringify(reserva))
    }
}

function recuperarReserva() {
    const reservaRecuperada = JSON.parse(localStorage.getItem("vehiculosReservados"))
    if (reservaRecuperada.length > 0) {
        reserva.push(...reservaRecuperada) 
    }
} // me muestra undefined, pero se recupera el storage//

function verReserva () { // funcion para mostrar los autos en reserva, en una tabla en consola//
    if (reserva.length > 0){
        console.table (reserva)
    } else {
        console.warn ("No se reservo ningún auto todavía")
    }
}

//funcion de compra final//
function finalizarReserva (){
    if (reserva.length === 0){
        console.warn ("No se reservo ningún auto todavía")
        return
    }
    const comprar = new Negocio(reserva)
    alert (`El valor total de la reserva es de $ ${comprar.planDeCompra()}`)
    let respuesta = confirm("Si desea efectuar el pago de la reserva realizada oprima el botón ACEPTAR, de lo contrario, oprima el botón CANCELAR")
    if (respuesta) {
        alert(comprar.completarReserva())
        reserva.length = 0
    }
}
