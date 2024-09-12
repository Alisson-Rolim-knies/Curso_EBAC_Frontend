document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Previne o envio do formulário para validação

    // Obtendo os valores dos campos do formulário
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();
    const confirmPassword = document.getElementById('confirmPassword').value.trim();

    // Elemento para exibir mensagens de erro
    const errorMessages = document.getElementById('errorMessages');
    errorMessages.innerHTML = ''; // Limpa as mensagens de erro anteriores

    // Array para armazenar erros de validação
    let errors = [];

    // Validações dos campos
    if (!name) {
        errors.push('Nome é obrigatório.');
    }

    if (!email) {
        errors.push('Email é obrigatório.');
    } else if (!/\S+@\S+\.\S+/.test(email)) {
        errors.push('Email inválido.');
    }

    if (!password) {
        errors.push('Senha é obrigatória.');
    } else if (password.length < 6) {
        errors.push('A senha deve ter pelo menos 6 caracteres.');
    }

    if (password !== confirmPassword) {
        errors.push('As senhas não coincidem.');
    }

    // Exibe os erros de validação ou confirma o cadastro
    if (errors.length > 0) {
        errorMessages.innerHTML = errors.join('<br>'); // Mostra os erros na tela
    } else {
        alert('Cadastro realizado com sucesso!');
        
    }
});
