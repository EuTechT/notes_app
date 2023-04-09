const btnToggle = document.querySelector('#btn-menu')

btnToggle.addEventListener('click', e => {
  const nav = document.querySelector('header nav')
  nav.classList.toggle('show')
  e.stopPropagation()
})

const btnGoUp = document.querySelector('#btn-go-up')
btnGoUp.addEventListener('click', e => {
  e.preventDefault()
  scrollY > 0 && scroll(0, 0)
  e.stopPropagation()
})