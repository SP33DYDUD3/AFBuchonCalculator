const priceM = 2.44; //natural Price
const priceL = 3.12; //blue Price
const priceJ = 3.64; //painted Price
const priceN = 2.10; //nuve Price
const priceR = 2.21; //margarita/pompom Price
const priceS = 2.60; //sunflower Price
const priceA = 1.43; //astromelia Price
const priceQ = 1; //small Butterfly Price
const priceW = 2; //medium BUTTERFLY Price
const priceV = 3; //large BUTTERFLY Price
const priceP = 5; //small Crown Price
const priceG = 8;  //medium Crown Price
const priceD = 10;  //large Crown Price
const priceI = 5; //ribbon Price
const priceT = 3;  //paper Price
const morePrice = 1;   //more Price
const priceZ = .25;     //labor
const pinPrice = .10; 
const priceTax = .0975; //tax
let isOnlinePayment = false;
function calculatePinsAndCost() {
    const totalRosesAmount = totalRoses();

    // Get the selected pin option
    const allPinsQuantity = document.getElementById('allPinsQuantity').value || 0;
    const halfPinsQuantity = document.getElementById('halfPinsQuantity').value || 0;
    const otherPinsQuantity = document.getElementById('otherPinsQuantity').value || 0;

    let selectedPins = 0;

    // Calculate the number of pins based on the input values
    if (parseInt(allPinsQuantity) === 1) {
        selectedPins = totalRosesAmount;
    } else if (parseInt(halfPinsQuantity) === 1) {
        selectedPins = Math.ceil(totalRosesAmount / 2);
    } else {
        // Assume `otherPinsQuantity` is directly entered by the user
        selectedPins = parseInt(otherPinsQuantity) || 0;
    }

    // Calculate the cost of the pins
    const totalPinCost = selectedPins * pinPrice;

    return totalPinCost;
}

function totalRoses() {
    const naturalQuantityRed = parseInt(document.getElementById('naturalQuantityRed').value) || 0;
    const naturalQuantityWhite = parseInt(document.getElementById('naturalQuantityWhite').value) || 0;
    const naturalQuantityPink = parseInt(document.getElementById('naturalQuantityPink').value) || 0;
    const naturalQuantityYellow = parseInt(document.getElementById('naturalQuantityYellow').value) || 0;
    const naturalQuantityOrange = parseInt(document.getElementById('naturalQuantityOrange').value) || 0;
    const blueQuantity = parseInt(document.getElementById('blueQuantity').value) || 0;
    const paintedQuantityGlitter = parseInt(document.getElementById('paintedQuantityGlitter').value) || 0;
    const paintedQuantityBluePink = parseInt(document.getElementById('paintedQuantityBluePink').value) || 0;
    const paintedQuantityPurple = parseInt(document.getElementById('paintedQuantityPurple').value) || 0;

    const amount = naturalQuantityRed + naturalQuantityOrange + naturalQuantityPink +
        naturalQuantityWhite + naturalQuantityYellow + blueQuantity + paintedQuantityGlitter +
        paintedQuantityGlitter + paintedQuantityPurple + paintedQuantityBluePink;

    return amount;
}
function calculateTotal() {
    const nQr = document.getElementById('naturalQuantityRed').value || 0;
    const nQw = document.getElementById('naturalQuantityWhite').value || 0;
    const nQp = document.getElementById('naturalQuantityPink').value || 0;
    const nQy = document.getElementById('naturalQuantityYellow').value || 0;
    const nQo = document.getElementById('naturalQuantityOrange').value || 0;
    const pQb = document.getElementById('blueQuantity').value || 0;
    const pQg = document.getElementById('paintedQuantityGlitter').value || 0;
    const pQbP = document.getElementById('paintedQuantityBluePink').value || 0;
    const pQp = document.getElementById('paintedQuantityPurple').value || 0;
    const fQn = document.getElementById('nuveQuantity').value || 0;
    const fQm = document.getElementById('margaritaQuantity').value || 0;
    const fQs = document.getElementById('sunflowerQuantity').value || 0;
    const fQa = document.getElementById('astromeliaQuantity').value || 0;
    const dBqS = document.getElementById('smallButterflyQuantity').value || 0;
    const dBqM = document.getElementById('mediumButterflyQuantity').value || 0;
    const dBqL = document.getElementById('largeButterflyQuantity').value || 0;
    const dCqS = document.getElementById('smallCrownQuantity').value || 0;
    const dCqM = document.getElementById('mediumCrownQuantity').value || 0;
    const dCqL = document.getElementById('largeCrownQuantity').value || 0;
    const dRq = document.getElementById('ribbonQuantity').value || 0;
    const dPq = document.getElementById('paperQuantity').value || 0;
    const mQ = document.getElementById('moreQuantity').value || 0;

    const flowerTotal = 
    (nQr * priceM) + 
    (nQw * priceM) + 
    (nQp * priceM) + 
    (nQy * priceM) + 
    (nQo * priceM) + 
    (pQb * priceL) + 
    (pQg * priceJ) + 
    (pQbP * priceJ) + 
    (pQp * priceJ) + 
    (fQn * priceN) + 
    (fQm * priceR) + 
    (fQs * priceS)+
    (fQa * priceA) + 
    (dBqS * priceQ) + 
    (dBqM * priceW) + 
    (dBqL * priceV) + 
    (dCqS * priceP) +
    (dCqM * priceG) + 
    (dCqL * priceD) + 
    (dRq * priceI) + 
    (dPq * priceT) + 
    (mQ * morePrice);

    const pinFinalPrice = calculatePinsAndCost();
    const afterPin = pinFinalPrice + flowerTotal;
    const total = (afterPin * priceZ) + afterPin; 
    let finalPrice = (total * priceTax) + total;

    if (isOnlinePayment) {
        finalPrice += (finalPrice * 0.029) + 0.30;
    }

    document.getElementById('answer').value = finalPrice.toFixed();
}
document.querySelectorAll('input[type="number"]').forEach(input => {
    input.oninput = () => {
        if(input.value.length > input.maxLength) input.value = input.value.slice(0, input.maxLength);
    };
});
function toggleButtonColor(button) {
    button.classList.toggle('toggled');
    isOnlinePayment = !isOnlinePayment; 
    calculateTotal();
}
let hasPopupBeenShown = false;
function turnOnPopup() {
    if (!hasPopupBeenShown) {
        document.getElementById('popup').classList.add('active');
        hasPopupBeenShown = true; 
    }
}
function turnOffPopup() {
    document.getElementById('popup').classList.remove('active');
    hasPopupBeenShown = false; 
}
function resetFormValues() {
    const inputs = document.querySelectorAll('form input[type="number"]');

    inputs.forEach(input => {
        input.value = 0;
        input.style.color = 'gray'; 
    });

    const totalInput = document.getElementById('answer');
    totalInput.value = '0';
}
document.querySelectorAll('form input[type="number"]').forEach(input => {
    input.addEventListener('input', function() {
        if (this.value == 0) {
            this.style.color ='';
        } else {
            this.style.color = '';
        }
    });
});
window.onload = function() {
    turnOnPopup();
};
function checkOrientation() {
    const rotateMessage = document.getElementById('rotateScreen');
    const width = window.innerWidth;
    const height = window.innerHeight;

    if (width >= 820 && height > width) {
        rotateMessage.style.display = 'flex'; // Show the rotate message
    } else {
        rotateMessage.style.display = 'none'; // Hide the rotate message
    }
}
window.addEventListener('load', checkOrientation);
window.addEventListener('resize', checkOrientation);
window.addEventListener('orientationchange', checkOrientation);