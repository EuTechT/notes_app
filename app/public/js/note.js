const btnMore = document.querySelector('#more')
const submenu = document.querySelector('.submenu')
const btnEdit = document.querySelector('#edit')
const btnDelete = document.querySelector('#delete')
const idInput = document.querySelector('#id')
const btnSave = document.querySelector('#save')
const title = document.querySelector('#title')
const description = document.querySelector('#description')

function ajax(config) {
  const xhr = new XMLHttpRequest()

  xhr.open(config.method, config.url, true)
  xhr.setRequestHeader('Content-type', config.contentType)

  xhr.onload = e => {
    if (xhr.status == 200) {
      config.success(xhr.response)
    } else if (xhr.status >= 400) {
      config.error({
        code: xhr.status,
        text: xhr.statusText
      })
    }
  }

  xhr.send(config.data)
}

btnMore.addEventListener('click', (e) => {
  submenu.classList.toggle('show')
})

btnDelete.addEventListener('click', (e) => {
  e.preventDefault()
  const _data = {
    id: idInput.value
  }

  ajax({
    method: 'DELETE',
    url: '/note',
    contentType: 'application/json',
    data: JSON.stringify(_data),
    success(response){
      if (response) {
        window.location = '/'
      }
    },
    error(error) {
      if (error) {
        window.location.reload()
      }
    }
  })
})

btnEdit.addEventListener('click', e => {
  e.preventDefault()
  title.setAttribute('contenteditable', true)
  description.setAttribute('contenteditable', true)
  btnSave.style.display = 'block'
})

btnSave.addEventListener('click', e => {
  const _data = {
    id: idInput.value,
    title: title.innerText,
    description: description.innerText
  }
  if (title.innerText == '' && description.innerText == '') {
    alert('Preencha os campos')
  } else {
    ajax({
      method: 'PUT',
      url: '/note',
      contentType: 'application/json',
      data: JSON.stringify(_data),
      success(response){
        if (response) {
          window.location = '/'
        }
      },
      error(error) {
        if (error) {
          window.location.reload()
        }
      }
    })
  }
})