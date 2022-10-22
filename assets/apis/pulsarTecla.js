const letrasSeleccionadas = []
let errores = 7

document.onkeydown = ev => {
  if (errores > 0 && !ganaste) {
    const tecla = ev.key.toUpperCase()

    let esLetra = tecla.match(/[A-Z]/g) || 0
    tecla == "Ñ" && (esLetra = ["Ñ"])

    //   Validando si la tecla es letra mayuscula y letra no seleccionado
    if (esLetra.length == 1 && !letrasSeleccionadas.includes(tecla)) {
      letrasSeleccionadas.push(tecla)

      const palabraArreglo = palabraSecreta.split("")

      palabraArreglo.includes(tecla)
        ? agregaLetraCorrecta(palabraSecreta.indexOf(tecla))
        : agregaLetraIncorrecta(tecla)
    }
  }
}
