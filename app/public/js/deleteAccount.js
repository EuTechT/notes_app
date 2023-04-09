const btnDeleteAccount = document.querySelector('#delete-account')

btnDeleteAccount.addEventListener('click', e => {
  e.preventDefault()
  const userId = document.querySelector('#user-id').value

  fetch(`/user/${userId}`, { 
    method: 'delete',
    headers: {
      'Content-type': 'application/json; charset=UTF-8'
    }
   })
    .then(response => response.json())
    .then(json => {
      if (json.deletedUser) {
        const modal = document.querySelector('#modal')
        const timer = document.querySelector('#timer')
        modal.classList.add('show')
        setInterval(() => {
          let v = parseInt(timer.textContent)
          timer.textContent = v - 1
        }, 1000)
        setTimeout(() => {
          location.href = '/'
        }, 5000)
      }
    })

  e.stopPropagation()
})