const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
    e.preventDefault(); 

    const name = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('senha').value;

    if (name.trim() === '') {
        alert('Por favor, insira seu nome.');
        return;
    }

    if (email.trim() === '') {
        alert('Por favor, insira seu email.');
        return;
    }

    if (password.trim() === '') {
        alert('Por favor, insira sua senha.');
        return;
    }


    const userData = {
        nome: name,
        email: email,
        senha: password
    };

    fetch('/api/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(userData)
    })
    .then(response => {
        if (response.ok) {
            alert('Registration successful!');
            window.location.href = 'sign.html';
        } else {
            alert('Registration failed. Please try again.');
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert('Ocorreu um erro, tente novamente mais tarde.');
    });
});
window.location.href = "./sign.html"