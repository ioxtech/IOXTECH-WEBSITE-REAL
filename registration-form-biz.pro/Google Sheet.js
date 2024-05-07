const scriptURL = 'https://script.google.com/macros/s/AKfycbwYHLJL2Z0OnZR1KtBQ3poGT1CHXJ2QYmHh8vk_mvlm1M0ajMHtln3qt9Bln6OKQ29B/exec'

const form = document.forms['contact-form']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => {
    if (response.ok) {
      alert("Thank you! Your form is submitted successfully.");
     // window.location.href = "https://buy.stripe.com/bIYg26eVR1V9fdecMO"; // Change the URL to the desired page
    } else {
      throw new Error('Network response was not ok.');
    }
  })
  .catch(error => console.error('Error!', error.message))
})
