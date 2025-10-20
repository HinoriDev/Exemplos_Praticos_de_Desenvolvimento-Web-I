function filtrar() {
  const input = document.getElementById('buscar').value.toLowerCase();
  const cards = document.querySelectorAll('#listaReceitas .card');
  cards.forEach(card => {
    const texto = card.querySelector('p').textContent.toLowerCase();
    card.style.display = texto.includes(input) ? '' : 'none';
  });
}
window.addEventListener('DOMContentLoaded', () => {
  const listaReceitas = document.getElementById('listaReceitas');
  const receitas = JSON.parse(localStorage.getItem('receitas')) || [];

  receitas.forEach(receita => {
    const card = document.createElement('div');
    card.classList.add('card');

    const img = document.createElement('img');
    img.src = receita.imagem || 'imagens/padrao.jpg';
    img.alt = receita.titulo;

    const nome = document.createElement('p');
    nome.textContent = receita.titulo;

    card.appendChild(img);
    card.appendChild(nome);
    listaReceitas.appendChild(card);
  });
});
window.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("listaReceitas");
  const receitas = JSON.parse(localStorage.getItem("receitas")) || [];

  // Mostra só as 4 mais recentes
  receitas.slice(-4).reverse().forEach(r => {
    const card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = `
      <img src="${r.imagem}" alt="${r.titulo}">
      <p>${r.titulo}</p>
    `;
    container.appendChild(card);
  });
});
