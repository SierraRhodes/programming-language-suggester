//Business Logic




//User Interface Logic 
function hideResults() {
  document.getElementsByClassName("first").setAttribute("class", "hidden");
  document.getElementByClassName("last").setAttribute("class", "hidden");
  document.getElementByClassName("color").setAttribute("class", "hidden");
  document.getElementByClassName("food").setAttribute("class", "hidden");
  document.getElementByClassName("anime").setAttribute("class", "hidden");
}

function handleSelect(event) {
  event.preventDefault();
  const foodChoice = document.getElementByClassName("food").value;
}

window.addEventListener("load",function() {
  hideResults();
  const firstName = document.getElementClassName("first").value;
  const lastName = document.getElementByClassName("last").value;
  const favoriteColor = document.getElementByClassName("color").value;
  const foodChoice = document.getElementByClassName("food").value;
  const animeChoice = document.getElementByClassName("anime").value;


  let form = document.querySelector("form");
  form.addEventListener("submit",function(event) {
    event.preventDefault();

    document.getElementByClassName("food").addEventListener("submit", handleSelect);
    
  });
});