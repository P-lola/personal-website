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

//Craps Dice Roll Settings
const numDiceToRoll = 2
const hideDiceDelayMs = 10000000
const processDiceResultDelayMs = 1000

//HTML Element IDs
const crapsUsernameInput = "craps-username-input"
const crapsGameRegisterPane = "craps-game-regist-pane"
const crapsMainSection = "craps-main-section"
const crapsStatsUsername = "craps-stats-username"
const crapsStatsMoney = "craps-stats-money"
const crapsStatsRounds = "craps-stats-rounds"
const crapsUserBetAmount = "craps-user-bet-amount"
const crapsRollDiceButton = "craps-roll-dice-button"
const crapsRollDiceAnimationContainer = "craps-roll-dice-animation-container"
const crapsBettingGridContainer = "craps-betting-grid-container"
const crapsRoundFinishGridContainer = "craps-round-finish-grid-container"
const crapsRoundFinishMessage = "craps-round-finish-message"
const crapsNextRoundButton = "craps-next-round-button"
const crapsNextRoundDisabledButton = "craps-next-round-disabled-button"

//In-game variables
let currentMoney = startingMoney
let currentRounds = startingRounds
let currentBet = bets.even
let currentBetAmount = minimumBet
let canChangeBet = true


//HTML ELEMENTS Manipulation Functions
function showElement(elementId) {
    document.getElementById(elementId).style.display = "block"
}

function hideElement(elementId) {
    document.getElementById(elementId).style.display = "none"
}

function showregisterPane() {
    showElement(crapsGameRegisterPane)
}

function removeregisterPane() {
    hideElement(crapsGameRegisterPane)
}

function showMainGamePane() {
    showElement(crapsMainSection)
}

function hideMainGamePane() {
    hideElement(crapsMainSection)
}

//Game Starting Point

function registerCrapsPlayer() {
    crapsUsername = document.getElementById(crapsUsernameInput).value

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

//Round Management Functions

function setUpFirstRound() {
    document.getElementById(crapsStatsUsername).innerHTML = crapsUsername
    hideElement(crapsNextRoundDisabledButton)
    showElement(crapsNextRoundButton)
    setMoney(startingMoney)
    setRounds(startingRounds)
    betEven()
    setBetAmount(minimumBet)
    setUpNextRound()
}

function setUpNextRound() {
    hideElement(crapsRollDiceAnimationContainer)
    hideElement(crapsRoundFinishGridContainer)
    showElement(crapsRollDiceButton)
    showElement(crapsBettingGridContainer)
    canChangeBet = true
    setBetAmount(minimumBet)
}


//User Score Setting
function setMoney(money) {
    currentMoney = money
    document.getElementById(crapsStatsMoney).innerHTML = money
}

function setRounds(round) {
    currentRounds = round
    document.getElementById(crapsStatsRounds).innerHTML = round
}


//Manage User Bet Selection

function betEven() {
    chooseBet(bets.even)
}

function betOdd() {
    chooseBet(bets.odd)
}

function chooseBet (bet) {
    if (canChangeBet) {
    currentBet = bet
    document.getElementById(bet).style.backgroundColor = "red"
    const deselectBet = bet === bets.even ? bets.odd : bets.even
    document.getElementById(deselectBet).style.backgroundColor = "transparent"
    }
}

function increaseBet() {
    setBetAmount(Math.min(currentBetAmount + minimumBet, currentMoney))
}

function decreaseBet() {
    setBetAmount(Math.max(currentBetAmount - minimumBet, minimumBet))
}

function setBetAmount(betAmount) {
    if (canChangeBet) {
        currentBetAmount = betAmount
        document.getElementById(crapsUserBetAmount).innerHTML = "$" + betAmount
    }
}

//Roll Dice and Process Result

function rollDice () {
    canChangeBet = false
    formatDiceScale()
    showElement(crapsRollDiceAnimationContainer)
    hideElement(crapsRollDiceButton)
    const diceRollElement = document.getElementById(crapsRollDiceAnimationContainer)
    rollADie({ element: diceRollElement, numberOfDice: numDiceToRoll, callback: delayedProcessDiceResult, delay: hideDiceDelayMs });
}

window.addEventListener("resize", formatDiceScale);
function formatDiceScale () {
    const vw = window.innerWidth * 0.7
    const vh = window.innerHeight * 0.7
    const widthScale = Math.min(600, vw, vh)
    const heightScale = widthScale * 1
    const scale = heightScale/499.79999999999995
    document.getElementById(crapsRollDiceAnimationContainer).style.transform = "scale(" + scale + ")"
}

function delayedProcessDiceResult(diceResult) {
    setTimeout(function() {processDiceResult(diceResult)}, processDiceResultDelayMs)
}

function processDiceResult (diceResult) {
    const sum = diceResult.reduce((partialSum, a) => partialSum + a, 0)
    let diceSumResult = bets.even
    if (sum % 2 === 1) {
        diceSumResult = bets.odd
    }
    setRounds(currentRounds + 1)
    let roundFinishMessage =  ""
    if (diceSumResult === currentBet) {
        roundFinishMessage = "YOU WIN!!!"
        setMoney(currentMoney + currentBetAmount)
    } else {
        roundFinishMessage = "YOU LOSE ;("
        setMoney(currentMoney - currentBetAmount)
    }
    if (currentMoney === 0) {
        roundFinishMessage = "YOU'RE OUTT!!"
        showElement(crapsNextRoundDisabledButton)
        hideElement(crapsNextRoundButton)
    }
    hideElement(crapsBettingGridContainer)
    showElement(crapsRoundFinishGridContainer)
    document.getElementById(crapsRoundFinishMessage).innerHTML = roundFinishMessage
}


//Exit Game
function exitGame() {
    let noOfRounds = ""
    if (currentRounds > 1) {
        noOfRounds = "rounds"
    } else {
        noOfRounds = "round"
    }
    alert("After playing " + currentRounds + " " + noOfRounds + " , you leave with " + currentMoney + "$!")
    hideMainGamePane()
    showregisterPane()
    document.getElementById(crapsUsernameInput).value= ""
}