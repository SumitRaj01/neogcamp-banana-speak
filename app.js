var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#output");
// outputDiv.innerText = "Raj";
// console.log(outputDiv);
// console.log(txtInput);
function clickHandler() {
  outputDiv.innerText = "ajajajjajaj " + txtInput.value;
  // console.log("clicked");
  // console.log("input", txtInput.value);
}
btnTranslate.addEventListener("click", clickHandler);
