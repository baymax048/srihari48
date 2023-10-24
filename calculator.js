document.getElementById("calculateBtn").addEventListener("click", function () {
    const units = parseFloat(document.getElementById("units").value);
    const ratePerUnit = 7.5; // Adjust this with your electricity rate per unit in INR
    const billAmount = units * ratePerUnit;
    document.getElementById("billAmount").textContent = billAmount.toFixed(2) + " INR";
});
