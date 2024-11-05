function random(n) {
    return Math.floor(Math.random() * n);
}

function random_choice(array) {
    return array[random(array.length)];
}

const db = {
    "animal": {"cachorro":5, "galinha":5, "gato":5, "leão":5, "pássaro":5},
    "comida": {"banana":6, "carne":5, "maçã":8},
    "eletrodoméstico": {"fogão":5, "geladeira":7, "liquidificador":5, "microondas":5},
    "veículo": {"avião": 3}
}
categorias = Object.keys(db)

function random_category(exclude) {
    if (typeof exclude !== "undefined") {
        c = [...categorias];
        c.splice(c.indexOf(exclude), 1);
    } else {
        c = categorias;
    }
    return random_choice(c);
}

function random_category3(exclude) {
    if (typeof exclude !== "undefined") {
        c = [...categorias];
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

function random_item(categoria, exclude) {
    i = Object.keys(db[categoria]);
    if (typeof exclude !== "undefined") {
        i.splice(i.indexOf(exclude), 1);
    }
    return random_choice(i);
}