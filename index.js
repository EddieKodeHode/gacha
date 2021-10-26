const result = document.getElementById("result-1")

const pastResult = document.getElementById("result-2")

const rollAmount = document.getElementById("roll-amount")

let rarity = 0

let itemRoll = 0

let roll = 0

let dialogue = 0


function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function rollRarity() {
    roll += 1
    rollAmount.innerText = roll
    rarity = randomNumber(1,100)

    if (rarity == 100) { //legendary
        console.log('legendary')
        rollItemLegendary()
    }
    else if (rarity >= 90) { //rare
        console.log('rare')
        rollItemRare()
    }
    else if (rarity >= 60) { //uncommon
        console.log('uncommon')
        rollItemUncommon()
    }
    else if (rarity <= 59) { //common
        console.log('common')
        rollItemCommon()
    }
    else {
        console.log('Error')
    }
}

// COMMON POOL 
function rollItemCommon() {
    itemRoll = randomNumber(1,3)
    switch (itemRoll) {
        case 1:
            result.innerHTML = '<div class="win-item" id="common"><h3>1 QP</h3><p>You won 1 Quest Point.</p><p>(common)</p></div>'
            pastResult.innerHTML += '<p class="common">1 QP</p>'
            break;
        case 2:
            result.innerHTML = '<div class="win-item" id="common"><h3>2 QP</h3><p>You won 2 Quest Points.</p><p>(common)</p></div>'
            pastResult.innerHTML += '<p class="common">2 QP</p>'
            break;
        case 3:
            result.innerHTML = '<div class="win-item" id="common"><h3>3 QP</h3><p>You won 3 Quest Points.</p><p>(common)</p></div>'
            pastResult.innerHTML += '<p class="common">3 QP</p>'
            break;
        default:
            console.log('error')
            break;
    }
}

// UNCOMMON POOL
function rollItemUncommon() {
    itemRoll = randomNumber(1,4)
    switch (itemRoll) {
        case 1:
        case 2:
            result.innerHTML = '<div class="win-item" id="uncommon"><h3>5 QP</h3><p>You won 5 Quest Points</p><p>(uncommon)</p></div>'
            pastResult.innerHTML += '<p class="uncommon">5 QP</p>'
            break;
        case 3:
            result.innerHTML = '<div class="win-item" id="uncommon"><h3>Common MYO</h3><p>You won a common MYO</p><p>(uncommon)</p></div>'
            pastResult.innerHTML += '<p class="uncommon">MYO</p>'
            break;
        case 4:
            result.innerHTML = '<div class="win-item" id="uncommon"><h3>Element change scroll</h3><p>You won an element changing scroll</p><p>(uncommon)</p></div>'
            pastResult.innerHTML += '<p class="uncommon">Scroll</p>'
            break;
        default:
            console.log('error')
            break;
    }
}

// RARE POOL
function rollItemRare() {
    itemRoll = randomNumber(1,4)
    switch (itemRoll) {
        case 1:
        case 2:
            result.innerHTML = '<div class="win-item" id="rare"><h3>10 QP</h3><p>You won 10 Quest Points</p><p>(rare)</p></div>'
            pastResult.innerHTML += '<p class="rare">10 QP</p>'
            break;
        case 3:
            result.innerHTML = '<div class="win-item" id="rare"><h3>Rare MYO</h3><p>You won a rare MYO</p><p>(rare)</p></div>'
            pastResult.innerHTML += '<p class="rare">R. MYO</p>'
            break;
        case 4:
            result.innerHTML = '<div class="win-item" id="rare"><h3>Limb item</h3><p>You won an extra limb item</p><p>(rare)</p></div>'
            pastResult.innerHTML += '<p class="rare">Limb</p>'
            break;
        default:
            console.log('error')
            break;
    }
}

// LEGENDARY POOL
function rollItemLegendary() {
    itemRoll = randomNumber(1,4)
    switch (itemRoll) {
        case 1:
        case 2:
        case 3:
            result.innerHTML = '<div class="win-item" id="legendary"><h3>20 QP</h3><p>You won 20 Quest Points</p><p>(legendary)</p></div>'
            pastResult.innerHTML += '<p class="legendary">20 QP</p>'
            break;
        case 4:
            result.innerHTML = '<div class="win-item" id="legendary"><h3>Chameleon</h3><p>You won a Chameleon item</p><p>(legendary)</p></div>'
            pastResult.innerHTML += '<p class="legendary">Chameleon</p>'
            break;
        default:
            console.log('error')
            break;
    }
    alert("You won a legendary item!")
}

// Shopkeeper images and paths
const shopkeep = document.getElementById("image-goes-here")

const $shopkeep1 = "url(images/shopkeep1.png)"
const $shopkeep2 = "url(images/shopkeep2.png)"
const $shopkeep3 = "url(images/shopkeep3.png)"
const $shopkeep4 = "url(images/shopkeep4.png)"

// Shopkeeper dialogue and paths
const shopText = document.getElementById("text-goes-here")

const $banter1 = "<p>Hm.</p>"
const $banter2 = "<p>Hello.</p>"
const $banter3 = "<p>Why.</p>"
const $banter4 = "<p>Huh.</p>"

//shopText.innerHTML = $banter1

function banter(){
    dialogue = randomNumber(1,4)
    switch (dialogue) {
        case 1:
            shopText.innerHTML = $banter1
            break;
        case 2:
            shopText.innerHTML = $banter2
            break;
        case 3:
            shopText.innerHTML = $banter3
            break;
        case 4:
            shopText.innerHTML = $banter4
            break;
        default:
            console.log("Error")
            break;
    }
    
}

// result.innerHTML = '<div class="win-item" id="common"><h3>ITEMHERE</h3><p>You won a ITEM.</p><p>(common)</p></div>'

// pastResult.innerHTML += '<p class="common">MYO</p>'