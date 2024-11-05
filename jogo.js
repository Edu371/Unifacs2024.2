function teste() {
    correto = 0;
    input_tipo = 0;
    images = input_tipo == 1 ? ["assets/1.png", "assets/2.png", "assets/3.png", "assets/4.png"] : ["assets/1.png"];
    resposta_tipo = 0;
    if (resposta_tipo == 0) {
        respostas = ["Opção1", "Opção2", "Opção3", "Opção4"];
    } else {
        respostas = ["assets/1.png", "assets/2.png", "assets/3.png", "assets/4.png"];
    }
    descricao = "AAAAAAA";
}

// input: uma_imagem
// output: nome categoria
function modo1() {
    input_tipo = 0;
    resposta_tipo = 0;
    descricao = "Responda qual é a Categoria"
    
    cat = random_category();
    item = random_item(cat);
    respostas = random_category3(cat);
    correto = random(4);
    respostas.splice(correto, 0, cat);

    images = ["database/"+cat+"/"+item+"/"+String(random(db[cat][item])).padStart(3, '0')+".png"];
}
// input: uma_imagem
// output: nome objeto
function modo2() {
    
}

// input: quatro_imagem
// output: nome categoria
function modo3() {
    
}

// input: uma_imagem
// output: imagem do mesmo objeto
function modo4() {
    
}

// input: uma_imagem
// output: imagem da mesmo categoria
function modo5() {
    
}

// input: quatro_imagem
// output: imagem da mesmo categoria
function modo6() {
    
}

// String(n).padStart(3, '0')

//teste();
modo1();

function selecionar(n) {
    if (n == correto) {
        window.alert("acertou");
    } else {
        window.alert("errado");
    }
}

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
        button.setAttribute("onClick","selecionar(" + i + ")");

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