var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#output");

// var serverURL = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json";
var serverURL = "https://api.funtranslations.com/translate/minion.json";
// outputDiv.innerText = "Raj";
// console.log(outputDiv);
// console.log(txtInput);

function getTranslationURL(text) {
  return serverURL + "?" + "text=" + text;
}

function errorHandler(error) {
  console.log("error occured", error);
  alert("Something wrong with server!  try again after some time");
}

function clickHandler() {
  // outputDiv.innerText = "ajajajjajaj " + txtInput.value;
  var inputText = txtInput.value; //taking input

  //calling server for processing
  fetch(getTranslationURL(inputText))
    .then((response) => response.json())
    .then((json) => {
      var translatedText = json.contents.translated;
      outputDiv.innerText = translatedText;
    })
    .catch(errorHandler);
  // console.log("clicked");
  // console.log("input", txtInput.value);
}
btnTranslate.addEventListener("click", clickHandler);
