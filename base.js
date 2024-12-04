const { style } = document.documentElement;

const fonts = [["Pixel", "normal"], ["Comic Sans MS", "bold"], ["Arial", "bold"],
               ["Verdana", "bold"], ["Courier New", "bold"]];
var current_font = 1;
if (sessionStorage.getItem("current_font") == null) {
    sessionStorage.setItem("current_font", current_font);
} else {
    current_font = Number(sessionStorage.getItem("current_font"));
}
var acertos = 0;
var erros = 0;
if (sessionStorage.getItem("acertos") == null) {
    sessionStorage.setItem("acertos", acertos);
    sessionStorage.setItem("erros", erros);
} else {
    acertos = Number(sessionStorage.getItem("acertos"));
    erros = Number(sessionStorage.getItem("erros"));
}
var som = 1;
if (sessionStorage.getItem("som") == null) {
    sessionStorage.setItem("som", som);
} else {
    som = Number(sessionStorage.getItem("som"));
}

style.setProperty('--font', fonts[current_font][0])
style.setProperty('--font-weight', fonts[current_font][1])

function closeDialog(event) {
    if (event.target.nodeName === "DIALOG") {
        event.target.close();
    }
}

function getSomText() {
    if (som == 1) {
        return "✔"
    }
    else {
        return " "
    }
}