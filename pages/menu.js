/*PreEntrega N°3*/

const card = document.querySelector(".autos")

const reserva = []

const bienvenido = alert("\n" +
                        "Bienvenidos a mi tercera PreEntrega \n" +
                         "\n"+
                        "Para probar la función del localStorage, ingrese en la consola recuperarReserva(), va a aparecer en consola undefined. Despúes de esto ingrese la función verReserva()\n" +
                        "\n" +
                        "\n" +
                        "                Muchas Gracias ❤")

//array de objetos que contiene todos los datos de los autos en stock//
const autos = [{ imagen: "./imagenes/192-OROCH2019.png",    marca: 'Renault', tipo: 'Oroch',        modelo: 2019, codigo: 1, precio: 5900000},
               { imagen: "./imagenes/194-308LLURE2015.png", marca: 'Peugeot', tipo: '308',          modelo: 2015, codigo: 2, precio: 3689900},
               { imagen: "./imagenes/196-CLSSIC2013.png",   marca: 'Renault', tipo: 'Clio Classic', modelo: 2013, codigo: 3, precio: 1500000},
               { imagen: "./imagenes/FordKA.jpg",           marca: 'Ford',    tipo: 'Ka',           modelo: 2012, codigo: 4, precio: 1780000},
               { imagen: "./imagenes/Logan.jpg",            marca: 'Renault', tipo: 'Logan',        modelo: 2016, codigo: 5, precio: 2800000},
               { imagen: "./imagenes/Peugeot307.jpg",       marca: 'Peugeot', tipo: '307',          modelo: 2009, codigo: 6, precio: 2290000}]


//funcion para generar cards de los autos//
function generadorDeCards (auto){
    return `<article class="card">
                <div>
                    <img src=${auto.imagen} alt="auto">
                </div>
            <div class="card_content">
                <span class="card_title">${auto.marca} ${auto.tipo}</span>
                    <span class="card_subtitle">Modelo ${auto.modelo}</span>
                    <p class="card_description">Lorem ipsum dolor  <button class="boton_consulta" id=${auto.codigo}>Reservar</button></p>
            </div>
            </article>`
}

function cargarCards(array) {
    card.innerHTML = ""
    array.forEach(element => {
        card.innerHTML += generadorDeCards(element)
    })
    eventoBoton()
}
    cargarCards(autos)//con esta linea de codigo se cargar automaticamente todos los objetos en las cards de los autos//
//fin de la funcion//

// eventos que usamos para reconocer que botones estan siendo clickeados//
function eventoBoton() {
    const buttons = document.querySelectorAll("button")
            for (boton of buttons) {
                boton.addEventListener("click", (element)=> {
                agregarAReserva(element.target.id)
                })
            }
}
//funcion  para reservar autos//
function agregarAReserva(id) {
    let resultado = autos.find(auto => auto.codigo === parseInt(id))
        if (resultado === undefined){
            alert("🙀El código ingresado no se encuentra disponible🙀")
            } else {
                reserva.push(resultado)
                alert (`${resultado.marca} ${resultado.tipo} tiene un valor de $ ${resultado.precio}.`)
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
                    }
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

