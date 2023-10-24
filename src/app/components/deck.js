export default class Deck {
    constructor() {
        this.deck = [];
        const suits = ['Hearts', 'Spades', 'Clubs', 'Diamonds'];
        const values = ['Ace', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King'];

        for (let suit in suits) {
            for (let value in values) {
                this.deck.push(`${values[value]} of ${suits[suit]}`);
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

    deal(){
        return this.deck.pop();
      }

    show(){
        return this.deck;
    }
}