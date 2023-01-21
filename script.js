// GAME STATE
let gameState = {
    coffeeCount: 0,
    rate: 0
}
let countDisplay = document.getElementById('count');
let rateDisplay = document.getElementById('rate');


// Coffee Counter Incrementation

function coffeeCountIncrementer() {
    gameState.coffeeCount++;
    countDisplay.innerText = gameState.coffeeCount;

}

let coffeeButton = document.getElementById("coffee-button");
coffeeButton.addEventListener('click', coffeeCountIncrementer);


// Automatically update the coffee count and display each second (1000 ms) 
setInterval(function() {
    gameState.coffeeCount += gameState.rate;
    countDisplay.innerText = gameState.coffeeCount;
}, 1000);


function checkProducers() { // TODO: I hate this function, I know there's a better way to do it, seems a lot of unnecessary work to do every second
    if ( gameState.coffeeCount >= producer1.unlockThresh && producer1.locked) {
        addProducer(producer1);
    } else if ( gameState.coffeeCount >= producer2.unlockThresh && producer2.locked) {
        addProducer(producer2);
    } else if ( gameState.coffeeCount >= producer3.unlockThresh && producer3.locked) {
        addProducer(producer3);
    } else if ( gameState.coffeeCount >= producer4.unlockThresh && producer4.locked) {
        addProducer(producer4);
    } else if ( gameState.coffeeCount >= producer5.unlockThresh && producer5.locked) {
        addProducer(producer5);
    } else if ( gameState.coffeeCount >= producer6.unlockThresh && producer6.locked) {
        addProducer(producer6);
    } else if ( gameState.coffeeCount >= producer7.unlockThresh && producer7.locked) {
        addProducer(producer7);
    } else if ( gameState.coffeeCount >= producer8.unlockThresh && producer8.locked) {
        addProducer(producer8);
    } else if ( gameState.coffeeCount >= producer9.unlockThresh && producer9.locked) {
        addProducer(producer9);
    } else if ( gameState.coffeeCount >= producer10.unlockThresh && producer10.locked) {
        addProducer(producer10);
    } else if ( gameState.coffeeCount >= producer11.unlockThresh && producer11.locked) {
        addProducer(producer11);
    }
}

setInterval(checkProducers, 1000);


// ADDING PRODUCERS

let producer1 = {
    productName: "Chemex",
    imgUrl: "https://i.imgur.com/sJbAwvh.png",
    productRate: 1,
    initialCost: 10,
    price: 10,
    costMultiplier: 1.25,
    unlockThresh: 5,
    quantityOwned: 0,
    locked: true
}

let producer2 = {
    productName: "French Press",
    imgUrl: "https://cdn.shopify.com/s/files/1/0035/9372/products/bodum_8_cup_french_press_2048x2048_e1a16bc6-3eb6-488b-b895-1ab14760faa9.png?v=1654098435",
    productRate: 2,
    initialCost: 50,
    price: 50,
    costMultiplier: 1.25,
    unlockThresh: 35,
    quantityOwned: 0,
    locked: true
}

let producer3 = {
    productName: "Mr. Coffee",
    imgUrl: "https://i.imgur.com/JcM8RuK.png",
    productRate: 5,
    initialCost: 100,
    price: 100,
    costMultiplier: 1.25,
    unlockThresh: 75,
    quantityOwned: 0,
    locked: true
}

let producer4 = {
    productName: "Ten Cup Urn",
    imgUrl: "https://i.imgur.com/M9BIDQk.png",
    productRate: 10,
    initialCost: 500,
    price: 500,
    costMultiplier: 1.25,
    unlockThresh: 450,
    quantityOwned: 0,
    locked: true
}

let producer5 = {
    productName: "Espresso Machine",
    imgUrl: "https://i.imgur.com/LKrTxCm.png",
    productRate: 20,
    initialCost: 1000,
    price: 1000,
    costMultiplier: 1.25,
    unlockThresh: 800,
    quantityOwned: 0,
    locked: true
}

let producer6 = {
    productName: "Ten Gallon Urn",
    imgUrl: "https://i.imgur.com/72vo69S.png",
    productRate: 50,
    initialCost: 5000,
    price: 5000,
    costMultiplier: 1.25,
    unlockThresh: 3000,
    quantityOwned: 0,
    locked: true
}

