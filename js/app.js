function productTotal() {
    const inputField = document.getElementById('phone-input').value;
    const finalVlue = parseFloat(inputField);

}
// input function
function getInput(isAdd, product, ammount) {
    const inputField = document.getElementById(product + '-input');
    const inputValue = parseFloat(inputField.value)
    // total cost
    const TotalAmmount = document.getElementById(product + '-total');
    if (isAdd == true) {
        const finalVlue = inputValue + 1;
        inputField.value = finalVlue;
        TotalAmmount.innerText = finalVlue * ammount;
    }
    else if (inputField.value > 0) {
        const finalVlue = inputValue - 1;
        inputField.value = finalVlue;
        TotalAmmount.innerText = finalVlue * ammount;
    }
    const subTotal = document.getElementById('sub-total');
    const tax = document.getElementById('tax');
    const total = document.getElementById('total');
    const subTotalAmmount = parseFloat(document.getElementById('phone-total').innerText) + parseFloat(document.getElementById('case-total').innerText);
    subTotal.innerText = subTotalAmmount;
    tax.innerText = subTotalAmmount / 10;
    total.innerText = subTotalAmmount + parseFloat(tax.innerText);
}
// case part
document.getElementById('case-plus').addEventListener('click', function () {
    getInput(true, 'case', 59);
})
document.getElementById('case-minus').addEventListener('click', function () {
    getInput(false, 'case', 59);
})
// phone part
document.getElementById('phone-plus').addEventListener('click', function () {
    getInput(true, 'phone', 1219);
})
document.getElementById('phone-minus').addEventListener('click', function () {
    getInput(false, 'phone', 1219);
})