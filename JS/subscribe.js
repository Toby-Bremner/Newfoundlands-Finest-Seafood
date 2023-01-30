let modal = document.getElementById("modal");
let btn = document.querySelector(".btn");
let modelBtnClose = document.querySelector(".btn-close-modal");

btn.addEventListener("click", openAndCloseModal);
modelBtnClose.addEventListener("click", openAndCloseModal);

function openAndCloseModal() {
  if (modal.classList.contains("open-modal")) {
    modal.classList.remove("open-modal");
  } else {
    modal.classList.add("open-modal");
  }
}
