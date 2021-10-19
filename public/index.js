const hora = document.querySelector('#hora')
const contador = document.querySelector('#contador')
const iniciar = document.querySelector('#iniciar')

let inicio = null
let inicioIntervalo = null
let duracionDetenido = 0
moment.locale('es')

const reloj = () => {
    if (inicio === null) {
        inicio = new Date()
    }
    
    let tiempoCorriendo = () => {
        let tiempoActual = new Date()
        let tiempoTranscurrido = new Date(tiempoActual - inicio - duracionDetenido)
    
        let milisegundos = tiempoTranscurrido.getUTCMilliseconds()
    
        milisegundos = Math.floor(milisegundos / 10)
    
        hora.textContent = moment().format("dddd, D MMMM YYYY, h:mm:ss a")
    }

    inicioIntervalo = setInterval(tiempoCorriendo, 10)
}

document.body.onload = reloj()
        