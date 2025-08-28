
const crapsUsernameInput = "craps-username-input"
const CrapsGameRegisterPane = "craps-game-regist-pane"
const CrapsMainSection = "craps-main-section"


function registerCrapsPlayer() {
    let crapsUsername = (document.getElementById(crapsUsernameInput).value)
    alert("Got: " + crapsUsername)
    removeregisterPane()
    showMainGamePane()
}
function removeregisterPane() {
    document.getElementById(CrapsGameRegisterPane).style.display = "none"
}

function showMainGamePane() {
    document.getElementById(CrapsMainSection).style.display = "block"
}