var credits_dialog
document.addEventListener("DOMContentLoaded", function(e) {
    credits_dialog = document.getElementsByClassName("credits_dialog")[0];
    console.log(credits_dialog)
    credits_dialog.addEventListener("click", onClick);
})

function show_credits() {
    credits_dialog.showModal()
}

function close_credits() {
    credits_dialog.close()
}

function onClick(event) {
  if (event.target === credits_dialog) {
    credits_dialog.close();
  }
}