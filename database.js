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
    "animal": {"cachorro":5, "galinha":5, "gato":5, "leão":5, "pássaro":5},
    "comida": {"banana":6, "carne":5, "maçã":8, "manga":5, "ovo":5},
    "eletrodoméstico": {"fogão":5, "geladeira":7, "lavadora":5,"liquidificador":5, "microondas":5},
    "veículo": {"avião": 4, "barco": 5, "caminhão":5,"carro":7, "moto":6}
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
