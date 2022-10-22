const palabras = ["alura", "oracle"]

let tablero = document.querySelector("#forca").getContext("2d")

let palabraSecreta
let letras = []
let errores = 8

const escogerPalabraSecreta = () => {
  palabraSecreta = palabras[Math.floor(Math.random() * palabras.length)]
}

const comprobarLetra = carAscii => {
  if (carAscii >= 65 && carAscii <= 90 && letras.indexOf(carAscii)) {
    letras.push(carAscii)
    return false
  }

  return true
}

const anadirLetraIncorrecta = () => {
  errores--
}

const iniciarJuego = () => {
  document.querySelector("#iniciar-juego").style.display = "none"

  escogerPalabraSecreta()
  dibujarCanvas()
  dibujarLinea()

  document.onkeydown = e => {
    let letra = e.key.toUpperCase()

    if (comprobarLetra(letra) && palabraSecreta.includes(letra)) {
      for (let index = 0; index < palabraSecreta.length; index++) {
        if (palabraSecreta[index] == letra) {
          escribirLetraCorrecta(i)
        } else {
          anadirLetraIncorrecta(letra)
          escribirLetraIncorrecta(letra, errores)
        }
      }
    }
  }
}
