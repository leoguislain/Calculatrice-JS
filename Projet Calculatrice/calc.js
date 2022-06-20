let chiffre = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "."]
let operator = ["+", "-", "*", "/"]
let result = document.querySelector(".result")

document.querySelector(".boutonegal").addEventListener("click", function(){
    result.innerHTML = calcul(document.querySelector(".result").textContent);
})

document.querySelector(".boutondeletelast").addEventListener("click", deletelast)

function deletelast() {
    result.innerHTML = result.innerHTML.slice(0, -1)
}

document.querySelector(".boutonreset").addEventListener("click", reset)

function reset() {
    result.innerHTML = ""
}

document.querySelector(".virgule").addEventListener("click", virgule)

function virgule() {
    result.innerHTML += chiffre[10]
}


document.querySelector(".bouton0").addEventListener("click", show0)

function show0() {
    result.innerHTML += chiffre[0]
}

document.querySelector(".bouton1").addEventListener("click", show1)

function show1() {
    result.innerHTML += chiffre[1]
}

document.querySelector(".bouton2").addEventListener("click", show2)

function show2() {
    result.innerHTML += chiffre[2]
}

document.querySelector(".bouton3").addEventListener("click", show3)

function show3() {
    result.innerHTML += chiffre[3]
}

document.querySelector(".bouton4").addEventListener("click", show4)

function show4() {
    result.innerHTML += chiffre[4]
}

document.querySelector(".bouton5").addEventListener("click", show5)

function show5() {
    result.innerHTML += chiffre[5]
}

document.querySelector(".bouton6").addEventListener("click", show6)

function show6() {
    result.innerHTML += chiffre[6]
}

document.querySelector(".bouton7").addEventListener("click", show7)

function show7() {
    result.innerHTML += chiffre[7]
}

document.querySelector(".bouton8").addEventListener("click", show8)

function show8() {
    result.innerHTML += chiffre[8]
}

document.querySelector(".bouton9").addEventListener("click", show9)

function show9() {
    result.innerHTML += chiffre[9]
}

document.querySelector(".boutonplus").addEventListener("click", plus)

function plus() {
    result.innerHTML += operator[0]
}

document.querySelector(".boutonmoins").addEventListener("click", moins)

function moins() {
    result.innerHTML += operator[1]
}

document.querySelector(".boutonfois").addEventListener("click", fois)

function fois() {
    result.innerHTML += operator[2]
}
document.querySelector(".boutondivise").addEventListener("click", divise)

function divise() {
    result.innerHTML += operator[3]
}

function calcul(obj){
    return Function('return ' + obj)();
}

