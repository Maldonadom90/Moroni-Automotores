
const card = document.querySelector(".autos")
const URL = 'pages/autos.json'//url donde se guarda la info de los autos//
const autos = []

function baseDeDatos(){//funcion de fetch//
    fetch(URL)
    .then(response=> response.json() )
    .then(data => autos.push(...data))
    .then(() => cargarCards(autos))
    .catch(error => { console.log(error)}) 
}
baseDeDatos()

//funcion para botones de masInfo//
function eventoBoton() {
    const botones = document.querySelectorAll("button")
          if (botones !== null) {
            for (const boton of botones) {
                boton.addEventListener("click", (event)=> {
                    let stock = autos.find((auto)=> auto.codigo === parseInt(event.target.id))
                    masInfo.push(stock)
                    pedidoDeInfo()
                    location.href = 'info.html'
                })
            }
          }
} 

//funcion para cargar las cards//
function cargarCards(array) {
    card.innerHTML = ""
    array.forEach(element => { card.innerHTML += generadorDeCards(element) })
    eventoBoton()
}

