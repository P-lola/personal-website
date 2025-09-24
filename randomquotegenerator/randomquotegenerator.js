const colorPalette = [
    ["#FFD700", "#DAA520"],
    ["#E6BE8A", "#A97142"],
    ["#C5A880", "#7A5C32"],
    ["#D4AF37", "#8B7500"],
    ["#5A3E36", "#3E2723"],
    ["#8b451390", "#5C3317"],
    ["#D2B48C", "#8B7355"],
    ["#4B3832", "#2F1B12"],
    ["#6E4B3A", "#3E2723"],
    ["#7E6A52", "#4A3C2A"],
    ["#A89F91", "#5C5446"]
]

function getRandomColorCombo() {
    const randomIndex = Math.floor(Math.random() * colorPalette.length);
    return colorPalette[randomIndex];
}

function getNewRandomQuote() {
  fetch('http://api.quotable.io/quotes/random')
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json();
  })
  .then(data => {
    const colorCombo = getRandomColorCombo()
    document.getElementById('random-quote-generator').style.background = 'linear-gradient(45deg, ' + colorCombo[0] + ',' + colorCombo[1]
    const quoteText = data[0].content
    const quoteAuthor = data[0].author
    document.getElementById('random-quote-text').innerHTML = quoteText
    document.getElementById('random-quote-author').innerHTML = quoteAuthor

  })
  .catch(error => {
    alert('Error fetching new quote!!');
  });

}