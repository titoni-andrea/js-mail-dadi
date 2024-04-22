let numberUser = Math.floor(Math.random() * 6 + 1)
let numberComputer = Math.floor(Math.random() * 6 + 1)

console.log(numberComputer)
console.log(numberUser)

if (numberComputer < numberUser) {
    alert("HAI VINTO!")
}
else if (numberComputer == numberUser) {
    alert("Hai pareggiato")
}
else {
    alert("Ha vinto il computer")
}