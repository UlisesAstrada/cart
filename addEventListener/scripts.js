const aumentar = document.getElementById('aumentar')
const disminuir = document.getElementById('disminuir')
const span = document.getElementById('contador')
const reset = document.getElementById('reset')
let contador = 0

aumentar.addEventListener('click', () => {
  contador++
  span.textContent = contador
})

disminuir.addEventListener('click', () => {
  contador--
  span.textContent = contador
})

reset.addEventListener('click', () => {
  contador = 0
  span.textContent = contador
})