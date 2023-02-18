const btnOpenForm = document.querySelector('#open-form')
const modal = document.querySelector('.modal')
const btnCancel = document.querySelector('#cancel')

btnOpenForm.addEventListener('click', e => modal.classList.add('show'))

btnCancel.addEventListener('click', (e) => {
  e.preventDefault()
  modal.classList.remove('show')
})