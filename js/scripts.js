//Business Logic




//User Interface Logic 
function hideResults() {
  document.getElementsByClassName("first").setAttribute("class", "hidden");
  document.getElementByClassName("last").setAttribute("class", "hidden");
  document.getElementByClassName("color").setAttribute("class", "hidden");
  document.getElementByClassName("food").setAttribute("class", "hidden");
  document.getElementByClassName("anime").setAttribute("class", "hidden");
}

window.addEventListener("load",function() {
  hideResults();
  const favoriteColor = document.getElementByClassName("color").value;
  const selection1 = document.getElementByClassName("food").value;
  const selection2 = document.getElementByClassName("anime").value;
  const firstName = document.getElementClassName("first").value;
  const lastName = document.getElementByClassName("last").value;


  let form = document.querySelector("form");
  form.addEventListener("submit",function(event) {
    event.preventDefault();
    
  });
});