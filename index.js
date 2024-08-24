const naturalPrice = 2.44;
const bluePrice = 3.12;
const paintedPrice = 3.64;
const nuvePrice = 15;
const margaritaPrice = 8;
const sunflowerPrice = 15;
const astromeliaPrice = 15;
const smallButterflyPrice = 1;
const mediumButterflyPrice = 2;
const largeButterflyPrice = 3;
const smallCrownPrice = 5;
const mediumCrownPrice = 8;
const largeCrownPrice = 10;
const ribbonPrice = 5; 
const paperPrice = 3; 
const morePrice = 1;   
const priceZ = .25;
const pinPrice = .50;

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
    const naturalQuantityRed = document.getElementById('naturalQuantityRed').value || 0;
    const naturalQuantityWhite = document.getElementById('naturalQuantityWhite').value || 0;
    const naturalQuantityPink = document.getElementById('naturalQuantityPink').value || 0;
    const naturalQuantityYellow = document.getElementById('naturalQuantityYellow').value || 0;
    const naturalQuantityOrange = document.getElementById('naturalQuantityOrange').value || 0;
    const blueQuantity = document.getElementById('blueQuantity').value || 0;
    const paintedQuantityGlitter = document.getElementById('paintedQuantityGlitter').value || 0;
    const paintedQuantityBluePink = document.getElementById('paintedQuantityBluePink').value || 0;
    const paintedQuantityPurple = document.getElementById('paintedQuantityPurple').value || 0;
    const nuveQuantity = document.getElementById('nuveQuantity').value || 0;
    const margaritaQuantity = document.getElementById('margaritaQuantity').value || 0;
    const sunflowerQuantity = document.getElementById('sunflowerQuantity').value || 0;
    const astromeliaQuantity = document.getElementById('astromeliaQuantity').value || 0;
    const smallButterflyQuantity = document.getElementById('smallButterflyQuantity').value || 0;
    const mediumButterflyQuantity = document.getElementById('mediumButterflyQuantity').value || 0;
    const largeButterflyQuantity = document.getElementById('largeButterflyQuantity').value || 0;
    const smallCrownQuantity = document.getElementById('smallCrownQuantity').value || 0;
    const mediumCrownQuantity = document.getElementById('mediumCrownQuantity').value || 0;
    const largeCrownQuantity = document.getElementById('largeCrownQuantity').value || 0;
    const ribbonQuantity = document.getElementById('ribbonQuantity').value || 0;
    const paperQuantity = document.getElementById('paperQuantity').value || 0;
    const moreQuantity = document.getElementById('moreQuantity').value || 0;

    const total = 
    (naturalQuantityRed * naturalPrice) + 
    (naturalQuantityWhite * naturalPrice) + 
    (naturalQuantityPink * naturalPrice) + 
    (naturalQuantityYellow * naturalPrice) + 
    (naturalQuantityOrange * naturalPrice) + 
    (blueQuantity * bluePrice) + 
    (paintedQuantityGlitter * paintedPrice) + 
    (paintedQuantityBluePink * paintedPrice) + 
    (paintedQuantityPurple * paintedPrice) + 
    (nuveQuantity * nuvePrice) + 
    (margaritaQuantity * margaritaPrice) + 
    (sunflowerQuantity * sunflowerPrice)+
    (astromeliaQuantity * astromeliaPrice) + 
    (smallButterflyQuantity * smallButterflyPrice) + 
    (mediumButterflyQuantity * mediumButterflyPrice) + 
    (largeButterflyQuantity * largeButterflyPrice) + 
    (smallCrownQuantity * smallCrownPrice) +
    (mediumCrownQuantity * mediumCrownPrice) + 
    (largeCrownQuantity * largeCrownPrice) + 
    (ribbonQuantity * ribbonPrice) + 
    (paperQuantity * paperPrice) + 
    (moreQuantity * morePrice);

    const pinFinalPrice = calculatePinsAndCost();
    const finalTotal = pinFinalPrice + total;
    const final = (finalTotal * priceZ) + finalTotal;

    document.getElementById('answer').value = final.toFixed();
}


document.querySelectorAll('input[type="number"]').forEach(input => {
    input.oninput = () => {
        if(input.value.length > input.maxLength) input.value = input.value.slice(0, input.maxLength);
    };
});


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
