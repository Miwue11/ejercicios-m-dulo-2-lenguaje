class SlotMachine {
    static coins;
    constructor() {
        this.coins = 0;
    }
    play() {
        this.coins++;
        this.boolRandom = () => Math.floor(Math.random() * 2) === 0
        const prize = this.boolRandom() && this.boolRandom() && this.boolRandom()
        if (prize) {
            const c = this.coins
            this.coins = 0;
            return `Congratulations!!!. You won ${c} coins!!`
        } else return "Good luck next time!!";
    }
}

const machine1 = new SlotMachine();
console.log(machine1.play());
console.log(machine1.play());
console.log(machine1.play());
console.log(machine1.play());
console.log(machine1.play());
console.log(machine1.play());
