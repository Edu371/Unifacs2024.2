const { style } = document.documentElement;

const fonts = [["Pixel", "normal"], ["Comic Sans MS", "bold"]];
var current_font = 0;
if (sessionStorage.getItem("current_font") == null) {
    sessionStorage.setItem("current_font", current_font);
} else {
    current_font = Number(sessionStorage.getItem("current_font"));
}

style.setProperty('--font', fonts[current_font][0])
style.setProperty('--font-weight', fonts[current_font][1])

function closeDialog(event) {
    if (event.target.nodeName === "DIALOG") {
        event.target.close();
    }
}