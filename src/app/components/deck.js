export default class Deck {
    constructor() {
        this.deck = [];
        const suits = [0, 1, 2, 3];
        // 0 = Diamonds, 1 = Clubs, 2 = Hearts, 3 = Spades
        const values = ['ace', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'jack', 'queen', 'king'];

        for (let suit in suits) {
            for (let value in values) {
                this.deck.push([values[value], suits[suit]]);
            }
        }
    }

    shuffle() {
        for (let i = 0; i < this.deck.length; i++) {
            let shuffle = Math.floor(Math.random() * (this.deck.length));
            let temp = this.deck[i];
            this.deck[i] = this.deck[shuffle]; 
            this.deck[shuffle] = temp; 
        }
    }

    startingDeal(numberOfCards, players){
        for (let x = 0; x < numberOfCards; x++) {
            for (let y = 0; y < players.length; y++) {
                players[y].push(this.deal1())
            }
        }
    }

    deal1(){
        return this.deck.pop();
      }

    show(){
        return this.deck;
    }
}