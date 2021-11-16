let pEntier = document.getElementById('entier')
let pFlottant = document.getElementById('flottant')
let pNonNumerique = document.getElementById('non-numerique')
let pRandom = document.getElementById('random')
let pTrunc = document.getElementById('trunc')
let pReplace = document.getElementById('replace')
let operande = 10

pEntier.innerText = parseInt(pEntier.innerText)*operande

pFlottant.innerText = (parseFloat(pFlottant.innerText)*operande)+parseInt(pEntier.innerText)

if (isNaN(pNonNumerique.innerText)){
    pNonNumerique.innerText = 0;
}

pRandom.innerText = parseInt(Math.random()*100)

pTrunc.innerText = Math.trunc(pTrunc.innerText)

pReplace.innerText = "John Wick .....  bon O.K .. Alexis Laroche"
console.log(random());