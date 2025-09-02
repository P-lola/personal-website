// Craps Main Data
let crapsUsername = ""

//Craps Game settings
const startingMoney = 1000
const startingRounds = 0
const bets = {
    even: "EVEN",
    odd: "ODD",
}

//HTML Element IDs
const crapsUsernameInput = "craps-username-input"
const crapsGameRegisterPane = "craps-game-regist-pane"
const crapsMainSection = "craps-main-section"
const crapsStatsUsername = "craps-stats-username"
const crapsStatsMoney = "craps-stats-money"
const crapsStatsRounds = "craps-stats-rounds"

//In-game variables
let currentMoney = startingMoney
let currentRounds = startingRounds
let currentBet = bets.even

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