import calcular from "./calcular";

const form = document.querySelector("#base-form");
const title = document.querySelector("#title");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  title.textContent = "Calcular Base";
});
