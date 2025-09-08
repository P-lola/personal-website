// Craps Main Data
let crapsUsername = ""

//Craps Game settings
const startingMoney = 1000
const startingRounds = 0
const bets = {
    even: "EVEN",
    odd: "ODD",
}
const minimumBet = 50

//HTML Element IDs
const crapsUsernameInput = "craps-username-input"
const crapsGameRegisterPane = "craps-game-regist-pane"
const crapsMainSection = "craps-main-section"
const crapsStatsUsername = "craps-stats-username"
const crapsStatsMoney = "craps-stats-money"
const crapsStatsRounds = "craps-stats-rounds"
const crapsUserBetAmount = "craps-user-bet-amount"
const crapsRollDiceButton = "craps-roll-dice-button"
const crapsRollDoceAnimationContainer = "craps-roll-dice-animation-container"

//In-game variables
let currentMoney = startingMoney
let currentRounds = startingRounds
let currentBet = bets.even
let currentBetAmount = minimumBet

function registerCrapsPlayer() {
    crapsUsername = (document.getElementById(crapsUsernameInput).value)

    //Validate Username
    let firstCharIsDigitRegex = /^[0-9]|[^a-zA-Z0-9_]/g
    if (crapsUsername.length < 4 || firstCharIsDigitRegex.test(crapsUsername)) {
        alert("Username must be at least 4 characters long, alphanumeric and underscore characters only, no spaces, and cannot start with a number")
    }
    else {
    removeregisterPane()
    showMainGamePane()
    setUpFirstRound() 
    }

}
function removeregisterPane() {
    document.getElementById(crapsGameRegisterPane).style.display = "none"
}

function showMainGamePane() {
    document.getElementById(crapsMainSection).style.display = "block"
}

function setUpFirstRound() {
    document.getElementById(crapsStatsUsername).innerHTML = crapsUsername
    currentMoney = startingMoney
    currentRounds = startingRounds
    setMoney(startingMoney)
    setRounds(currentRounds)
    betEven()
    setBetAmount(minimumBet)
}

function setMoney(money) {
    document.getElementById(crapsStatsMoney).innerHTML = money
}

function setRounds(round) {
    document.getElementById(crapsStatsRounds).innerHTML = round
}

function betEven() {
    chooseBet(bets.even)
}

function betOdd() {
    chooseBet(bets.odd)
}

function chooseBet (bet) {
    currentBet = bet
    document.getElementById(bet).style.backgroundColor = "red"
    const deselectBet = bet === bets.even ? bets.odd : bets.even
    document.getElementById(deselectBet).style.backgroundColor = "transparent"
}

function increaseBet() {
    setBetAmount(Math.min(currentBetAmount + minimumBet, currentMoney))
}

function decreaseBet() {
    setBetAmount(Math.max(currentBetAmount - minimumBet, minimumBet))
}

function setBetAmount(betAmount) {
    currentBetAmount = betAmount
    document.getElementById(crapsUserBetAmount).innerHTML = "$" + betAmount
}

function rollDice () {
    formatDiceScale()
    document.getElementById(crapsRollDiceButton).style.display = "none"
    const diceRollElement = document.getElementById(crapsRollDoceAnimationContainer)
    rollADie({ element: diceRollElement, numberOfDice: 2, callback: processDiceResult, delay: 10000000 });
}

window.addEventListener("resize", formatDiceScale);
function formatDiceScale () {
    console.log("Resized")
    const vw = window.innerWidth * 0.7
    const vh = window.innerHeight * 0.7
    const widthScale = Math.min(600, vw, vh)
    const heightScale = widthScale * 1
    const scale = heightScale/499.79999999999995
    document.getElementById(crapsRollDoceAnimationContainer).style.transform = "scale(" + scale + ")"
}

function processDiceResult (diceResult) {
    console.log(diceResult)
}