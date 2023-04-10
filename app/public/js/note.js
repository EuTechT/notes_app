const noteId = document.querySelector('#note-id').value
const title = document.querySelector('#note__title')
const note = document.querySelector('#note__note')
const btnEdit = document.querySelector('#edit')
const btnDelete = document.querySelector('#delete')
const btnSave = document.querySelector('#save')
const btnCancel = document.querySelector('#cancel')

btnDelete.addEventListener('click', e => {
  fetch(`/note/${noteId}`, { 
    method: 'delete',
    headers: {
      'Content-type': 'application/json; charset=UTF-8'
    }
  }).then(response => response.json())
    .then(json => {
      if (json.deletedNote) {
        location.href = '/home'
      }
    })

  e.stopPropagation()
})


btnEdit.addEventListener('click', e => {
  title.setAttribute('contenteditable', true)
  title.classList.add('editable')
  note.setAttribute('contenteditable', true)
  note.classList.add('editable')
  btnDelete.classList.add('hide')
  btnEdit.classList.add('hide')
  btnSave.classList.remove('hide')
  btnCancel.classList.remove('hide')

  e.stopPropagation()
})

btnCancel.addEventListener('click', e => {
  title.setAttribute('contenteditable', false)
  title.classList.remove('editable')
  note.setAttribute('contenteditable', false)
  note.classList.remove('editable')
  btnDelete.classList.remove('hide')
  btnEdit.classList.remove('hide')
  btnSave.classList.add('hide')
  btnCancel.classList.add('hide')

  e.stopPropagation()
})

btnSave.addEventListener('click', e => {
  const warning = document.querySelector('#warning')
  if (title.textContent.trim().length === 0 || note.textContent.trim().length === 0) {
    warning.classList.add('error')
    warning.textContent = '* Contém somente espaços em brancos ou está vazio'
  } else {
    warning.classList.remove('error')
    warning.textContent = ''

    const _data = {
      title: title.textContent.trim(),
      note: note.textContent.trim()
    }
  
    fetch(`/note/${noteId}`, { 
      method: 'put',
      body: JSON.stringify(_data),
      headers: {
        'Content-type': 'application/json; charset=UTF-8'
      }
    }).then(response => response.json())
      .then(json => {
        if (json.updatedNote) {
          location.href = `/note/${noteId}`
        }
      })
  }

  e.stopPropagation()
})