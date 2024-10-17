var credits_dialog
document.addEventListener("DOMContentLoaded", function(e) {
    credits_dialog = document.getElementsByClassName("credits_dialog")[0];
    console.log(credits_dialog)
})

function show_credits() {
    credits_dialog.show()
}

function close_credits() {
    credits_dialog.close()
}