const dibujarCanvas = () => {
  tablero.lineWidth = 8
  tablero.lineCap = `round`
  tablero.lineJoin = `round`
  tablero.fillStyle = `#F3F5F6`
  tablero.strokeStyle = `#8A3871`

  tablero.fillRect(0, 0, 1200, 860)
  tablero.beginPath()
  tablero.moveTo(650, 500)
  tablero.lineTo(900, 500)
  tablero.stroke()
  tablero.closePath()
}

const dibujarLinea = () => {
  tablero.lineWidth = 6
  tablero.lineCap = `round`
  tablero.lineJoin = `round`
  tablero.fillStyle = `#F3F5F6`
  tablero.strokeStyle = `#8A3871`

  const ancho = 600 / palabraSecreta.length

  for (let index = 0; index < palabraSecreta.length; index++) {
    tablero.moveTo(500 + ancho * index, 640)
    tablero.moveTo(500 + ancho * index, 640)
  }

  tablero.stroke()
}

const escribirLetraCorrecta = index => {
  tablero.font = "bold 52px Inter"
  tablero.lineWidth = 6
  tablero.lineCap = "round"
  tablero.lineJoin = "round"
  tablero.fillStyle = "#F3F5F6"

  let ancho = 600 / palabraSecreta.length

  tablero.fillText(palabraSecreta[index], 505 + ancho * index, 620)

  tablero.stroke()
}

const escribirLetraIncorrecta = (letra, errIzquierda) => {
  tablero.font = "bold 50px Inter"
  tablero.lineWidth = 6
  tablero.lineCap = "round"
  tablero.lineJoin = "round"
  tablero.fillStyle = "#F3F5F6"

  tablero.fillText(letra, 535 + 40 * (10 - errIzquierda), 710, 40)
}
