//Business Logic




// User Interface Logic 
function hideResults() {
  let firstName = document.getElementById("inputGroup-sizing-default1").value;
  let lastName = document.getElementById("inputGroup-sizing-default2").value;
  let favoriteColor = document.getElementById("exampleColorInput").value;
  let foodChoice = document.getElementById("foodSelect").value;
  let animeChoice = document.getElementById("animeSelect").value;
};

function handleSelect(event) {
  let foodChoice = document.getElementById("foodSelect").value;
  let animeChoice = document.getElementById("animeSelect").value;
}

window.addEventListener("load",function() {
  hideResults();
  let firstName = document.getElementById("inputGroup-sizing-default1").value;
  let lastName = document.getElementById("inputGroup-sizing-default2").value;
  let favoriteColor = document.getElementById("exampleColorInput").value;
  let foodChoice = document.getElementById("foodSelect").value;
  let animeChoice = document.getElementById("animeSelect").value;


  let form = document.querySelector("form");
  form.addEventListener("submit",function(event) {
    event.preventDefault();

    document.getElementById("foodSelect").addEventListener("submit", handleSelect);
    document.getElementById("animeSelect").addEventListener("submit", handleSelect);

    document.getElementById("results").removeAttribute("class");

    if (results) {
      if (foodChoice === "Pancakes") {
        document.getElementById("swift").removeAttribute("class");
      } else if (foodChoice === "Lasagna") {
        document.getElementById("go").removeAttribute("class");
      } else if (foodChoice === "Sushi") {
        document.getElementById("python").removeAttribute("class");
      } else if (foodChoice === "Tacos")
        document.getElementById("ruby").removeAttribute("class");
       }
  });
});