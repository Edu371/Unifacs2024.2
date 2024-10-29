input_tipo = 1
images = input_tipo == 1 ? ["assets/1.png", "assets/2.png", "assets/3.png", "assets/4.png"] : ["assets/1.png"]

var imagesContainer;
document.addEventListener("DOMContentLoaded", function(e) {
    imagesContainer = document.getElementById('images');
    if (input_tipo == 0) {
        imagesContainer.className = 'uma_imagem'
    } else {
        imagesContainer.className = 'quatro_imagem'
    }
    images.forEach((img) => {
        const imageElement = document.createElement('img');
        imageElement.src = img;
        imagesContainer.appendChild(imageElement);
    });
})