function sendPasswordResetEmail(email) {
}

function handleForgotPasswordFormSubmit(event) {
  event.preventDefault();

  const email = document.getElementById('email').value;

  sendPasswordResetEmail(email);

  alert('Senha resetada!');
}

const forgotPasswordForm = document.getElementById('PasswordForgot');
forgotPasswordForm.addEventListener('submit', handleForgotPasswordFormSubmit);
