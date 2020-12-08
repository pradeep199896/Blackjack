 var Deck = new function(){
    this.ranks = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
    this.suits = ['hearts', 'spades', 'diamonds','clubs'];
    /*
        Fills up the deck array with cards
    */
      this.init = function(){
        this.deck = []; //empty the array
        for(var s = 3; s >= 0; s--){
          for(var r = 12; r >= 0; r--){
            this.deck.push({"rank":this.ranks[r],"suit":this.suits[s]});
        }
      }
      return this.deck.length
    }
    
}
function Card(rank, suit){
    this.rank = rank;
  this.suit = suit;
}

/*
    Gets the value or points of the card
    currentTotal - The current total score of the
    player's hand
*/
Card.prototype.getValue = function(currentTotal){
    var value = 0;

    if (this.rank == 'A' && currentTotal < 11){
            value = 11;
    } else if (this.rank == 'A'){
            value = 1;
    } else if (this.rank == 'J' || this.rank == 'Q' || this.rank == 'K'){
            value = 10;
    } else {
            value = parseInt(this.rank);
    }
    return value;
}
module.exports={Deck,Card}