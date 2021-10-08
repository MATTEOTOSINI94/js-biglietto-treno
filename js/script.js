const etaPasseggero = prompt("Inserire la propria età");
console.log(etaPasseggero)

const kmPasseggero =  prompt("Inserire il numero di km da percorrere")
console.log(kmPasseggero)

const kmPrice = 0.21
console.log(kmPrice)

const priceTot = parseFloat(kmPrice) * parseFloat(kmPasseggero)
console.log (parseFloat(kmPrice) * parseFloat(kmPasseggero))

const priceUnder = ((parseFloat(priceTot) * 20) / 100)

let priceTotUnder = (parseFloat(priceTot) - parseFloat(priceUnder))
let roundDbl = (Math.round(priceTotUnder*100.0)/100.0)

let priceTotOver = (parseFloat(priceTot) - parseFloat(over))
let roundDb2 = (Math.round(priceTotOver*100.0)/100.0)





if (etaPasseggero < 18){
    alert("Hai diritto a uno sconto del 20%")
    alert("complimenti questo è il suo prezzo scontato del 20% " + roundDbl)
   
}

else if (etaPasseggero >= 65){
    alert("hai diritto a uno sconto del 40%")
    alert("complimenti questo è il suo prezzo scontato del 40% " + roundDb2)   
}