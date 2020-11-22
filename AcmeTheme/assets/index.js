function addFormHandler() {
  document.querySelectorAll('form')
    .forEach(async form => form.addEventListener('submit', async event => {
      event.preventDefault();
      const form = event.target;
      let data = new FormData(form);
      const action = form.action;
      const method = form.method;
      const response = await fetch(action, {
        method,
        body: data,
        headers: { 'Accept': 'application/json'}
      });
      if (response.ok) {
          form.insertAdjacentHTML('afterend',
            '<p>The form has been submitted.</p>');
      } else {
        form.insertAdjacentHTML('afterend',
          '<p>The form could not be submitted. Please try again later.</p>');
      }
      const message = form.nextElementSibling;
      form.reset();
      setTimeout(() => message.remove(), 2000);
  }));
}

if(document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', addFormHandler);
} else {
  addFormHandler();
}
