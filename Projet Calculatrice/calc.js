let result = document.querySelector(".result")
let chiffre = document.querySelectorAll(".chiffre")

document.querySelector(".boutonegal").addEventListener("click", function () {
    result.innerHTML = calcul(document.querySelector(".result").textContent);
})

document.querySelector(".boutondeletelast").addEventListener("click", function deletelast() {
    result.innerHTML = result.innerHTML.slice(0, -1)
})

document.querySelector(".boutonreset").addEventListener("click", function reset() {
    result.innerHTML = ""
})

chiffre.forEach(function (i) {
    i.addEventListener('click', function () {
        document.querySelector('.result').innerHTML += i.innerHTML
    })
})

function calcul(obj) {
    return Function('return ' + obj)();
}