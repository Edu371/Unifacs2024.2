function random(n) {
    return Math.floor(Math.random() * n);
}

function random_exclude(n, exclude) {
    r = random(n);
    if (r == exclude) {
        if (r+1 < n) {
            return r+1;
        } else {
            return 0;
        }
    }
    return r;
}

function random_choice(array) {
    return array[random(array.length)];
}

function random_array3(a, exclude) {
    c = [...a];
    if (typeof exclude !== "undefined") {
        c.splice(c.indexOf(exclude), 1);
    }
    array = [];
    for (var i=0; i < 3; i++) {
        x = random_choice(c);
        array.push(x);
        c.splice(c.indexOf(x), 1);
    }
    return array;
}

const db = {
    "animal": {"cachorro":14, "cavalo":10, "elefante":9, "galinha":9, "gato":20, "leão":6, "pássaro":10, "sapo":9, "urso":6},
    "comida": {"banana":6, "batata":10, "biscoito":17, "bolo":10, "carne":13, "cebola":15, "feijão":9, "laranja":12, "maçã":10, "macarrão":11, "manga":6, "melancia":9, "ovo":8, "tomate":8, "uva":11},
    "eletrodoméstico": {"ar-condicionado":5, "aspirador":7, "fogão":8, "geladeira":10, "lavadora":14,"liquidificador":9, "microondas":10, "televisão":9, "torradeira":8, "ventilador":7},
    "instrumento": {"bateria":7, "piano":8, "sanfona":8, "trompete":8, "violão":6},
    "móvel": {"cama":7, "estante":6, "guarda-roupas":7, "mesa":10, "sofá":10},
    "veículo": {"avião": 13, "barco": 5, "caminhão":5, "carro":13, "helicóptero":12, "moto":6}
}
categorias = Object.keys(db)
items = []
for (i of Object.values(db)) {
    for (a in i) {
        items.push(a);
    }
}

function random_category(exclude) {
    if (typeof exclude !== "undefined") {
        c = [...categorias];
        c.splice(c.indexOf(exclude), 1);
    } else {
        c = categorias;
    }
    return random_choice(c);
}

function random_item(categoria, exclude) {
    i = Object.keys(db[categoria]);
    if (typeof exclude !== "undefined") {
        if (i.includes(exclude)) {
            i.splice(i.indexOf(exclude), 1);
        }
    }
    return random_choice(i);
}

function get_item_category(item) {
    for (c of categorias) {
        if (db[c][item] !== undefined) {
            return c
        }
    }
}
