//Business Logic




//User Interface Logic 
// function hideResults() {
//   document.querySelector("span#person1a").innerText = person1Input;
//     document.querySelector("span#person1b").innerText = person1Input;
//     document.querySelector("span#person1c").innerText = person1Input;
// };

function handleSelect(event) {
  const foodChoice = document.getElementById("foodSelect").value;
  const animeChoice = document.getElementById("animeSelect").value;
}

window.addEventListener("load",function() {
  // hideResults();
  const firstName = document.getElementById("inputGroup-sizing-default1").value;
  const lastName = document.getElementById("inputGroup-sizing-default2").value;
  const favoriteColor = document.getElementById("exampleColorInput").value;
  const foodChoice = document.getElementById("foodSelect").value;
  const animeChoice = document.getElementById("animeSelect").value;


  let form = document.querySelector("form");
  form.addEventListener("submit",function(event) {
    event.preventDefault();

    document.getElementById("foodSelect").addEventListener("submit", handleSelect);
    document.getElementById("animeSelect").addEventListener("submit", handleSelect);

    document.getElementById("results").removeAttribute("class");
    document.getElementById("swift").removeAttribute("class");
    document.getElementById("go").removeAttribute("class");
    document.getElementById("python").removeAttribute("class");
    document.getElementById("ruby").removeAttribute("class");


    // if (programmingLanguage) {
    //   if (tacos) {

    //   } else if (lasagna) {

    //   } else if (sushi) {

    //   } else (pancakes)

    // }
    
  });
});