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
    descricao = "Responda qual é a Categoria";
    
    cat = random_category();
    item = random_item(cat);
    respostas = random_array3(categorias, cat);
    correto = random(4);
    respostas.splice(correto, 0, cat);

    images = ["database/"+cat+"/"+item+"/"+String(random(db[cat][item])).padStart(3, '0')+".png"];
}
// input: uma_imagem
// output: nome objeto
function modo2() {
    input_tipo = 0;
    resposta_tipo = 0;
    descricao = "Responda qual é o Nome";

    cat = random_category();
    item = random_item(cat);
    respostas = random_array3(items, item);
    correto = random(4);
    respostas.splice(correto, 0, item);
    images = ["database/"+cat+"/"+item+"/"+String(random(db[cat][item])).padStart(3, '0')+".png"];
}

// input: quatro_imagem
// output: nome categoria
function modo3() {
    input_tipo = 1;
    resposta_tipo = 0;
    descricao = "Responda qual é a Categoria";
    
    cat = random_category();
    item = random_item(cat);
    respostas = random_array3(categorias, cat);
    correto = random(4);
    respostas.splice(correto, 0, cat);

    other = random_array3(Object.keys(db[cat]), item);
    
    images = ["database/"+cat+"/"+item+"/"+String(random(db[cat][item])).padStart(3, '0')+".png"];
    images.push("database/"+cat+"/"+other[0]+"/"+String(random(db[cat][other[0]])).padStart(3, '0')+".png");
    images.push("database/"+cat+"/"+other[1]+"/"+String(random(db[cat][other[1]])).padStart(3, '0')+".png");
    images.push("database/"+cat+"/"+other[2]+"/"+String(random(db[cat][other[2]])).padStart(3, '0')+".png");
}

// input: uma_imagem
// output: imagem do mesmo objeto
function modo4() {
    input_tipo = 0;
    resposta_tipo = 1;
    descricao = "Qual imagem é o mesmo ?";

    cat = random_category();
    item = random_item(cat);
    r = random_array3(items, item);
    c = [get_item_category(r[0]), get_item_category(r[1]), get_item_category(r[2])];
    respostas = ["database/"+c[0]+"/"+r[0]+"/"+String(random(db[c[0]][r[0]])).padStart(3, '0')+".png",
                 "database/"+c[1]+"/"+r[1]+"/"+String(random(db[c[1]][r[1]])).padStart(3, '0')+".png",
                 "database/"+c[2]+"/"+r[2]+"/"+String(random(db[c[2]][r[2]])).padStart(3, '0')+".png"];
    correto = random(4);
    image_n = random(db[cat][item]);
    respostas.splice(correto, 0, "database/"+cat+"/"+item+"/"+String(random_exclude(db[cat][item], image_n)).padStart(3, '0')+".png");
    
    images = ["database/"+cat+"/"+item+"/"+String(image_n).padStart(3, '0')+".png"];
}

// input: uma_imagem
// output: imagem da mesmo categoria
function modo5() {
    input_tipo = 0;
    resposta_tipo = 1;
    descricao = "Qual imagem é da mesma Categoria ?";

    cat = random_category();
    item = random_item(cat);
    c = random_array3(categorias, cat);
    
    // para evitar confusão
    remove = ""
    if (item == "ovo") {remove = "galinha"}
    if (item == "galinha") {remove = "ovo"}
    
    r = [random_item(c[0], remove), random_item(c[1], remove), random_item(c[2], remove)];
    respostas = ["database/"+c[0]+"/"+r[0]+"/"+String(random(db[c[0]][r[0]])).padStart(3, '0')+".png",
                 "database/"+c[1]+"/"+r[1]+"/"+String(random(db[c[1]][r[1]])).padStart(3, '0')+".png",
                 "database/"+c[2]+"/"+r[2]+"/"+String(random(db[c[2]][r[2]])).padStart(3, '0')+".png"];
    correto = random(4);
    i = random_item(cat, item);
    respostas.splice(correto, 0, "database/"+cat+"/"+i+"/"+String(random(db[cat][i])).padStart(3, '0')+".png");
    
    images = ["database/"+cat+"/"+item+"/"+String(random(db[cat][item])).padStart(3, '0')+".png"];
}

// input: quatro_imagem
// output: imagem da mesmo categoria
function modo6() {
    input_tipo = 1;
    resposta_tipo = 1;
    descricao = "Qual imagem é da mesma Categoria ?";

    cat = random_category();
    item = random_item(cat);
    c = random_array3(categorias, cat);
    r = [random_item(c[0]), random_item(c[1]), random_item(c[2])];
    respostas = ["database/"+c[0]+"/"+r[0]+"/"+String(random(db[c[0]][r[0]])).padStart(3, '0')+".png",
                 "database/"+c[1]+"/"+r[1]+"/"+String(random(db[c[1]][r[1]])).padStart(3, '0')+".png",
                 "database/"+c[2]+"/"+r[2]+"/"+String(random(db[c[2]][r[2]])).padStart(3, '0')+".png"];
    correto = random(4);
    i = random_item(cat, item);
    respostas.splice(correto, 0, "database/"+cat+"/"+i+"/"+String(random(db[cat][i])).padStart(3, '0')+".png");
    
    images = ["database/"+cat+"/"+item+"/"+String(random(db[cat][item])).padStart(3, '0')+".png"];
    x = Object.keys(db[cat]);
    x.splice(x.indexOf(i), 1);
    i = random_array3(x, item);
    images.push("database/"+cat+"/"+i[0]+"/"+String(random(db[cat][i[0]])).padStart(3, '0')+".png");
    images.push("database/"+cat+"/"+i[1]+"/"+String(random(db[cat][i[1]])).padStart(3, '0')+".png");
    images.push("database/"+cat+"/"+i[2]+"/"+String(random(db[cat][i[2]])).padStart(3, '0')+".png");
}

// String(n).padStart(3, '0')

//teste();
modos = [modo1, modo2, modo3, modo4, modo5, modo6];
random_choice(modos)();

function selecionar(n) {
    const { style } = document.documentElement;
    showMensagem();
    mensagem = document.getElementsByClassName("mensagem")[0];
    placar = document.getElementsByClassName("placar")[0];
    if (n == correto) {
        mensagem.innerHTML = "acertou";
        style.setProperty('--msg-color', "green")
        acertos += 1;
        sessionStorage.setItem("acertos", acertos);
    } else {
        mensagem.innerHTML = "errado";
        style.setProperty('--msg-color', "red")
        erros += 1;
        sessionStorage.setItem("erros", erros);
    }
    placar.innerHTML = "Acertos: " + acertos + "<br>Erros: " + erros;
}

function showMensagem() {
    dialog.showModal();
}

function closeMensagem(event) {
    if (typeof event !== "undefined") {
         if (event.target.nodeName === "DIALOG") {
            // event.target.close();
            location.reload();
         }
    } else {
        location.reload();
    }
}

var imagesContainer;
var imagesContainer2;
var respostasContainer;
var dialog
document.addEventListener("DOMContentLoaded", function(e) {

    dialog = document.getElementsByClassName("dialog")[0];
    dialog.addEventListener("click", closeMensagem);

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
            img.draggable = false;
            button.appendChild(img);
        }
        respostasContainer.appendChild(button);
    }
})