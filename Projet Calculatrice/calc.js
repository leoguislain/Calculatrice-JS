let result = document.querySelector(".result")
let chiffre = document.querySelectorAll(".chiffre")
let operator = document.querySelectorAll(".operator")
let virgule = document.querySelector(".virgule")

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

operator.forEach(function (i) {
    i.addEventListener('click', function () {
        if (result.innerHTML === "") {
            return
        } else {
            document.querySelector('.result').innerHTML += i.innerHTML
        }
    })
})

virgule.addEventListener("click", function (){
    if (result.innerHTML === "") {
        result.innerHTML += "0."
    } else {
        result.innerHTML += "."
    }
})

function calcul(obj) {
    return Function('return ' + obj)();
}