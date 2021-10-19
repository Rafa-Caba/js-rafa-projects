const contador = document.querySelector('#contador')
const iniciar = document.querySelector('#iniciar')
const detener = document.querySelector('#detener')
const reiniciar = document.querySelector('#reiniciar')
let interruptor = false
let inicio = null
let inicioIntervalo = null
let conteoDetenido = null
let duracionDetenido = 0

iniciar.addEventListener('click', () => {
    if (!interruptor) {
        iniciarCronometro()
        interruptor = true
    }
})

detener.addEventListener('click', () => {
    if (interruptor) {
        pararCronometro()
        interruptor = false
    }
})

reiniciar.addEventListener('click', () => {
    reiniciarCronometro()
})

iniciarCronometro = () => {
    if (inicio === null) {
        inicio = new Date()
    }

    if (conteoDetenido !== null) {
        duracionDetenido += (new Date() - conteoDetenido)
    }

    inicioIntervalo = setInterval(tiempoCorriendo, 10)
}

pararCronometro = () => {
    conteoDetenido = new Date()
    clearInterval(inicioIntervalo)
}

tiempoCorriendo = () => {
    let tiempoActual = new Date()
    let tiempoTranscurrido = new Date(tiempoActual - inicio - duracionDetenido)

    let minutos = tiempoTranscurrido.getUTCMinutes()
    let segundos = tiempoTranscurrido.getUTCSeconds()
    let milisegundos = tiempoTranscurrido.getUTCMilliseconds()

    milisegundos = Math.floor(milisegundos / 10)

    contador.textContent = `${minutos < 10 ? '0' + minutos : minutos}:
                            ${segundos < 10 ? '0' + segundos : segundos}:
                            ${milisegundos < 10 ? '0' + milisegundos : milisegundos}`

}

reiniciarCronometro = () => {
    clearInterval(inicioIntervalo)
    inicio = null
    conteoDetenido = null
    duracionDetenido = 0
    contador.textContent = '00:00:00'
    interruptor = false
}


