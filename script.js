document.getElementById('goldPriceForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get the input values
    const carat = parseInt(document.getElementById('carat').value);
    const totalAmount = parseFloat(document.getElementById('totalAmount').value);
    const makingChargesPercentage = parseFloat(document.getElementById('makingCharges').value) / 100;
    const gstRate = parseFloat(document.getElementById('gstRate').value) / 100;

    const amountWithoutGST = totalAmount / (1 + gstRate);

    const amountWithoutGSTAndWithoutMaking = amountWithoutGST / (1 + makingChargesPercentage);

    document.getElementById('goldPrice').textContent = `₹${amountWithoutGSTAndWithoutMaking.toFixed(2)}`;
});
