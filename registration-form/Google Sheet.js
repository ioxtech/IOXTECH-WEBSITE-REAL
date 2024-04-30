const scriptURL = 'https://script.google.com/macros/s/AKfycbx7J_YyKe7ZVEO_xJt_8n8xMbBDUPpz8whRSKZ9Dr18ygMp6Tb2MesdSvjRxi_Gu2TA/exec'

const form = document.forms['contact-form']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Thank you! your form is submitted successfully." ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
})