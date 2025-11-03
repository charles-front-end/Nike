let body = document.querySelector("body")
let tenis = document.querySelector(".imagem-tenis")

function mudarvisual(cor, imagem, modelo){
    const tenis = document.querySelector(".imagem-tenis");

    body.style.backgroundColor = cor;
    tenis.src = imagem;

    tenis.classList.remove("nike1", "nike2", "nike3", "nike4");

    tenis.classList.add(modelo);
}

