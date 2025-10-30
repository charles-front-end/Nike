let body = document.querySelector("body")
let tenis = document.querySelector(".imagem-tenis")

function mudarvisual(cor, imagem){
    body.style.background = cor
    tenis.src = imagem
}

