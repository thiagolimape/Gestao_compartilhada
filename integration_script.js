

// Array para armazenar as sugestões enviadas
let sentSuggestions = [
    { sector: "Recursos Humanos", title: "Sugestão 1", suggestionText: "Texto da Sugestão 1" },
    { sector: "Departamento Pessoal", title: "Sugestão 2", suggestionText: "Texto da Sugestão 2" },
    { sector: "Logística", title: "Sugestão 3", suggestionText: "Texto da Sugestão 3" }
];

// Função para exibir as sugestões na tela de votação
function displaySuggestions() {
    const suggestionCarouselInner = document.querySelector('#suggestionCarousel .carousel-inner');
    suggestionCarouselInner.innerHTML = '';

    for (let i = 0; i < sentSuggestions.length; i++) {
        const activeClass = i === 0 ? 'active' : '';
        const suggestion = sentSuggestions[i];

        const card = `
            <div class="carousel-item ${activeClass}">
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">${suggestion.title}</h5>
                        <button class="btn btn-primary" onclick="openSuggestionDetails(${i})">Ver Sugestão</button>
                        <a href="comments.html" class="btn btn-link">Ver Comentários</a>
                    </div>
                </div>
            </div>
        `;

        suggestionCarouselInner.innerHTML += card;
    }
}

// Função para abrir os detalhes da sugestão
function openSuggestionDetails(index) {
    const suggestion = sentSuggestions[index];

    const suggestionModal = document.getElementById('suggestionModal');
    const suggestionTitle = document.getElementById('suggestionTitle');
    const suggestionText = document.getElementById('suggestionText');

    suggestionTitle.textContent = suggestion.title;
    suggestionText.textContent = suggestion.suggestionText;

    suggestionModal.style.display = 'block';
}

// Chamada para exibir as sugestões na tela de votação
displaySuggestions();

function submitSuggestion(event) {
    event.preventDefault(); // Evita o comportamento padrão do formulário (recarregar a página)

    // Código para enviar a sugestão
    // ...

    // Mostrar a modal de confirmação
    $('#confirmationModal').modal('show');
}

function redirectToSubmit() {
    // Redirecionar para a página de envio de sugestão
    window.location.href = 'submit.html';
}

// Adicionando um event listener para o formulário
document.getElementById('suggestionForm').addEventListener('submit', submitSuggestion);
