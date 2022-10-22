const dibujarGuion = () => {
  configurarLinea(5)

  const ancho = 600 / palabraSecreta.length
  for (let index = 0; index < palabraSecreta.length; index++) {
    tablero.moveTo(moveX - 150 + (ancho * index - 10), moveY + 140)
    tablero.lineTo(lineX - 350 + ancho * index, moveY + 140)
  }

  tablero.stroke()
  tablero.closePath()
}
