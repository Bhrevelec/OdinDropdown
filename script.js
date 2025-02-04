const dropdownHamburgers = document.querySelectorAll("img.hamburger");

console.log(dropdownHamburgers);
console.log(dropdownHamburgers[0].parentNode.nextElementSibling);

dropdownHamburgers[0].addEventListener("click", (event) => {
  event.target.parentNode.nextElementSibling.classList.toggle("hidden");
});
/*
dropdownHamburgers.forEach((hamburger) =>
  hamburger.addEventListener(
    "click",
    hamburger.parentNode.nextElementSibling.classList.toggle("hidden")
  )
);
*/
