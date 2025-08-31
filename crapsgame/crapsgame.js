
const crapsUsernameInput = "craps-username-input"
const CrapsGameRegisterPane = "craps-game-regist-pane"
const CrapsMainSection = "craps-main-section"


function registerCrapsPlayer() {
    let crapsUsername = (document.getElementById(crapsUsernameInput).value)

    //Validate Username
    let firstCharIsDigitRegex = /^[0-9]|[^a-zA-Z0-9_]/g
    if (crapsUsername.length < 4 || firstCharIsDigitRegex.test(crapsUsername)) {
        alert("Username must be at least 4 characters long, alphanumeric and underscore characters only, no spaces, and cannot start with a number")
    }
    else {
    removeregisterPane()
    showMainGamePane()
    }

}
function removeregisterPane() {
    document.getElementById(CrapsGameRegisterPane).style.display = "none"
}

function showMainGamePane() {
    document.getElementById(CrapsMainSection).style.display = "block"
}