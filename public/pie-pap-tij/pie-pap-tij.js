const jugar = document.querySelector('#jugar')
const mensajeAlerta = document.querySelector('#mensajeAlerta')
const mensajeBienvenida = document.querySelector('#mensajeBienvenida')
const juego = document.querySelector('#juego')
const endgame = document.querySelector('#endgame')
const jugador = document.querySelector('#nombre')
const jugadorNombre = document.querySelector('#jugador-nombre')
const scoreCompu = document.querySelector('#compu-score')
const scoreJugador = document.querySelector('#jugador-score')
const compuChoiceMsg = document.querySelector('#compu-choice')
const compuChoiceImg = document.querySelector('#compu-img')
const jugadorChoiceImg = document.querySelector('#jugador-img')
const jugadorChoiceMsg = document.querySelector('#jugador-choice')
const piedra = document.querySelector('#piedra')
const papel = document.querySelector('#papel')
const tijera = document.querySelector('#tijera')
const resultado = document.querySelector('#resultado')
const msgContinuar = document.querySelector('#msg-continuar')
const reiniciar = document.querySelector('#reset')
const nameContainer = document.querySelector('#name-container')
const iniciarJuegoContainer = document.querySelector('#inicio-juego')
const resultadoTitle = document.querySelector('#resultado-title')

let compuChoice = ''
let jugadorChoice = ''
let jugadorScore = 0
let compuScore = 0

jugar.addEventListener('click', (e) => {
    if (jugador.value.length > 0) {
        juego.style.display = "block"
        mensajeBienvenida.textContent = `Bienvenido al Juego ${jugador.value}! El primero en llegar a 5 puntos, GANA!`
        jugadorNombre.textContent = jugador.value
        compuChoiceMsg.textContent = 'Compu'
        jugadorChoiceMsg.textContent = jugador.value
        mensajeAlerta.textContent = ''
        mensajeAlerta.hidden = true
        nameContainer.style.display = 'none'
        iniciarJuegoContainer.style.display = 'none'
    } else {
        mensajeAlerta.hidden = false
        mensajeAlerta.textContent = 'Por favor ingresa tu nombre o nickname'
    }
})

piedra.addEventListener('click', (e) => {
    jugadorChoice = 'Piedra'
    jugadorChoiceMsg.textContent = jugador.value
    addingJugadorImage(jugadorChoice)
    juegoFunc()
})
papel.addEventListener('click', (e) => {
    jugadorChoice = 'Papel'
    jugadorChoiceMsg.textContent = jugador.value
    addingJugadorImage(jugadorChoice)
    juegoFunc()
})
tijera.addEventListener('click', (e) => {
    jugadorChoice = 'Tijera'
    jugadorChoiceMsg.textContent = jugador.value
    addingJugadorImage(jugadorChoice)
    juegoFunc()
})

const juegoFunc = () => {

    if (jugadorScore > 4 || compuScore > 4) {
        disableButtons()
        if (jugadorScore > 4) {
            resultado.textContent = `Hurra!!! ${jugador.value} has ganado el Juego!!! :)`
            msgContinuar.textContent = `GAME OVER! 'Click' en Terminar Juego`
            return
        } else {
            resultado.textContent = `Lo siento ${jugador.value}. Has perdido! :(`
            return
        }
    }

    while (!juego.hidden) {
        let randomNumber = Math.floor(Math.random() * 3) + 1

        switch(randomNumber) {
            case 1:
                compuChoice = 'Piedra'
                compuChoiceMsg.textContent = 'Compu'
                addingCompuImage(compuChoice)
            break
            case 2:
                compuChoice = 'Papel'
                compuChoiceMsg.textContent = 'Compu'
                addingCompuImage(compuChoice)
            break
            case 3:
                compuChoice = 'Tijera'
                compuChoiceMsg.textContent = 'Compu'
                addingCompuImage(compuChoice)
            break
        }

        if (compuChoice === 'Piedra' && jugadorChoice === 'Papel') {
            jugadorGana()
            return
        } else if (compuChoice === 'Piedra' && jugadorChoice === 'Tijera') {
            compuGana()
            return
        } else if (compuChoice === 'Piedra' && jugadorChoice === 'Piedra') {
            empate()
            return
        } else if (compuChoice === 'Papel' && jugadorChoice === 'Piedra') {
            compuGana()
            return
        } else if (compuChoice === 'Papel' && jugadorChoice === 'Tijera') {
            jugadorGana()
            return
        } else if (compuChoice === 'Papel' && jugadorChoice === 'Papel') {
            empate()
            return
        } else if (compuChoice === 'Tijera' && jugadorChoice === 'Piedra') {
            jugadorGana()
            return
        } else if (compuChoice === 'Tijera' && jugadorChoice === 'Papel') {
            compuGana()
            return
        } else if (compuChoice === 'Tijera' && jugadorChoice === 'Tijera') {
            empate()
            return
        }
    }
}

endgame.addEventListener('click', (e) => {
    juego.style.display = "none"
    mensajeAlerta.textContent = `Hasta pronto ${jugador.value}`
    mensajeAlerta.hidden = false
    jugador.value = ''
    setTimeout(() => {
        mensajeAlerta.hidden = true
        location.reload()
    }, 2000)
})

reiniciar.addEventListener('click', (e) => {
    mensajeAlerta.textContent = ''
    jugador.value = ''
    compuChoice = ''
    jugadorChoice = ''
    scoreJugador.textContent = '0'
    scoreCompu.textContent = '0'
    resultado.textContent = ''
})

const addingCompuImage = (choice) => {
    if (choice.includes('Piedra')) {
        compuChoiceImg.src = 'pie-pap-tij-images/piedra.png'
    } else if (choice.includes('Papel')) {
        compuChoiceImg.src = 'pie-pap-tij-images/papel.png'
    } else if (choice.includes('Tijera')) {
        compuChoiceImg.src = 'pie-pap-tij-images/tijera.png'
    }
}

const addingJugadorImage = (choice) => {
    if (choice.includes('Piedra')) {
        jugadorChoiceImg.src = 'pie-pap-tij-images/piedra.png'
    } else if (choice.includes('Papel')) {
        jugadorChoiceImg.src = 'pie-pap-tij-images/papel.png'
    } else if (choice.includes('Tijera')) {
        jugadorChoiceImg.src = 'pie-pap-tij-images/tijera.png'
    }
}

const disableButtons = () => {
    piedra.disabled = true
    papel.disabled = true
    tijera.disabled = true
    piedra.style.opacity = 0.7
    papel.style.opacity = 0.7
    tijera.style.opacity = 0.7
    resultadoTitle.textContent = ''
}

const jugadorGana = () => {
    jugadorScore++ 
    scoreJugador.textContent = jugadorScore
    resultado.textContent = `Bien hecho ${jugador.value}. Has ganado esta ronda`
    msgContinuar.textContent = `Si quieres seguir jugando, ${jugador.value}, selecciona de nuevo de otra manera, 'Click' en Terminar Juego`
}

const compuGana = () => {
    compuScore++
    scoreCompu.textContent = compuScore
    resultado.textContent = `Oops ${jugador.value}. Te han ganado esta ronda`
    msgContinuar.textContent = `Si quieres seguir jugando, ${jugador.value}, selecciona de nuevo de otra manera, 'Click' en Terminar Juego`
}

const empate = () => {
    resultado.textContent = 'Ha habido un empate!'
    msgContinuar.textContent = `Si quieres seguir jugando, ${jugador.value}, selecciona de nuevo de otra manera, 'Click' en Terminar Juego`
}