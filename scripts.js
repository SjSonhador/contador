const input = document.querySelector("#input");
const counter = document.querySelector(".counter");
const toggleButton = document.querySelector("#toggle");
const buttonReset = document.querySelector("#reset")

let mode = "characters"

toggleButton.addEventListener("click", () => {

    if (mode === "characters") {
        mode = "words";
        toggleButton.textContent = "Contar caracteres";
    } else {
        mode = "characters"
        toggleButton.textContent = "Contar palavras";
    }


    input.dispatchEvent(new Event("input"));
});

input.addEventListener("input", () => {
    let count = 0;

    if (mode === "characters") {
        count = input.value.length;

        counter.textContent = `${count} caractere(s) com espaço`;
    } else {
        const words = input.value.trim().split(/\s+/);
        count = input.value.trim() === "" ? 0 : words.length;
        counter.textContent = `${count} palavras(s)`;
    }
});

buttonReset.addEventListener("click", () => {
    input.value = ''
    counter.textContent = '0 caractere(s) com espaço'

});
