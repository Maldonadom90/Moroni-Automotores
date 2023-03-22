class Negocio {
    constructor(reserva){
        this.reserva = reserva
    }

    planDeCompra(){
        if (reserva.length > 0){
            return this.reserva.reduce((acc, auto) => acc + auto.precio, 0)
        }else {
            return 'Error de carga de datos'
        }
    }
    completarReserva(){
        if (this.planDeCompra() !== 'Error de carga de datos'){
            return `💲 La compra fue realizada por el valor de $ ${this.planDeCompra()}. \n 
                    Muchas gracias por su compra🌟. \n Lo esperamos en nuestra concecionaria para retirar el auto adquirido.`
        } else {
            return '💫Ocurrió un error en la compra'
        }
    }
}