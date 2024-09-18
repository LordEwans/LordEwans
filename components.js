// main.js
fetch("./components/alphabets.json")
  .then((response) => response.json())
  .then((alphabets) => {
    const alpha = document.getElementById("alphabets");
    const val = document.createElement("div")
    val.innerHTML = alphabets.alphabets0 + alphabets.alphabets1;
    alpha.append(val);
  })
  .catch((error) => console.error("Error loading JSON:", error));
