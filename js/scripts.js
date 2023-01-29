//Business Logic



//User Interface Logic
function hideResults() {
document.getElementById("swift").setAttribute("class", "hide");
document.getElementById("python").setAttribute("class", "hide");
document.getElementById("go").setAttribute("class", "hide");
document.getElementById("ruby").setAttribute("class", "hide");
document.getElementById("results").setAttribute("class","hidden");
}

function handleSelect(event) {
  let foodChoice = document.getElementById("foodSelect").value;
}

window.addEventListener("load",function() {
  hideResults();

  let form = document.querySelector("form");
  form.addEventListener("submit",function(event) {
    event.preventDefault();
    hideResults();

    let foodChoice = document.getElementById("foodSelect").value;
    document.getElementById("foodSelect").addEventListener("submit", handleSelect);

    document.getElementById("program").reset();


    if (foodChoice === "Pancakes") { 
      document.getElementById("results").removeAttribute("class");
      document.getElementById("swift").removeAttribute("class");
    } else if (foodChoice === "Lasagna") { 
      document.getElementById("results").removeAttribute("class");
      document.getElementById("go").removeAttribute("class");
    } else if (foodChoice === "Sushi") {
      document.getElementById("results").removeAttribute("class");
      document.getElementById("python").removeAttribute("class");
    } else {
      document.getElementById("results").removeAttribute("class");
      document.getElementById("ruby").removeAttribute("class");
    }
  });
});
