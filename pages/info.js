

const card = document.querySelector(".autos")
const catalogo = document.querySelector(".catalogo")
const info = []



//array de objetos que contiene todos los datos de los autos en stock//
const autos = [{ imagen: "./imagenes/192-OROCH2019.png",    marca: 'Renault', tipo: 'Oroch',        modelo: 2019, codigo: 1, precio: 5900000, kilometros: 150000},
               { imagen: "./imagenes/194-308LLURE2015.png", marca: 'Peugeot', tipo: '308',          modelo: 2015, codigo: 2, precio: 3689900, kilometros: 100000},
               { imagen: "./imagenes/196-CLSSIC2013.png",   marca: 'Renault', tipo: 'Clio Classic', modelo: 2013, codigo: 3, precio: 1500000, kilometros: 220000},
               { imagen: "./imagenes/FordKA.jpg",           marca: 'Ford',    tipo: 'Ka',           modelo: 2012, codigo: 4, precio: 1780000, kilometros: 80000},
               { imagen: "./imagenes/Logan.jpg",            marca: 'Renault', tipo: 'Logan',        modelo: 2016, codigo: 5, precio: 2800000, kilometros: 110000},
               { imagen: "./imagenes/Peugeot307.jpg",       marca: 'Peugeot', tipo: '307',          modelo: 2009, codigo: 6, precio: 2290000, kilometros: 190000}]


//funcion para generar cards de los autos//
function generadorDeCards (auto){
    return `<article class="card">
                <div>
                    <img src=${auto.imagen} alt="auto">
                </div>
            <div class="card_content">
                <span class="card_title">${auto.marca} ${auto.tipo}</span>
                    <span class="card_subtitle">Modelo ${auto.modelo}</span>
                    <button class="boton_consulta" id=${auto.codigo}>+ info</button></p>
            </div>
            </article>`
}

function cargarCards(array) {
    card.innerHTML = ""
    array.forEach(element => { card.innerHTML += generadorDeCards(element) })
    eventoBoton()
}
    cargarCards(autos)//con esta linea de codigo se carga automaticamente todos los objetos en las cards de los autos//
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

//genera card de mas info//
/*function generadorInfo(auto){
    return `<ul>
                <li>${auto.marca} ${auto.tipo}</li>
                <li>Modelo: ${auto.modelo}</li>
                <li>KM: ${auto.kilometros} kms</li>
                <li>Precio: $${auto.precio}</li>
                <button class="botones" id=${auto.codigo}>Reservar</button>
                <button class="botones">Eliminar</button>
            </ul>`
}
generadorInfo(autos)*/

