const selectField = document.querySelector("#selectField");
const selectText = document.querySelector("#selectText");
const options = document.getElementsByClassName("options");
const list = document.querySelector("#list");
const arrowIcon = document.querySelector("#arrowIcon");

for (option of options) {
  option.onclick = function () {
    selectText.innerHTML = this.textContent;
    list.classList.toggle("hide");
    arrowIcon.classList.toggle("rotate");
  };
}

selectField.onclick = function () {
  list.classList.toggle("hide");
  arrowIcon.classList.toggle("rotate");
};