let producer7 = {
    productName: "Coffeeshop",
    imgUrl: "https://i.imgur.com/E5IcFt1.png",
    productRate: 75,
    initialCost: 10000,
    price: 10000,
    costMultiplier: 1.25,
    unlockThresh: 6000,
    quantityOwned: 0,
    locked: true
}

let producer8 = {
    productName: "Coffee Factory",
    imgUrl: "https://i.imgur.com/n0OIMaJ.png",
    productRate: 100,
    initialCost: 50000,
    price: 50000,
    costMultiplier: 1.25,
    unlockThresh: 35000,
    quantityOwned: 0,
    locked: true
}

let producer9 = {
    productName: "Coffee Fountain",
    imgUrl: "https://i.imgur.com/aAsUjKs.png",
    productRate: 200,
    initialCost: 100000,
    price: 100000,
    costMultiplier: 1.25,
    unlockThresh: 75000,
    quantityOwned: 0,
    locked: true
}

let producer10 = {
    productName: "Coffee River",
    imgUrl: "https://i.imgur.com/HSyRKUt.png",
    productRate: 500,
    initialCost: 500000,
    price: 500000,
    costMultiplier: 1.25,
    unlockThresh: 420000,
    quantityOwned: 0,
    locked: true
}

let producer11 = {
    productName: "Coffee Ocean",
    imgUrl: "https://i.imgur.com/DD7AuAO.png",
    productRate: 1000,
    initialCost: 1000000,
    price: 1000000,
    costMultiplier: 1.25,
    unlockThresh: 666666,
    quantityOwned: 0,
    locked: true
}

let producerContainer = document.getElementById('producer-container');

function addProducer ( producerObj ) {  // TODO: switch to template literals
    producerObj.locked = false;

    let producerDiv = document.createElement("div");
    producerDiv.classList.add("producer");
    producerDiv.classList.add("column-container");
    producerDiv.classList.add("separated");

    // Product image and count (left column)
    let imageContainer = document.createElement("div");
    imageContainer.classList.add("producer-pic-container");

    let productImage = document.createElement("img");
    productImage.classList.add('producer-pic');
    console.log(producerObj);
    console.log(producerObj.imgUrl);
    productImage.src = producerObj.imgUrl;
    productImage.alt = producerObj.productName + " Product Image"
    imageContainer.appendChild(productImage);

    let productCount = document.createElement("div");
    productCount.classList.add("producer-count");
    productCount.innerText = producerObj.quantityOwned;
    imageContainer.appendChild(productCount);

    producerDiv.appendChild(imageContainer);

    // Product name and buy button (middle column)
    let nameBuyDiv = document.createElement("div");
    nameBuyDiv.classList.add("column");

    let productName = document.createElement("h3");
    productName.innerText = producerObj.productName;
    nameBuyDiv.appendChild(productName);

    let buyButton = document.createElement("button");
    buyButton.innerText = "BUY";
    buyButton.classList.add("buy-button");
    nameBuyDiv.appendChild(buyButton);

    producerDiv.appendChild(nameBuyDiv);

    // Product stats (right column)
    let productStatDiv = document.createElement("div");
    productStatDiv.classList.add("column");

    let productRate = document.createElement("p");
    let price = document.createElement("p");
    
    price.innerText = "Product Cost: " + producerObj.initialCost + " coffee";
    productRate.innerText = "Production Rate: " + producerObj.productRate + " (coffee/sec)";

    productStatDiv.appendChild(price);
    productStatDiv.appendChild(productRate);

    producerDiv.appendChild(productStatDiv);

    producerContainer.appendChild(producerDiv);

    // Add buy button functionality 
    buyButton.addEventListener("click", function () {
        producerPurchase( producerObj, productCount, price )
    });
}

function producerPurchase( producerObj, quantityOwnedDisplay, priceDisplay ) {
    // Check that there is a high enough coffee count for purchase
    if ( gameState.coffeeCount >= producerObj.price ) {
        // Update coffee count and rate values and displays
        gameState.coffeeCount -= producerObj.price;
        countDisplay.innerText = gameState.coffeeCount;

        gameState.rate += producerObj.productRate;
        rateDisplay.innerText = gameState.rate;

        // Update producer stats values and displays
        producerObj.quantityOwned++;
        producerObj.costMultiplier += ( producerObj.quantityOwned / 10 );
        producerObj.price = Math.round(producerObj.initialCost * producerObj.costMultiplier);
        
        quantityOwnedDisplay.innerText = producerObj.quantityOwned;
        priceDisplay.innerText = "Product Cost: " + producerObj.price + " coffee";
    }

}
