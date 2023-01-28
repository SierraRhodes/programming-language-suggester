//Business Logic



//User Interface Logic
function hideResults() {
document.getElementById("swift").setAttribute("class", "hide");
document.getElementById("python").setAttribute("class", "hide");
document.getElementById("go").setAttribute("class", "hide");
document.getElementById("ruby").setAttribute("class", "hide");
}

function handleSelect(event) {
  let firstName = document.getElementById("inputGroup-sizing-default1").value;
  let lastName = document.getElementById("inputGroup-sizing-default2").value;
  let favoriteColor = document.getElementById("exampleColorInput").value;
  let foodChoice = document.getElementById("foodSelect").value;
  let animeChoice = document.getElementById("animeSelect").value;
}

window.addEventListener("load",function() {
  hideResults();

  let form = document.querySelector("form");
  form.addEventListener("submit",function(event) {
    event.preventDefault();

    document.getElementById("foodSelect").addEventListener("submit", handleSelect);
    document.getElementById("animeSelect").addEventListener("submit", handleSelect);


    let foodChoice = document.getElementById("foodSelect").value;
    console.log("Correctly giving back right values?=", document.getElementById("foodSelect").value);

    console.log("Is form resetting=", document.getElementById("program").reset())
    document.getElementById("program").reset();


    if (foodChoice === "Pancakes") { 
      document.getElementById("swift").removeAttribute("class");
    } else if (foodChoice === "Lasagna") { 
      document.getElementById("go").removeAttribute("class");
    } else if (foodChoice === "Sushi") {
      document.getElementById("python").removeAttribute("class");
    } else {
      document.getElementById("ruby").removeAttribute("class");
    }
  });
});
