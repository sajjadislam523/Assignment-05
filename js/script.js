
// global function
function getInputValueById(id) {
    const inputField = document.getElementById(id);
    const inputFieldValue = parseFloat(inputField.value);
    inputField.value = "";
    return inputFieldValue;
}


document.getElementById("noakhali-donate").addEventListener("click", function () {

    const noakhaliValue = getInputValueById("noakhali-donation");

    document.getElementById("my_modal_5").showModal();
    const noakhaliDonation = document.getElementById("noakhali-donation-amount");
    const noakhaliDonationValue = parseFloat(noakhaliDonation.innerText);
    noakhaliDonation.innerText = noakhaliDonationValue + noakhaliValue;

    const totalDonation = document.getElementById("total-donation");
    const totalDonationValue = parseFloat(totalDonation.innerText);
    totalDonation.innerText = totalDonationValue - noakhaliValue;

})