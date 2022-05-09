const selected = document.querySelector(".selected");
const optionsContainer = document.querySelector(".options-container");

const optionsList = document.querySelectorAll(".option");
const imgSeta = document.querySelector('.imgSeta')

selected.addEventListener("click", () => {
  optionsContainer.classList.toggle("ativo");
  imgSeta.classList.toggle("seta");
});

optionsList.forEach(o => {
  o.addEventListener("click", () => {
    selected.innerHTML = o.querySelector("label").innerHTML;
    optionsContainer.classList.remove("ativo");
    imgSeta.classList.remove("seta");

  });
});
