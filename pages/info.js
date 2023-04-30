
const catalogo = document.querySelector(".catalogo")
const reservar = document.querySelector("button.boton_reserva")
const URL = 'pages/autos.json'
const autos = []

//funcion de fetch//
function baseDeDatos(){
    fetch(URL)
    .then(response=> response.status === 200 && response.json() )
    .then(data => autos.push(...data))
    .then(() => agregarAReserva(autos))
    .catch(error => { console.log(error)}) 
}
baseDeDatos()

//funcion para crear las tarjetitas de masInfo//
function crearInfo(){
    catalogo.innerHTML = ""
    if (masInfo.length >0) {
            masInfo.forEach((auto)=>{ catalogo.innerHTML += generadorInfo(auto) })
            botonEliminar()
            eventoReserva()
    }else{
        catalogo.innerHTML = "No se solicitó ninguna información todavía"
    }
}
crearInfo()

// eventos que usamos para reconocer que botones estan siendo clickeados//
function botonEliminar(){
    const botones = document.querySelectorAll("button.boton_x")
    if(botones !== null){
        for(const boton of botones){ boton.addEventListener("click", (event)=> { let num = masInfo.findIndex(auto => auto.codigo === parseInt(event.target.id))
                masInfo.splice(num, 1)
                pedidoDeInfo()
                crearInfo()
            })
        }
    }
}

// eventos que usamos para reconocer que botones estan siendo clickeados//
        function eventoReserva() {
            const buttons = document.querySelectorAll("button.boton_reserva")
                    for (boton of buttons) { 
                        boton.addEventListener("click", (element)=> { 
                            agregarAReserva(element.target.id)
                        })
                    }
        }

//funcion  para reservar autos//
function agregarAReserva(id) {
    let resultado = autos.find(auto => auto.codigo === parseInt(id))
        Swal.fire({
                title: `${resultado.marca} ${resultado.tipo}` + '<strong>  reservado!!</strong>',
                icon: 'success',
                html:
                    'Se debitaran de su cuenta =  $ ' + `${resultado.reserva}` +
                    '<br>Lo esperamos en nuestras concesionarias para finalizar el registro.' +
                    '<br>Muchas gracias por confiar en nosotros.' +
                    '<br>Moroni Automotores' +
                    '<br><div class="logo"><img src="./imagenes/Logo Moroni.jpg" alt="Logo"></div>',
                showCloseButton: true,
                showCancelButton: false,
                focusConfirm: false,
                confirmButtonText:
                    '<i class="fa fa-thumbs-up"></i>',
                confirmButtonAriaLabel: 'Thumbs up, great!',
                })
            localStorage.removeItem("infoExtra")
            masInfo.length = 0
            crearInfo()
}
