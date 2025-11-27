const colorPalette = [
    // Warm desert sunset
    ["#C19A6B", "#8B6914"],
    ["#D4A574", "#9B6B3F"],
    ["#E8C4A0", "#B8956A"],
    
    // Sandy browns
    ["#DEB887", "#8B7355"],
    ["#D2B48C", "#A0826D"],
    ["#C9B189", "#9A7B4F"],
    
    // Desert earth tones
    ["#C2956E", "#826644"],
    ["#B8956A", "#8B7355"],
    ["#A0826D", "#6B5344"],
    
    // Golden hour
    ["#DAA520", "#B8860B"],
    ["#CD853F", "#8B6508"],
    ["#D4AF37", "#9B7E34"],
    
    // Warm neutrals
    ["#BCA88C", "#8B7B6B"],
    ["#A89F91", "#7A6F5D"],
    ["#B7A99A", "#8C7B6B"],
    
    // Deep earth
    ["#8B7355", "#5C4033"],
    ["#7E6A52", "#4A3C2A"],
    ["#6B5344", "#4E3B2B"]
]

function getRandomColorCombo() {
    const randomIndex = Math.floor(Math.random() * colorPalette.length);
    return colorPalette[randomIndex];
}

async function getNewRandomQuote() {
    try { 
        const response = await fetch('https://quotesondesign.com/wp-json/custom/v1/random-post')
        if (!response.ok) {
            alert('There was a problem getting a new quote')
            return 
        }
        const data = await response.json()
        
        const quoteText = data.content
        const quoteAuthor = data.title
        document.getElementById('random-quote-text').innerHTML = quoteText
        document.getElementById('random-quote-author').innerHTML = quoteAuthor
        const colorCombo = getRandomColorCombo()
        document.getElementById('random-quote-generator').style.background = 'linear-gradient(45deg, ' + colorCombo[0] + ', ' + colorCombo[1] + ')' // Fixed: closed the string and added closing parenthesis
    } catch (error) {
        console.error('Error fetching quote:', error)
        alert('There was a problem getting a new quote')
    }
}