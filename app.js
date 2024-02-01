function generateQuote() {
    let quoteContainer = document.getElementById('quote')
    let mainAuthor = document.getElementById('author')
    let randomNumber=Math.floor(Math.random() *15)
    
    quoteContainer.innerHTML = 'You cannot change your future, but, you can change your habits, and surely your habits will change your future.'
    mainAuthor.innerHTML='APJ Abdul Kalam'


    fetch("https://type.fit/api/quotes")
    .then(function(response) {
        return response.json();
      })
      .then(function(data) {
        quoteContainer.innerHTML=data[randomNumber].text
        mainAuthor.innerHTML=data[randomNumber].author
        
      });

}
