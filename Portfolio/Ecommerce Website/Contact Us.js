const inputs = document.querySelectorAll(".input");

function focusFunc() {
  let text = this.parentNode;
  text.classList.add("focus");
}

function blurFunc() {
  let text = this.parentNode;
  if (this.value == "") {
    text.classList.remove("focus");
  }
}

inputs.forEach((input) => {
  input.addEventListener("focus", focusFunc);
  input.addEventListener("blur", blurFunc);
});