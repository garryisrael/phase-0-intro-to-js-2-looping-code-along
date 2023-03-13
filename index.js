 
  function writeCards(guests, event) {
    let thankYouCards = []
    for (let i = 0; i < guests.length; i++ ) {
      thankYouCards.push( `Thank you, ${guests[i]}, for the wonderful ${event} gift!` )
    }
    return thankYouCards
  }
function countDown(num){
  while(num>=0){
    console.log(num);
    num--;
}
}