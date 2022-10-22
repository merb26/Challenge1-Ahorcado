let letrasAcertadas = 0
let ganaste = false

const agregaLetraCorrecta = index => {
  tablero.font = "48px Inter"
  configurarLinea(5)
  tablero.fillStyle = "#0A3871"
  tablero.weight = 400

  let anchura = 600 / palabraSecreta.length
  tablero.fillText(
    palabraSecreta[index],
    moveX - 155 + anchura * index,
    moveY + 120
  )
  tablero.stroke()

  letrasAcertadas++
  if (letrasAcertadas == palabraSecreta.length) {
    alert(`Ganaste!!!! 👏`)
    ganaste = true
  }
}
