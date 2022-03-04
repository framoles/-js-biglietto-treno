const km = prompt("Quanti km devi percorrere");
const age = prompt("Quanti anni hai?");

const costkm = km * 0.21;

let discount;

if (age < 18) {
    discount = costkm - (costkm * 0.2);
}
else if (age > 65) {
    discount = costkm - (costkm * 0.4);
}
else {
    discount = costkm;
}

document.getElementById("price").innerHTML = discount.toFixed(2);