document.addEventListener("DOMContentLoaded", () => {

    // ==========================================
    // 1. Lógica dos Cards de DJs (Flip 3D)
    // ==========================================
    const djCards = document.querySelectorAll('.dj-card');

    djCards.forEach(card => {
        card.addEventListener('click', () => {
            const isAlreadyExpanded = card.classList.contains('is-expanded');

            djCards.forEach(c => {
                c.classList.remove('is-expanded');
            })

            if(!isAlreadyExpanded) {
                // Seleciona a camada interna que possui a transição 3D
                const innerCard = card.querySelector('.card-inner');

                // Alterna a classe do Tailwind responsável por girar 180 graus no eixo Y
                innerCard.classList.toggle('[transform:rotateY(180deg)]');
            }
        });
    });

    // ==========================================
    // 2. Lógica das Vertentes (Acordeão Exclusivo)
    // ==========================================
    const vertenteCards = document.querySelectorAll('.vertente-card');

    vertenteCards.forEach(card => {
        card.addEventListener('click', () => {
            // Verifica se o card clicado JÁ está aberto
            const isAlreadyExpanded = card.classList.contains('is-expanded');

            // Passo A: Fecha TODOS os cards removendo a classe 'is-expanded'
            vertenteCards.forEach(c => {
                c.classList.remove('is-expanded');
            });

            // Passo B: Se o card clicado NÃO estava aberto, nós o abrimos agora.
            // (Se ele já estava aberto, o Passo A já o fechou e ele permanecerá assim)
            if (!isAlreadyExpanded) {
                card.classList.add('is-expanded');
            }
        });
    });

});