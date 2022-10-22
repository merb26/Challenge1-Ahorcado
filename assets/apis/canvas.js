let tablero = document.querySelector("#canvas").getContext("2d")

const moveX = 450
const moveY = 350

const lineX = 700
const lineY = 350

const configurarLinea = anchoLinea => {
  tablero.lineWidth = anchoLinea
  tablero.lineCap = `round`
  tablero.lineJoin = `round`
  tablero.fillStyle = `#F3F5F6`
}

const dibujarCanvas = () => {
  configurarLinea(5)
  tablero.fillStyle = "#f3f5fc"
  tablero.strokeStyle = `#0A3871`
  tablero.fillRect(0, 0, 1200, 860)

  // Base
  tablero.beginPath()
  tablero.moveTo(moveX, moveY)
  tablero.lineTo(lineX, lineY)
  tablero.stroke()
  tablero.closePath()

  // Palo
  tablero.beginPath()
  tablero.moveTo(moveX + 50, moveY)
  tablero.lineTo(lineX - 200, lineY - 300)
  tablero.stroke()
  tablero.closePath()

  // Techo
  tablero.beginPath()
  tablero.moveTo(moveX + 50, moveY - 300)
  tablero.lineTo(lineX - 50, lineY - 300)
  tablero.stroke()
  tablero.closePath()
}

dibujarCanvas()
dibujarGuion()
