document.getElementById('close').addEventListener('click', function() {
    // Recarregar a página
    location.reload();
});

var modais = document.querySelectorAll('.modal');

// Adicionar um ouvinte de evento para o evento de fechamento de cada modal
modais.forEach(function(modal) {
    modal.addEventListener('hidden.bs.modal', function () {
        // Recarregar a página
        location.reload();
    });
});