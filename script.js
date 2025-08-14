let bill = document.getElementById("billAmount");
let percent = document.getElementById("percentageTip");
let error = document.getElementById("errorMessage");
let errorMessage = "Please Enter a Valid input";
let billValueInput = bill.value;
let percentValueInput = percent.value;

function cal() {
    let billValueInput = bill.value;
    let percentValueInput = percent.value;
    if (billValueInput === "") {
        error.textContent = errorMessage;
    } else if (percentValueInput === "") {
        error.textContent = errorMessage;
    } else {
        error.textContent = "";
        let billAmount = parseInt(billValueInput);
        let percentValue = parseInt(percentValueInput);
        let caculatedTip = (percentValue / 100) * (billAmount);
        document.getElementById("tipAmount").value = caculatedTip;
        let caculatedAmount = billAmount + caculatedTip;
        document.getElementById("totalAmount").value = caculatedAmount;

    }
}
