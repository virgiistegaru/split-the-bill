function calculateSplit(event) {
    event.preventDefault();

const billAmount = Number(document.getElementById("billAmount").value);
const tipPercentage = Number(document.getElementById("tipPercentage").value);
const numPeople = Number(document.getElementById("numPeople").value);

if (billAmount <= 0 || numPeople <= 0 || tipPercentage < 0) {
    alert("Please enter valid values for bill amount, tip percentage, and number of people.")
    return;
}

const tipAmount = (billAmount * tipPercentage) / 100;
const totalAmount = billAmount + tipAmount;
const amountPerPerson = totalAmount / numPeople;

document.getElementById("tipAmount").textContent = "Tip Amount: " + tipAmount.toFixed(2);
document.getElementById("totalAmount").textContent = "Total Amount: " + totalAmount.toFixed(2);
document.getElementById("amountPerPerson").textContent = "Amount Per Person: " + amountPerPerson.toFixed(2);

}

document.getElementById("billForm").addEventListener("submit", calculateSplit);