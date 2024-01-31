
//Selecionando os elementos
const botao = document.querySelector(".btn-plataforma");

const elementoPlataformas = document.querySelector(".btn-plataforma .plataformas");


//Se o botão tiver um click, o programa adicionará a classe "ativo". Caso caso já possua a classe, será reconhecido como "botaoEstaAberto", retirando a classe "ativo"
botao.addEventListener("click", () => {
    const botaoEstaAberto = elementoPlataformas.classList.contains("ativo");
    if(botaoEstaAberto) {
        elementoPlataformas.classList.remove("ativo");
    } 

    else {
        elementoPlataformas.classList.add("ativo");
    }
} );



