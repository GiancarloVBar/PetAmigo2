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

const selected2 = document.querySelector(".selected2");
const optionsContainer2 = document.querySelector(".options-container2");

const optionsList2 = document.querySelectorAll(".option2");
const imgSeta2 = document.querySelector('.imgSeta2')

selected2.addEventListener("click", () => {
  optionsContainer2.classList.toggle("ativo");
  imgSeta2.classList.toggle("seta");
});

optionsList2.forEach(o => {
  o.addEventListener("click", () => {
    selected2.innerHTML = o.querySelector("label").innerHTML;
    optionsContainer2.classList.remove("ativo");
    imgSeta2.classList.remove("seta");

  });
});

const selected3 = document.querySelector(".selected3");
const optionsContainer3 = document.querySelector(".options-container3");

const optionsList3 = document.querySelectorAll(".option3");
const imgSeta3 = document.querySelector('.imgSeta3')

selected3.addEventListener("click", () => {
  optionsContainer3.classList.toggle("ativo");
  imgSeta3.classList.toggle("seta");
});

optionsList3.forEach(o => {
  o.addEventListener("click", () => {
    selected3.innerHTML = o.querySelector("label").innerHTML;
    optionsContainer3.classList.remove("ativo");
    imgSeta3.classList.remove("seta");

  });
});
