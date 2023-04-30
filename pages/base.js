
const masInfo = recuperarInfo() || []

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

//genera card de mas info//
function generadorInfo(auto){
    return `<img src="${auto.imagen}" alt="${auto.marca}">
            <ul>
                <li>${auto.marca} ${auto.tipo}</li>
                <li>Modelo: ${auto.modelo}</li>
                <li>KM: ${auto.kilometros} kms</li>
                <li>Precio: $${auto.precio}</li>
                <br>
                <li>Precio de reserva: $${auto.reserva}</li>
                <button class="boton_reserva" id=${auto.codigo}>Reservar</button>
                <button class="botones boton_x" id=${auto.codigo}>Eliminar</button>
            </ul>`
}

//funcion para guardar en LocalStorage//
function pedidoDeInfo() {
    localStorage.setItem("infoExtra", JSON.stringify(masInfo))
}

//funcion para recuperar el LocalStorage//
function recuperarInfo() {
    return JSON.parse(localStorage.getItem("infoExtra"))
}


