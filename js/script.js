// global function
function getInputValueById(id, isTextElement = false) {
    const element = document.getElementById(id);

    const value = isTextElement ? parseFloat(element.innerText) : parseFloat(element.value);

    if (!isTextElement) {
        element.value = "";
    }

    return isNaN(value) ? 0 : value;
}

const historyButton = document.getElementById("display-history");
const donationButton = document.getElementById("display-donation");

document.getElementById("display-history").addEventListener("click", function () {
    document.getElementById("donation").classList.add("hidden");
    document.getElementById("history").classList.remove("hidden");

    historyButton.classList.add("bg-[#B4F461]", "font-semibold", "text-black", "font-lexend");
    donationButton.classList.remove("bg-[#B4F461]", "font-semibold", "text-black", "font-lexend");

});

document.getElementById("display-donation").addEventListener("click", function () {
    document.getElementById("history").classList.add("hidden");
    document.getElementById("donation").classList.remove("hidden");

    historyButton.classList.remove("bg-[#B4F461]", "font-semibold", "text-black", "font-lexend");
    donationButton.classList.add("bg-[#B4F461]", "font-semibold", "text-black", "font-lexend");
});


function handleDonation(dontionInputId, donationAmountId, donationNameId, totalDonationId, modalId) {
    const donationValue = getInputValueById(dontionInputId);

    if (donationValue <= 0) {
        alert("Please enter a valid donation amount.");
        return;
    }

    document.getElementById(modalId).showModal();

    const donationAmount = getInputValueById(donationAmountId, true);
    document.getElementById(donationAmountId).innerText = donationAmount + donationValue;

    const totalDonation = getInputValueById(totalDonationId, true);
    document.getElementById(totalDonationId).innerText = totalDonation >= donationValue
        ? totalDonation - donationValue
        : 0;

    const currentDate = new Date();
    const localDate = currentDate.toLocaleDateString();
    const localTime = currentDate.toLocaleTimeString();

    const history = document.getElementById("history");
    const donationName = document.getElementById(donationNameId);
    const div = document.createElement("div");
    div.innerHTML = `
    <div class="p-8 border rounded-2xl my-4">
        <h1 class="text-xl font-bold text-black font-lexend">${donationValue} Taka is Donated for ${donationName.innerText}</h1>
        <p>Date: ${localDate} Time: ${localTime}</p >
    </div >
    `;
    history.insertBefore(div, history.firstChild);
}

document.getElementById("noakhali-donate").addEventListener("click", function () {
    handleDonation("noakhali-donation", "noakhali-donation-amount", "noakhali-name", "total-donation", "my_modal_5");
})

document.getElementById("feni-donate").addEventListener("click", function () {
    handleDonation("feni-donation", "feni-donation-amount", "feni-name", "total-donation", "my_modal_5");
})


document.getElementById("quota-donate").addEventListener("click", function () {
    handleDonation("quota-donation", "quota-donation-amount", "quota-name", "total-donation", "my_modal_5");
})