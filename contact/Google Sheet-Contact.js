const scriptURL = 'https://script.google.com/macros/s/AKfycbyhFlsIwRbGJzNxvkrBxJQGfMtw8BlqyfNsQTnhr-31MyXgAyQGKOD7oQlZSAaOPWuyRA/exec'

const form = document.forms['contact-form']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => {
    if (response.ok) {
      alert("Thank you! Your form is submitted successfully.");
    } else {
      throw new Error('Network response was not ok.');
    }
  })
  .catch(error => console.error('Error!', error.message))
})
