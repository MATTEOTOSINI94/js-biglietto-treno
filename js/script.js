const etaPasseggero = parseInt(prompt("Inserire la propria età"))

const kmPasseggero =  parseInt(prompt("Inserire il numero di Km da percorrere"))

const kmPrice = 0.21

const priceTot = kmPrice * kmPasseggero
console.log("prezzo totale senza sconto: "+ priceTot.toFixed(2))

const priceUnder = priceTot * 0.2
console.log("prezzo scontato del 20% "+ priceUnder)
let priceOver = priceTot * 0.4
console.log("prezzo scontato del 40% " + priceUnder)




if (isNaN(etaPasseggero && kmPasseggero)){
    alert("Non hai inserito numeri riprova correttamente")
}

else if (etaPasseggero < 18){
    alert("Hai diritto a uno sconto del 20%")
    let priceTotUnder = priceTot - priceUnder
    alert("complimenti questo è il suo prezzo scontato del 20% " + priceTotUnder.toFixed(2)+"£")
}

else if (etaPasseggero >= 65){
    alert("hai diritto a uno sconto del 40%")
    let priceTotOver = priceTot - priceOver 
    alert("complimenti questo è il suo prezzo scontato del 40% " + priceTotOver.toFixed(2)+"£")   
}

else  {
    alert("Complimenti prenotazione effettuata prezzo: " + priceTot.toFixed(2)+"£")
}

