const muneco = {
  soga: () => {
    tablero.beginPath()
    tablero.moveTo(moveX + 200, moveY - 300)
    tablero.lineTo(lineX - 50, lineY - 250)
    tablero.stroke()
    tablero.closePath()
  },
  cabeza: () => {
    var r = 25
    tablero.beginPath()
    tablero.lineWidth = 5
    tablero.arc(moveX + 200, moveY - 220, r, 0, (Math.PI / 180) * 360, true)
    tablero.stroke()
    tablero.closePath()
  },
  torso: () => {
    tablero.beginPath()
    tablero.lineWidth = 5
    tablero.moveTo(moveX + 200, moveY - 190)
    tablero.lineTo(lineX - 50, lineY - 150)
    tablero.stroke()
    tablero.closePath()
  },
  brazoDercho: () => {
    tablero.beginPath()
    tablero.lineWidth = 5
    tablero.moveTo(moveX + 200, moveY - 190)
    tablero.lineTo(lineX - 80, lineY - 150)
    tablero.stroke()
    tablero.closePath()
  },
  brazoIzquierdo: () => {
    tablero.beginPath()
    tablero.lineWidth = 5
    tablero.moveTo(moveX + 200, moveY - 190)
    tablero.lineTo(lineX - 20, lineY - 150)
    tablero.stroke()
    tablero.closePath()
  },
  piernaIzquierda: () => {
    tablero.beginPath()
    tablero.lineWidth = 5
    tablero.moveTo(moveX + 200, lineY - 150)
    tablero.lineTo(lineX - 10, lineY - 90)
    tablero.stroke()
    tablero.closePath()
  },
  piernaDerecha: () => {
    tablero.beginPath()
    tablero.lineWidth = 5
    tablero.moveTo(moveX + 200, lineY - 150)
    tablero.lineTo(lineX - 90, lineY - 90)
    tablero.stroke()
    tablero.closePath()
  },
}
