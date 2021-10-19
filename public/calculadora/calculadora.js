console.log('Iniciando Calculadora')
let operUno = ''
let operDos = ''
let operacion = ''
let total = 0

const operacionVista = document.querySelector('#operacion-vista')
const message = document.querySelector('#message')
const resultado = document.querySelector('#resultado')
const clean = document.querySelector('#cleanAll')
const ac = document.querySelector('#actual-clean')
const percent = document.querySelector('#percent')
const division = document.querySelector('#division')
const multi = document.querySelector('#multi')
const resta = document.querySelector('#resta')
const suma = document.querySelector('#suma')
const igual = document.querySelector('#igual')
const punto = document.querySelector('#punto')
const uno = document.querySelector('#uno')
const dos = document.querySelector('#dos')
const tres = document.querySelector('#tres')
const cuatro = document.querySelector('#cuatro')
const cinco = document.querySelector('#cinco')
const seis = document.querySelector('#seis')
const siete = document.querySelector('#siete')
const ocho = document.querySelector('#ocho')
const nueve = document.querySelector('#nueve')
const cero = document.querySelector('#cero')
const pi = document.querySelector('#pi')
const random = document.querySelector('#randomNum')
const potenciaCuadrada = document.querySelector('#potenciaCuadrada')
const potenciaCubica = document.querySelector('#potenciaCubica')
const raizCuadrada = document.querySelector('#raizCuadrada')

const removeCero = () => {
    operacionVista.textContent = ''
}

uno.addEventListener('click', (e) => {
    operUno = '1'
    operacionVista.textContent += operUno
    message.textContent = '...'
})
dos.addEventListener('click', (e) => {
    operUno = '2'
    operacionVista.textContent += operUno
    message.textContent = '...'
})
tres.addEventListener('click', (e) => {
    operUno = '3'
    operacionVista.textContent += operUno
    message.textContent = '...'
})
cuatro.addEventListener('click', (e) => {
    operUno = '4'
    operacionVista.textContent += operUno
    message.textContent = '...'
})
cinco.addEventListener('click', (e) => {
    operUno = '5'
    operacionVista.textContent += operUno
    message.textContent = '...'
})
seis.addEventListener('click', (e) => {
    operUno = '6'
    operacionVista.textContent += operUno
    message.textContent = '...'
})
siete.addEventListener('click', (e) => {
    operUno = '7'
    operacionVista.textContent += operUno
    message.textContent = '...'
})
ocho.addEventListener('click', (e) => {
    operUno = '8'
    operacionVista.textContent += operUno
    message.textContent = '...'
})
nueve.addEventListener('click', (e) => {
    operUno = '9'
    operacionVista.textContent += operUno
    message.textContent = '...'
})
cero.addEventListener('click', (e) => {
    operUno = '0'
    operacionVista.textContent += operUno
    message.textContent = '...'
})
punto.addEventListener('click', (e) => {
    operUno = '.'
    operacionVista.textContent += operUno
    message.textContent = '...'
})
pi.addEventListener('click', (e) => {
    operUno = Math.PI.toString()
    operacionVista.textContent += operUno
})
random.addEventListener('click', (e) => {
    operUno = Math.random().toString()
    operacionVista.textContent += operUno
    removeCero()
    resultado.textContent = operUno
})
potenciaCuadrada.addEventListener('click', (e) => {
    operUno = Math.pow(parseFloat(operUno), 2).toString()
    operacionVista.textContent += operUno
    removeCero()
    resultado.textContent = operUno
})
potenciaCubica.addEventListener('click', (e) => {
    operUno = Math.pow(parseFloat(operUno), 3).toString()
    operacionVista.textContent += operUno
    removeCero()
    resultado.textContent = operUno
})
raizCuadrada.addEventListener('click', (e) => {
    operUno = Math.sqrt(parseFloat(operUno)).toString()
    operacionVista.textContent += operUno
    removeCero()
    resultado.textContent = operUno
})

suma.addEventListener('click', (e) => {
    if (operUno) {
        total += parseFloat(operUno)
        operacion = ' + '
        operUno = ''
        operacionVista.textContent += operacion
    } else {
        message.textContent = 'Ingresa un numero para continuar'
    }
})
resta.addEventListener('click', (e) => {
    if (operUno) {
        total += parseFloat(operUno)
        operacion = ' - '
        operUno = ''
        operacionVista.textContent += operacion
    } else {
        message.textContent = 'Ingresa un numero para continuar'
    }
})
multi.addEventListener('click', (e) => {
    if (operUno) {
        total += parseFloat(operUno)
        operacion = ' * '
        operUno = ''
        operacionVista.textContent += operacion
    } else {
        message.textContent = 'Ingresa un numero para continuar'
    }
})
division.addEventListener('click', (e) => {
    if (operUno) {
        total += parseFloat(operUno)
        operacion = ' / '
        operUno = ''
        operacionVista.textContent += operacion
    } else {
        message.textContent = 'Ingresa un numero para continuar'
    }
})
percent.addEventListener('click', (e) => {
    operUno = (parseFloat(operUno) / 100.0).toString()
    removeCero()
    operacionVista.textContent += operUno
})

igual.addEventListener('click', (e) => {
    operDos = operUno
    operacionVista.textContent += ' ='

    switch (operacion) {
        case ' + ':
            total += parseFloat(operDos)
            resultado.textContent = total.toString()
        break
        case ' - ':
            total -= parseFloat(operDos)
            resultado.textContent = total.toString()
        break
        case ' * ':
            total *= parseFloat(operDos)
            resultado.textContent = total.toString()
        break
        case ' / ':
            total /= parseFloat(operDos)
            resultado.textContent = total.toString()
        break
        default:
            message = 'Intentalo de nuevo'
    }
})

clean.addEventListener('click', (e) => {
    operUno = '0'
    operDos = '0'
    operacionVista.textContent = ''
    message.textContent = '...'
    operacion = ''
    resultado.textContent = '0'
    total = 0
})

ac.addEventListener('click', (e) => {
    let operaArray = operacionVista.textContent.split('')
    operaArray.pop()
    operacionVista.textContent = operaArray.join('')
    operUno = ''
})