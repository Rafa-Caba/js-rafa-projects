const cita = document.querySelector('#santo-cita')
const autor = document.querySelector('#santo-autor')
const btn = document.querySelector('#boton-citas')
const citasBackground = document.querySelector('.citas-contenedor-texto')

const generarCita = () => {
    const citas = {
        "-San Agustín.": "La simulación de la humildad es la más grande soberbia.",
        "-Santo Tomás Moro.": "El hombre no puede ser separado de Dios, ni la política de la moral.",
        "-Santo Tomás de Aquino.": "Creer es un acto del entendimiento que asiente a la verdad divina por imperio de la voluntad movida por Dios mediante la gracia.",
        "-San Martín de Porres.": "No busques ser grande a los ojos de los hombres, sino a los ojos de Dios.",
        "-San Antonio de Padua.": "Un cristiano fiel, iluminado por los rayos de la gracia al igual que un cristal, deberá iluminar a los demás con sus palabras y acciones, con la luz del buen ejemplo.",
        "-San Juan Pablo II.": "Dios no se oculta a aquellos que lo buscan con un corazón sincero, aunque lo hagan a tientas, de manera imprecisa y difusa.",
        "-San Agustín": "Ama y haz lo que quieras. Si callas, callarás con amor; si gritas gritarás con amor, si corriges lo harás con amor, si perdonas, perdonarás con amor.",
        "-Santa Faustina Kowalska.": "Debes mostrar misericordia al prójimo siempre y en todas partes. No puedes dejar de hacerlo, ni excusarte, ni justificarte.",
        "-San Agustín.": "Si no quieres sufrir no ames, ¿pero si no amas para que quieres vivir?",
        "-San Juan Bosco.": "Procura siempre vivir en la amistad de Dios.",
        "-San Agustín.": "La ociosidad camina con lentitud, por eso todos los vicios la alcanzan."
    }
    
    const santos = Object.keys(citas)
    
    const santo = santos[Math.floor(Math.random() * santos.length)]
    const santoCita = citas[santo]
    
    cita.textContent = santoCita
    autor.textContent = santo

    if (santo.includes('San Agustín')) {
        citasBackground.style.backgroundImage = "url('images/st-augustine.jpg')"
        citasBackground.style.backgroundBlendColor = "transparent"
        citasBackground.style.backgroundSize = 'screen'
        citasBackground.style.backgroundRepeat = "no-repeat"
    } else if (santo.includes('Santo Tomás Moro')) {
        citasBackground.style.backgroundImage = "url('images/st-thomas-more.jpg')"
        citasBackground.style.backgroundBlendMode = "screen"
        citasBackground.style.backgroundSize = 'cover'
        citasBackground.style.backgroundRepeat = "no-repeat"
    } else if (santo.includes('Santo Tomás de Aquino')) {
        citasBackground.style.backgroundImage = "url('images/st-thoma-aquino.jpg')"
        citasBackground.style.backgroundBlendMode = "screen"
        citasBackground.style.backgroundSize = 'cover'
        citasBackground.style.backgroundRepeat = "no-repeat"
    } else if (santo.includes('San Martín de Porres')) {
        citasBackground.style.backgroundImage = "url('images/st-martin-porres.jpg')"
        citasBackground.style.backgroundBlendMode = "screen"
        citasBackground.style.backgroundSize = 'cover'
        citasBackground.style.backgroundRepeat = "no-repeat"
    } else if (santo.includes('San Antonio de Padua')) {
        citasBackground.style.backgroundImage = "url('images/st-antonio-padua.jpg')"
        citasBackground.style.backgroundBlendMode = "screen"
        citasBackground.style.backgroundSize = 'cover'
        citasBackground.style.backgroundRepeat = "no-repeat"
    } else if (santo.includes('San Juan Pablo II')) {
        citasBackground.style.backgroundImage = "url('images/st-juan-pablo-II.jpg')"
        citasBackground.style.backgroundBlendMode = "screen"
        citasBackground.style.backgroundSize = 'cover'
        citasBackground.style.backgroundRepeat = "no-repeat"
    } else if (santo.includes('Santa Faustina Kowalska')) {
        citasBackground.style.backgroundImage = "url('images/st-faustina-kowalska.jpg')"
        citasBackground.style.backgroundBlendMode = "screen"
        citasBackground.style.backgroundSize = 'cover'
        citasBackground.style.backgroundRepeat = "no-repeat"
    } else if (santo.includes('San Juan Bosco')) {
        citasBackground.style.backgroundImage = "url('images/st-juan-bosco.jpg')"
        citasBackground.style.backgroundBlendMode = "screen"
        citasBackground.style.backgroundSize = 'cover'
        citasBackground.style.backgroundRepeat = "no-repeat"
    } 
}

btn.addEventListener('click', (e) => {
    generarCita()
})