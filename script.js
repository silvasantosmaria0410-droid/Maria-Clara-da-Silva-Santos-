
// Mostrar/ocultar informações adicionais
document.getElementById('btnMaisInfo').addEventListener('click', function() {
    const info = document.getElementById('infoExtra');
    if (info.style.display === 'none') {
        info.style.display = 'block';
        this.textContent = 'Ocultar';
    } else {
        info.style.display = 'none';
        this.textContent = 'Saiba mais';
    }
});

// Validação e envio do formulário (simulado)
document.getElementById('formContato').addEventListener('submit', function(e) {
    e.preventDefault();
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const mensagem = document.getElementById('mensagem').value;

    const resposta = document.getElementById('respostaForm');
    resposta.innerHTML = `<p>Obrigado, ${nome}! Sua mensagem foi recebida.</p>`;

    // Limpar formulário
    this.reset();
});
