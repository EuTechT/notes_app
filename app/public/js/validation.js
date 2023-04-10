const btnCreateNote = document.querySelector('#btn-create-note')

btnCreateNote.addEventListener('click', e => {
  const warning = document.querySelector('#warning')
  const title = document.querySelector('#title').value
  const note = document.querySelector('#note').value

  if (title.match(/^[ \t]+$/) || note.match(/^[ \t]+$/)) {
    e.preventDefault()
    warning.classList.add('error')
    warning.textContent = '* Contém somente espaços em branco'
  } else {
    warning.classList.remove('error')
    warning.textContent = ''
    e.submit()
  }
  e.stopPropagation()
})