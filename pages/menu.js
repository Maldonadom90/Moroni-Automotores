/*PreEntrega N°2*/

const reserva = []

const bienvenido = alert("\n" +
                        "Bienvenidos a mi segunda PreEntrega \n" +
                         "\n"+
                        "Por favor ingrese la función 'reservarAuto()' en la consola de JS. \n" +
                        "\n" +
                        "\n" +
                        "                Muchas Gracias ❤")



const saludo = "Bienvenido a Moroni Automotores \n" +
                "            Lista de vehículos disponibles: \n" +
                "                    1) 🚗 Renault Oroch \n" +
                "                    2) 🚙 Peugeot 308 \n" +
                "                    3) 🛺 Renault Clio Classic \n" +
                "                    4) 🚐 Ford Ka \n" +
                "                    5) 🚘 Renault Logan \n" +
                "                    6) 🛸 Peugeot 307 \n" +
                "\n" +
                "Indique el código que por cual desea consultar: "


const autos = [{ marca: 'Renault', tipo: 'Oroch',        modelo: 2019, codigo: 1, precio: 5900000},
               { marca: 'Peugeot', tipo: '308',          modelo: 2015, codigo: 2, precio: 3689900},
               { marca: 'Renault', tipo: 'Clio Classic', modelo: 2013, codigo: 3, precio: 1500000},
               { marca: 'Ford',    tipo: 'Ka',           modelo: 2012, codigo: 4, precio: 1780000},
               { marca: 'Renault', tipo: 'Logan',        modelo: 2016, codigo: 5, precio: 2800000},
               { marca: 'Peugeot', tipo: '307',          modelo: 2009, codigo: 6, precio: 2290000}]

function buscarAuto(codigo) {
    let busqueda = autos.find (auto => auto.codigo === parseInt(codigo))
    return busqueda
}

function reservarAuto (){ //funcion para saber el valor de los autos disponibles//
    const codigo = parseInt(prompt(saludo))
    let autoElegido = buscarAuto(codigo)
        if (autoElegido === undefined){
            alert("🙀El código ingresado no se encuentra disponible🙀")
            return prompt(saludo)
        } else {
            reserva.push(autoElegido)
            alert (`${autoElegido.marca} ${autoElegido.tipo} tiene un valor de $ ${autoElegido.precio}.`)
            let agregarAReserva = confirm ("Quiere reservar algún otro auto?")
            if (agregarAReserva){
                reservarAuto()
            } else {
                let confirmarReserva = confirm ("Si desea confirmar la reserva, por favor confirme la operación.")
                if (confirmarReserva){
                    finalizarReserva()
                }else {
                    alert ("Hasta la próxima ❤")
                }
                
            }
        }
}

function verReserva () {
    if (reserva.length > 0){
        console.table (reserva)
    } else {
        console.warn ("No se reservo ningún auto todavía")
    }
}
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

