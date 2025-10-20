window.addEventListener("DOMContentLoaded", () => {
  const container = document.querySelector(".receitas-lista");
  const receitas = JSON.parse(localStorage.getItem("receitas")) || [];

  receitas.forEach(r => {
    const card = document.createElement("article");
    card.classList.add("receita");
    card.innerHTML = `
      <img src="${r.imagem}" alt="${r.titulo}">
      <h2>${r.titulo}</h2>
      <p>${r.ingredientes.substring(0, 80)}...</p>
      <button>Ver mais</button>
    `;
    container.appendChild(card);
  });
});
