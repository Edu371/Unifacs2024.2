var options_dialog
var credits_dialog
document.addEventListener("DOMContentLoaded", function(e) {
    options_dialog = document.getElementsByClassName("options_dialog")[0];
    options_dialog.addEventListener("click", closeDialog);
    credits_dialog = document.getElementsByClassName("credits_dialog")[0];
    credits_dialog.addEventListener("click", closeDialog);
})

function show_options() {
    options_dialog.showModal();
}

function close_options() {
    options_dialog.close();
}

function change_font(d) {
    current_font += d;
    if ((d == 1) && (current_font > fonts.length-1)) {current_font = 0}
    if ((d == -1) && (current_font < 0)) {current_font = fonts.length-1}
    style.setProperty('--font', fonts[current_font][0])
    style.setProperty('--font-weight', fonts[current_font][1])
    document.getElementById("font_name").innerHTML = fonts[current_font][0];
    sessionStorage.setItem("current_font", current_font);
}

function show_credits() {
    credits_dialog.showModal();
}

function close_credits() {
    credits_dialog.close();
}

function closeDialog(event) {
    if (event.target.nodeName === "DIALOG") {
        event.target.close();
    }
}