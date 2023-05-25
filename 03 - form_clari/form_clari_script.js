form_clari_script.js
const contactForm = document.getElementById('contact-form');

// Adiciona um ouvinte de evento para o envio do formulário
contactForm.addEventListener('submit', function (event) {
    event.preventDefault(); // Impede o envio do formulário padrão

    // Obtém os valores dos campos de entrada
    const fullName = document.getElementById('full-name').value;
    const age = document.getElementById('age').value;
    const instagram = document.getElementById('instagram').value;
    const phone = document.getElementById('phone').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Valida a idade para garantir que seja maior que 18
    if (age < 18) {
        alert('É necessário ter mais de 18 anos para enviar o formulário.');
        return;
    }

    // Realiza o processamento dos dados do formulário
    // Aqui você pode enviar os dados para um servidor, salvar no banco de dados, etc.

    // Exibe uma mensagem de sucesso
    alert('O formulário foi enviado com sucesso!');
    contactForm.reset(); // Limpa os campos do formulário
});
