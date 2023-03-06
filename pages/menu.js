/*PreEntrega N°1*/

const bienvenido = alert("Bienvenidos a mi primera PreEntrega \n" +
                        "Por favor ingrese la función que describo al final de la página en la consola de JS. \n" +
                        "\n" +
                        "       Muchas Gracias ❤")

let respuestaDePrecio = ""
let otraConsulta = true

const saludo = "Bienvenido a Moroni Automotores \n" +
                "\n" +
                "Lista de vehículos disponibles: \n" +
                "a) 🚗 Ford Focus \n" +
                "b) 🚙 Audi TT \n" +
                "c) 🛺 Chevrolet Sonic \n" +
                "d) 🚐 Citroen C3 \n" +
                "\n" +
                "Indique la letra que corresponda al vehículo por cual desea consultar: "

function consultaDePrecio() {
    while(otraConsulta){
        listaDePrecio()
        otraConsulta = confirm ("Desea conocer el valor de algún otro vehículo?")
    }
}

function listaDePrecio() {
    let opcion = prompt(saludo).toLowerCase().trim()

    if (opcion !== "a" && opcion !== "b" && opcion !== "c" && opcion !== "d") {
        alert("💥Error, por favor ingrese una de las letras que se encuentran en las opciones💥")
    } else {
        switch (opcion) {
            case "a":
                respuestaDePrecio = "🚗 Ford Focus tiene un costo de $2.800.000"
                break
            case "b":
                respuestaDePrecio ="🚙 Audi TT tiene un costo de $10.300.000"
                break
            case "c":
                respuestaDePrecio = "🛺 Chevrolet Sonic tiene un costo de $1.500.000"
                break
            case "d":
                respuestaDePrecio = "🚐 Citroen C3 tiene un costo de $3.780.000"
                break
            default:
                console.error("El vehículo requerido no se encuentra disponible")
        }
        alert(respuestaDePrecio)
    }
}

