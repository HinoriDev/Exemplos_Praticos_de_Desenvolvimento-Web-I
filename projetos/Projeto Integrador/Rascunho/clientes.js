// ===============================
// LOGIN DO CLIENTE
// ===============================
document.getElementById('login-form').addEventListener('submit', function(event) {
  event.preventDefault();

  const email = document.getElementById('email').value.trim();
  const senha = document.getElementById('senha').value.trim();
  const msg = document.getElementById('mensagem-login');

  if (email && senha) {
    // Login bem-sucedido
    document.getElementById('login-area').classList.add('oculto');
    document.getElementById('receitas-area').classList.remove('oculto');
    msg.textContent = '';
  } else {
    msg.textContent = 'Por favor, preencha todos os campos.';
  }
});

// ===============================
// ENVIO E SALVAMENTO DA RECEITA
// ===============================
const formReceita = document.getElementById('receita-form');

formReceita.addEventListener('submit', (e) => {
  e.preventDefault();

  const titulo = document.getElementById('titulo').value;
  const categoria = document.getElementById('categoria').value;
  const ingredientes = document.getElementById('ingredientes').value;
  const preparo = document.getElementById('preparo').value;

  const file = document.getElementById('imagem').files[0];

  if (file) {
    const reader = new FileReader();
    reader.onload = function(event) {
      const imagem = event.target.result;
      salvarReceita(titulo, categoria, ingredientes, preparo, imagem);
    };
    reader.readAsDataURL(file);
  } else {
    salvarReceita(titulo, categoria, ingredientes, preparo, '');
  }
});
