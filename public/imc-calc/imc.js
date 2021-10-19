const reiniciar = document.querySelector('#btn-reiniciar')
const calcular = document.querySelector('#btn-calcular')
const resultado = document.querySelector('#resultado')

let peso = 0
let estatura = 0
let resultadoText = ''

document.querySelector('#peso').addEventListener('input', (e) => {
    peso = e.target.value
})
document.querySelector('#estatura').addEventListener('input', (e) => {
    estatura = e.target.value
})

calcular.addEventListener('click', () => {
    if (peso && estatura) {
        imc = peso / (estatura * estatura)
        resultadoText = `Tu Indice de masa corporal es: ${imc}`
    } else {
        resultadoText = `Ingresa datos validos`
    }

    resultado.textContent = resultadoText
})

reiniciar.addEventListener('click', (e) => {
    document.querySelector('#peso').value = ''
    document.querySelector('#estatura').value = ''
    resultado.textContent = ''
})











