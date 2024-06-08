document.getElementById('formulario').addEventListener('submit', function(event) {
    event.preventDefault(); 
    const campoA = parseFloat(document.getElementById('campoA').value);
    const campoB = parseFloat(document.getElementById('campoB').value);
    const mensagem = document.getElementById('mensagem');

    if (campoB > campoA) {
        mensagem.textContent = "Formulário válido: Campo B é maior que Campo A.";
        mensagem.classList.remove('error');
        mensagem.classList.add('success');
    } else {
        mensagem.textContent = "Formulário inválido: Campo B deve ser maior que Campo A.";
        mensagem.classList.remove('success');
        mensagem.classList.add('error');
    }
    
    document.getElementById('campoA').value = '';
    document.getElementById('campoB').value = '';
});
