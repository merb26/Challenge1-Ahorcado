const palabras = ["one", "Oracle", "Hola", "html", "juego"]

const escogerPalabraSecreta = () => {
  let total = palabras.length

  const item = Math.random() * --total

  return palabras[Math.round(item)]
}

const palabraSecreta = escogerPalabraSecreta().toUpperCase()

console.log(palabraSecreta)
console.log(palabraSecreta.length)
