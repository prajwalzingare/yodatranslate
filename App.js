const apiurl = "https://api.funtranslations.com/translate/yoda.json";

var txtinput = document.querySelector("#txtinput");
var txtoutput = document.querySelector("#txtoutput");
var btnTranslate = document.querySelector("#btntranslate");

btnTranslate.addEventListener("click", clickHandler);

function getFinalApi(text) {
  return apiurl + "?" + "text=" + text;
}

function errorHandler(err) {
  console.log("Theres an Error" + err);
  alert("Something Wrong with the Server ! Please Try Again");
}

function clickHandler() {
  var inputValue = txtinput.value;
  //   console.log(inputValue);

  fetch(getFinalApi(inputValue))
    .then((response) => response.json())
    .then((json) => {
      var yodasText = json.contents.translated;
      console.log(yodasText);
      txtoutput.innerText = yodasText;
    })
    .catch(errorHandler);
}
