const agregaLetraIncorrecta = tecla => {
  tablero.font = "1.5rem Inter"
  configurarLinea(6)
  tablero.fillStyle = "#0A3871"
  tablero.weight = 400

  tablero.fillText(tecla, moveX - 115 + 40 * (10 - errores), moveY + 210, 40)
  tablero.closePath()

  switch (errores) {
    case 7:
      muneco.soga()
      break
    case 6:
      muneco.cabeza()
      break
    case 5:
      muneco.torso()
      break
    case 4:
      muneco.brazoDercho()
      break
    case 3:
      muneco.brazoIzquierdo()
      break
    case 2:
      muneco.piernaIzquierda()
      break
    case 1:
      muneco.piernaDerecha()
      alert(`Perdiste, la palabra era ${palabraSecreta}`)
      break
  }
  errores--
}
