function getNewRandomQuote() {
  fetch('http://api.quotable.io/quotes/random')
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json();
  })
  .then(data => {
    const quoteText = data[0].content
    const quoteAuthor = data[0].author
    document.getElementById('random-quote-text').innerHTML = quoteText
    document.getElementById('random-quote-author').innerHTML = quoteAuthor

  })
  .catch(error => {
    alert('Error fetching new quote!!');
  });

}