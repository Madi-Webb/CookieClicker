
// GAME STATE
let gameState = {
    coffeeCount: 0,
    rate: 0,
    costMultiplier: 1.25,
    lockedProducers: [
        {
            productName: "Chemex",
            imgUrl: "https://i.imgur.com/sJbAwvh.png",
            productRate: 1,
            initialCost: 10,
            cost: 10,
            unlockThresh: 5,
            count: 0
        },
        {
            productName: "French Press",
            imgUrl: "https://i.imgur.com/hq2vnsg.png",
            productRate: 2,
            initialCost: 50,
            cost: 50,
            unlockThresh: 35,
            count: 0
        },
        {
            productName: "Mr. Coffee",
            imgUrl: "https://i.imgur.com/JcM8RuK.png",
            productRate: 5,
            initialCost: 100,
            cost: 100,
            unlockThresh: 75,
            count: 0
        },
        {
            productName: "Ten Cup Urn",
            imgUrl: "https://i.imgur.com/M9BIDQk.png",
            productRate: 10,
            initialCost: 500,
            cost: 500,
            unlockThresh: 450,
            count: 0
        },
        {
            productName: "Espresso Machine",
            imgUrl: "https://i.imgur.com/LKrTxCm.png",
            productRate: 20,
            initialCost: 1000,
            cost: 1000,
            unlockThresh: 800,
            count: 0
        },
        {
            productName: "Ten Gallon Urn",
            imgUrl: "https://i.imgur.com/72vo69S.png",
            productRate: 50,
            initialCost: 5000,
            cost: 5000,
            unlockThresh: 3000,
            count: 0
        },
        {
            productName: "Coffeeshop",
            imgUrl: "https://i.imgur.com/E5IcFt1.png",
            productRate: 75,
            initialCost: 10000,
            cost: 10000,
            unlockThresh: 6000,
            count: 0
        },
        {
            productName: "Coffee Factory",
            imgUrl: "https://i.imgur.com/n0OIMaJ.png",
            productRate: 100,
            initialCost: 50000,
            cost: 50000,
            unlockThresh: 35000,
            count: 0
        },
        {
            productName: "Coffee Fountain",
            imgUrl: "https://i.imgur.com/aAsUjKs.png",
            productRate: 200,
            initialCost: 100000,
            cost: 100000,
            unlockThresh: 75000,
            count: 0
        },
        {
            productName: "Coffee River",
            imgUrl: "https://i.imgur.com/HSyRKUt.png",
            productRate: 500,
            initialCost: 500000,
            cost: 500000,
            unlockThresh: 420000,
            count: 0
        },
        {
            productName: "Coffee Ocean",
            imgUrl: "https://i.imgur.com/DD7AuAO.png",
            productRate: 1000,
            initialCost: 1000000,
            cost: 1000000,
            unlockThresh: 666666,
            count: 0
        }
    ],
    unlockedProducers: []
}


let countDisplay = document.getElementById('count');
let rateDisplay = document.getElementById('rate');


// COFFEE COUNTER INCREMENTATION

function coffeeCountIncrementer() {
    gameState.coffeeCount++;
    countDisplay.innerText = gameState.coffeeCount;
}

let coffeeButton = document.getElementById("coffee-container");
coffeeButton.addEventListener('click', coffeeCountIncrementer);

// Automatically update the coffee count and display each second (1000 ms) 
setInterval(function() {
    gameState.coffeeCount += gameState.rate;
    countDisplay.innerText = gameState.coffeeCount;
}, 1000);


// PRODUCERS CHECKING, ADDING AND PURCHASING

function checkProducers() {
    if ( gameState.lockedProducers.length ) {
        if ( gameState.coffeeCount > gameState.lockedProducers[0].unlockThresh) {
            addProducer(gameState.lockedProducers[0]);
            gameState.unlockedProducers.unshift(gameState.lockedProducers.shift());
        }
    }
}

setInterval(checkProducers, 1000);


let producerContainer = document.getElementById('producer-container');

function addProducer ( producer ) { 

    // update producers unlocked count display
    let producersUnlockedCount = document.getElementById("producers-unlocked");
    producersUnlockedCount.innerText = `(${gameState.unlockedProducers.length + 1} / 11 unlocked)`;

    let producerDiv = document.createElement("div");
    producerDiv.classList.add("producer");
    producerDiv.classList.add("column-container");
    producerDiv.classList.add("separated");

    producerDiv.innerHTML = `
        <div class="producer-pic-container">
            <img class="producer-pic" src="${producer.imgUrl}" alt="${producer.productName + " Product Image"}"></img>
            <div class="producer-count" id="product-count${producer.productRate}">${producer.count}</div>
        </div>
        <div class="column">
            <h3>${producer.productName}</h3>
            <div class="column">
                <p id="product-price${producer.productRate}">Product Cost: ${producer.initialCost} coffee</p>
                <p>Production Rate: ${producer.productRate} (coffee/sec)</p>
            </div>
        </div>
        <div class="centered column">
            <button class="buy-button" id="buy-button${producer.productRate}" >BUY</button>
        </div>
    `;

    producerContainer.appendChild(producerDiv);

    const buyButton = document.getElementById(`buy-button${producer.productRate}`);
    const productCount = document.getElementById(`product-count${producer.productRate}`);
    const productCost = document.getElementById(`product-price${producer.productRate}`)

    buyButton.addEventListener("click", function () {
        producerPurchase( producer, productCount, productCost )
    });
}

function producerPurchase( producer, productCount, productCost ) {
    // verify that there is a high enough coffee count for purchase
    if ( gameState.coffeeCount >= producer.cost ) {
        // update coffee count and rate values and displays
        gameState.coffeeCount -= producer.cost;
        countDisplay.innerText = gameState.coffeeCount;

        gameState.rate += producer.productRate;
        rateDisplay.innerText = gameState.rate;

        // update producer stats values and displays
        producer.count++;
        gameState.costMultiplier += ( producer.count / 10 );
        producer.cost = Math.round(producer.initialCost * gameState.costMultiplier);
        
        productCount.innerText = producer.count;
        productCost.innerText = "Product Cost: " + producer.cost + " coffee";
    }

}
