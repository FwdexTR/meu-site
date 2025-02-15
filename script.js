document.addEventListener("DOMContentLoaded", function () {
    const container = document.querySelector(".hearts-container");

    function createHeart() {
        const heart = document.createElement("div");
        heart.classList.add("heart");
        heart.innerHTML = "❤️";
        heart.style.left = Math.random() * 100 + "vw";
        heart.style.animationDuration = Math.random() * 3 + 3 + "s"; // Entre 3 e 6 segundos
        heart.style.fontSize = Math.random() * 20 + 20 + "px"; // Tamanhos variados entre 20px e 40px
        heart.style.color = Math.random() > 0.5 ? "red" : "pink";

        container.appendChild(heart);

        // Remover o coração após a animação
        setTimeout(() => {
            heart.remove();
        }, 6000);
    }

    // Criar novos corações a cada 400ms para maior frequência
    setInterval(createHeart, 400);
    document.querySelector(".botao-amor").addEventListener("click", function() {
        let mensagem = document.getElementById("mensagem-container");
        mensagem.style.display = "block";
    
        // Fechar a mensagem ao clicar nela
        mensagem.addEventListener("click", function () {
            mensagem.style.display = "none";
        });
    });
    
    
    
});


