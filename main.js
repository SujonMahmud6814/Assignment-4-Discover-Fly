function handleTicketBooking(product, isIncrease) {
    const productInput = document.getElementById(product + "-count");
    const productCount = parseInt(productInput.value);
    let productNewCount = productCount;

    if (isIncrease == true) {
        productNewCount = productCount + 1;
    }

    if (isIncrease == false && productCount > 0) {
        productNewCount = productCount - 1;
    }

    productInput.value = productNewCount;
    calculateTotal();
}

function calculateTotal() {
    const firstClassCount = getInputValue("firstClass");
    const economyCount = getInputValue("economy");

    const subTotalPrice = firstClassCount * 150 + economyCount * 100;
    document.getElementById("subTotal").innerText = "$" + subTotalPrice;

    const vat = Math.round(subTotalPrice * 0.1);
    document.getElementById("vat-charge").innerText = "$" + vat;

    const TotalPrice = subTotalPrice + vat;
    document.getElementById("totalPrice").innerText = "$" + TotalPrice;
}

function getInputValue(product) {
    const productInput = document.getElementById(product + "-count");
    const productCount = parseInt(productInput.value);
    return productCount;
}

function resetFields() {
    document.getElementById("firstClass-count").value = 0;
    document.getElementById("economy-count").value = 0;
    document.getElementById("subTotal").innerText = "$0";
    document.getElementById("vat-charge").innerText = "$0";
    document.getElementById("totalPrice").innerText = "$0";
}

document
    .getElementById("booking-button")
    .addEventListener("click", function () {
        alert("Thank you for Booking.");
        resetFields();
    });
