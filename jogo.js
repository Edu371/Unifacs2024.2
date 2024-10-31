input_tipo = 1
images = input_tipo == 1 ? ["assets/1.png", "assets/2.png", "assets/3.png", "assets/4.png"] : ["assets/1.png"]

var imagesContainer;
var imagesContainer2;
document.addEventListener("DOMContentLoaded", function(e) {
    imagesContainer = document.getElementById('images');
    imagesContainer2 = document.getElementById('images2');
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
})