const contenedor = document.querySelector('.header')

const crearNieve = () => {
    let copo = document.createElement('k')
    let x = innerWidth * Math.random()
    let size = (Math.random() * 8) + 2
    let z = Math.round(Math.random()) * 100
    let delay = Math.random() * 5
    let anima = (Math.random() * 10) + 5

    copo.style.left = x + 'px'  //Ubicacion de caida de la Nieve
    copo.style.width = size + 'px'
    copo.style.height = size + 'px'
    copo.style.zIndex = z
    copo.style.animationDelay = delay + 's'
    copo.style.animationDuration = anima + 's'


    contenedor.appendChild(copo)

    setTimeout(() => {
        copo.remove()
    }, anima * 1000)
}

setInterval(crearNieve, 100)//A MENOR CANTIDAD CANTIDAD DE NIEVE SE DUPLICA