var i = 0;
var poäng = 0;
var färger = ["svart","grön","röd","rosa","gul","blå","orange","brun","grå","lila",]

function bytBild(){

  i = i + 1;
  var bilder = ["img/1.jpg","img/2.jpg","img/3.jpg","img/4.jpg","img/5.jpg","img/6.jpg","img/7.jpg","img/8.jpg","img/9.jpg","img/10.jpg",];
  document.getElementById("bild").src = bilder[i];
}

function rattaSvar() {
  var x = document.forms["myForm"]["svar"].value;
  if (x == färger[i-1]) {
    poäng = poäng + 1;
    document.getElementById("poäng").innerHTML = "Poäng: " + poäng + "/10";
    if (i >= 10) {document.getElementById("bild").src = "img/11.jpg";}
    return false;
  }
  else if (x != färger[i-1] && i < 10) {
}
  else if (i >= 10) {document.getElementById("bild").src = "img/11.jpg";}

  if (poäng < 10 && i >=10) {document.getElementById("slut").innerHTML = "Du är färgblind! :("}
    else if (poäng = 10 && i >=10) {document.getElementById("slut").innerHTML = "Woho! Du är inte färgblind"}
  return false;
}
