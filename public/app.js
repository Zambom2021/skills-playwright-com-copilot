document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('newsletter-form');
  const message = document.getElementById('confirmation-message');

  if (!form || !message) {
    return;
  }

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    message.textContent = 'Inscrição confirmada!';
  });
});
