// todos os eventos de js       
document.addEventListener("DOMContentLoaded", function() {
    // evento de clique
    document.getElementById("meuBotao").addEventListener("click", function() {
        alert("Botão clicado!");
    });
    // evento de mouse sobre
    document.getElementById("meuElemento").addEventListener("mouseover", function() {
        this.style.backgroundColor = "yellow";
    }
    );
    // evento de mouse fora
    document.getElementById("meuElemento").addEventListener("mouseout", function() {
        this.style.backgroundColor = "";
    }
    );
    // evento de teclado
    document.addEventListener("keydown", function(event) {
        console.log("Tecla pressionada: " + event.key);
    });
    // evento de formulário
    document.getElementById("meuFormulario").addEventListener("submit", function(event) {
        event.preventDefault();
        alert("Formulário enviado!");
    });
    // evento de redimensionamento da janela
    window.addEventListener("resize", function() {
        console.log("Janela redimensionada para: " + window.innerWidth + "x" + window.innerHeight);
    });
    // evento de scroll
    window.addEventListener("scroll", function() {
        console.log("Página rolada para: " + window.scrollY);
    });
    // evento de foco
    document.getElementById("meuInput").addEventListener("focus", function() {
        this.style.borderColor = "blue";
    });
    document.getElementById("meuInput").addEventListener("blur", function() {
        this.style.borderColor = "";
    });
    // evento de mudança
    document.getElementById("meuSelect").addEventListener("change", function() {
        console.log("Opção selecionada: " + this.value);
    });
    // evento de carregamento da imagem
    document.getElementById("minhaImagem").addEventListener("load", function() {
        console.log("Imagem carregada com sucesso!");
    });
    // evento de erro na imagem
    document.getElementById("minhaImagem").addEventListener("error", function() {
        console.log("Erro ao carregar a imagem.");
    }); 
});
// evento de toque (touch)
document.getElementById("meuElementoTouch").addEventListener("touchstart", function() {
    this.style.backgroundColor = "lightblue";
}); 
document.getElementById("meuElementoTouch").addEventListener("touchend", function() {
    this.style.backgroundColor = "";
});
document.getElementById("meuElementoTouch").addEventListener("touchmove", function(event) {
    console.log("Movendo o toque em: " + event.touches[0].clientX + ", " + event.touches[0].clientY);
});
