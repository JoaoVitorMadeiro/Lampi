// Seleciona o formulário de upload pelo seu ID
const form = document.getElementById('upload-form');

// Seleciona o campo de entrada do arquivo pelo seu ID
const fileInput = document.getElementById('file-input');

// Seleciona a tela de carregamento pelo seu ID
const loadingScreen = document.getElementById('loading-screen');

// Adiciona um ouvinte de evento ao formulário para o evento de 'submit' (envio)
form.addEventListener('submit', (e) => {
    // Previne a ação padrão do formulário de ser executada
    e.preventDefault();
    
    // Obtém o primeiro arquivo selecionado no campo de entrada do arquivo
    const file = fileInput.files[0];
    
    // Se um arquivo foi selecionado
    if (file) {
        // Mostra a tela de carregamento
        showLoadingScreen();
        
        // Simula um atraso no upload do arquivo (isso deve ser removido em um ambiente de produção)
        setTimeout(() => {
            // Esconde a tela de carregamento
            hideLoadingScreen();
            // Mostra um alerta informando que o arquivo foi carregado com sucesso
            alert('Arquivo carregado com sucesso!');
        }, 2000);
    } else {
        // Se nenhum arquivo foi selecionado, mostra um alerta pedindo para o usuário selecionar um arquivo
        alert('Por favor, selecione um arquivo para carregar.');
    }
});

// Função para mostrar a tela de carregamento
function showLoadingScreen() {
    // Muda o estilo de exibição da tela de carregamento para 'block', tornando-a visível
    loadingScreen.style.display = 'block';
}

// Função para esconder a tela de carregamento
function hideLoadingScreen() {
    // Muda o estilo de exibição da tela de carregamento para 'none', tornando-a invisível
    loadingScreen.style.display = 'none';
}