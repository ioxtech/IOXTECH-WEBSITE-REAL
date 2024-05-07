const scriptURL = 'https://script.google.com/macros/s/AKfycbwG9cojshMmW6u3II5NFpfb3IqfcAe1n0hpaekzKlucyPDubm2d5EOgUoym16IiLouA/exec'

const form = document.forms['contact-form']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => {
    if (response.ok) {
      alert("Thank you! Your form is submitted successfully.");
      window.location.href = "https://www.ioxtechglobal.com/admin/"; // Change the URL to the desired page
    } else {
      throw new Error('Network response was not ok.');
    }
  })
  .catch(error => console.error('Error!', error.message))
})
