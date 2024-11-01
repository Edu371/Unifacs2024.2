input_tipo = 1
images = input_tipo == 1 ? ["assets/1.png", "assets/2.png", "assets/3.png", "assets/4.png"] : ["assets/1.png"]
resposta_tipo = 0;
if (resposta_tipo == 0) {
    respostas = ["Opção1", "Opção2", "Opção3", "Opção4"];
} else {
    respostas = ["assets/1.png", "assets/2.png", "assets/3.png", "assets/4.png"];
}
descricao = "AAAAAAA";

var imagesContainer;
var imagesContainer2;
var respostasContainer;
document.addEventListener("DOMContentLoaded", function(e) {

    document.getElementById("descricao").innerHTML = descricao;
    
    imagesContainer = document.getElementById('images');
    imagesContainer2 = document.getElementById('images2');
    respostasContainer = document.getElementById('respostas');
    
    if (input_tipo == 0) {
        imagesContainer.className = 'uma_imagem'
    } else {
        imagesContainer.className = 'quatro_imagem'
        imagesContainer2.className = 'quatro_imagem'
    }
    for (var i=0; i < images.length; i++) {
        const imageElement = document.createElement('img');
        imageElement.src = images[i];
        if (i < 2) {
            imagesContainer.appendChild(imageElement);
        } else {
            imagesContainer2.appendChild(imageElement);
        }
    };

    for (var i=0; i < respostas.length; i++) {
        const button = document.createElement('button');
        button.className = "btn-visualmente";

        if (resposta_tipo == 0) {
            button.innerHTML = respostas[i];
        } else {
            const img = document.createElement('img');
            img.src = respostas[i];
            button.appendChild(img);
        }
        respostasContainer.appendChild(button);
    }
})